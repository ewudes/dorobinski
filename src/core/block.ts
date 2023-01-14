import { nanoid } from "nanoid";
import EventBus from "./eventBus";

abstract class Block {
  private EVENTS: Record<string, string> = {
    INIT: "init",
    FLOW_CDM: "flow:component-did-mount",
    FLOW_CDU: "flow:component-did-update",
    FLOW_CWU: "flow:component-will-unmount",
    FLOW_RENDER: "flow:render",
  };
  private element: HTMLElement;
  private tagName: string;

  protected eventBus: EventBus;
  protected props: Record<string, any>;
  protected children: Record<string, Block>;
  protected id: string;

  public constructor(
    tagName: string = "div",
    propsAndChildren: Record<string, any> = {}
  ) {
    this.tagName = tagName;
    this.id = nanoid();

    const { children, props } = this.getChildren(propsAndChildren);
    this.children = children;
    this.props = this.makePropsProxy({ ...props, id: this.id });

    this.eventBus = new EventBus();
    this.registerEvent();
    this.eventBus.emit(this.EVENTS.INIT);
  }

  public setProps(newProps: Record<string, any>): void {
    if (!newProps) return;

    Object.assign(this.props, newProps);
  }

  public getElement(): HTMLElement {
    return this.element;
  }

  public deleteElement(): void {
    this.eventBus.emit(this.EVENTS.FLOW_CWU);
  }

  public show() {
    this.getElement().style.display = "block";
  }

  public hide() {
    this.getElement().style.display = "none";
  }

  public dispatchMountComponent(): void {
    this.eventBus.emit(this.EVENTS.FLOW_CDM);
  }

  public componentDidMount(): void {}

  public componentDidUpdate(): void {}

  public componentWillUnmount(): void {}

  public abstract render(): DocumentFragment;

  private mountComponent(): void {
    this.componentDidMount();

    Object.values(this.children).forEach((child) => {
      if (Array.isArray(child)) {
        child.forEach((innerChild: Record<string, Block>) => {
          Object.values(innerChild).forEach((child) => {
            child.dispatchMountComponent();
          });
        });
      } else {
        child.dispatchMountComponent();
      }
    });
  }

  private updateComponent(): void {
    this.removeEvents();
    this.eventBus.emit(this.EVENTS.FLOW_RENDER);
    this.componentDidUpdate();
  }

  private unmountComponent(): void {
    this.componentWillUnmount();
    this.removeEvents();

    this.element.remove();
  }

  private renderComponent(): void {
    const fragment = this.render();
    const element = fragment.firstElementChild as HTMLElement;

    this.element.replaceWith(element);
    this.element = element;

    this.addEvents();
  }

  private makePropsProxy(props: Record<string, any>): Record<string, any> {
    const proxySetting = {
      get: (target: Record<string, any>, prop: string): unknown => {
        return target[prop];
      },

      set: (
        target: Record<string, any>,
        prop: string,
        value: unknown
      ): boolean => {
        const oldProps = target[prop];
        target[prop] = value;

        this.eventBus.emit(this.EVENTS.FLOW_CDU, oldProps, target[prop]);
        return true;
      },

      deleteProperty: (target: Record<string, any>, prop: string): boolean => {
        const oldProps = target[prop];
        delete target[prop];

        this.eventBus.emit(this.EVENTS.FLOW_CDU, oldProps, target[prop]);
        return true;
      },
    };

    return new Proxy(props, proxySetting);
  }

  private registerEvent(): void {
    this.eventBus.on(this.EVENTS.INIT, this.init.bind(this));
    this.eventBus.on(this.EVENTS.FLOW_CDM, this.mountComponent.bind(this));
    this.eventBus.on(this.EVENTS.FLOW_CDU, this.updateComponent.bind(this));
    this.eventBus.on(this.EVENTS.FLOW_CWU, this.unmountComponent.bind(this));
    this.eventBus.on(this.EVENTS.FLOW_RENDER, this.renderComponent.bind(this));
  }

  private init(): void {
    this.createResources();
    this.eventBus.emit(this.EVENTS.FLOW_RENDER);
  }

  private createResources(): void {
    this.element = this.createDocumentElement(this.tagName);
  }

  private createDocumentElement(tagName: string): HTMLElement {
    return document.createElement(tagName);
  }

  private addEvents(): void {
    const { events } = this.props;

    if (events) {
      Object.keys(events).forEach((eventName) => {
        this.element.addEventListener(eventName, events[eventName]);
      });
    }
  }

  private removeEvents(): void {
    const { events } = this.props;

    if (events) {
      Object.keys(events).forEach((eventName) => {
        this.element.addEventListener(eventName, events[eventName]);
      });
    }
  }

  private getChildren(propsAndChildren: Record<string, any>) {
    const children: Record<string, Block> | any = {};
    const props: Record<string, any> = {};

    Object.entries(propsAndChildren).forEach(([key, value]) => {
      if (
        value instanceof Block ||
        (Array.isArray(value) && Object.values(value[0])[0] instanceof Block)
      ) {
        children[key] = value;
      } else {
        props[key] = value;
      }
    });

    return { children, props };
  }

  protected setTemplate(template: Function, props: Record<string, any>) {
    const propsAndStubs = { ...props };

    // Create the stubs
    Object.entries(this.children).forEach(([key, child]) => {
      if (Array.isArray(child) && Object.values(child[0])[0] instanceof Block) {
        // If the array of properties
        child.forEach((innerChild: Record<string, Block>) => {
          Object.entries(innerChild).forEach(([innerChildKey, child]) => {
            if (!propsAndStubs[key]) {
              propsAndStubs[key] = [];
            }

            propsAndStubs[key].push({
              [innerChildKey]: `<div data-id="${child.id}"></div>`,
            });
          });
        });
      } else {
        propsAndStubs[key] = `<div data-id="${child.id}"></div>`;
      }
    });

    const fragment = this.createDocumentElement(
      "template"
    ) as HTMLTemplateElement;
    fragment.innerHTML = template(propsAndStubs);

    // Replace the stubs with a Block
    Object.values(this.children).forEach((child) => {
      if (Array.isArray(child) && Object.values(child[0])[0] instanceof Block) {
        // If the array of properties
        child.forEach((innerChild: Record<string, Block>) => {
          Object.entries(innerChild).forEach(([[], child]) => {
            const stub = fragment.content.querySelector(
              `[data-id="${child.id}"]`
            );
            (stub as HTMLElement).replaceWith(child.getElement());
          });
        });
      } else {
        const stub = fragment.content.querySelector(`[data-id="${child.id}"]`);
        (stub as HTMLElement).replaceWith(child.getElement());
      }
    });

    return fragment.content;
  }
}

export default Block;
