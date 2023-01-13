import queryStringify from "./queryStringify";

enum Methods {
  GET = "GET",
  POST = "POST",
  PUT = "PUT",
  DELETE = "DELETE",
}

type Options = {
  timeout?: number;
  method: string;
  headers?: Record<string, string>;
  data?: any;
};

class HTTPTransport {
  public get = (url: string, options: Options) => {

    return this.request(
      `${url}${queryStringify(options.data)}`,
      { ...options, method: Methods.GET },
      options.timeout
    );
  };

  public post = (url: string, options: Options) => {
    return this.request(
      url,
      { ...options, method: Methods.POST },
      options.timeout
    );
  };

  public put = (url: string, options: Options) => {
    return this.request(
      url,
      { ...options, method: Methods.PUT },
      options.timeout
    );
  };

  public delete = (url: string, options: Options) => {
    return this.request(
      url,
      { ...options, method: Methods.DELETE },
      options.timeout
    );
  };

  private request = (url: string, options: Options, timeout = 3000) => {
    const { headers = {}, method } = options;

    return new Promise((res, rej) => {
      const xhr = new XMLHttpRequest();

      xhr.open(
        method,
        url
      );

      Object.keys(headers).forEach((key) => {
        xhr.setRequestHeader(key, headers[key]);
      });

      xhr.timeout = timeout;

      xhr.onload = () => res(xhr);
      xhr.onabort = rej;
      xhr.onerror = rej;
      xhr.ontimeout = rej;

      xhr.send();
    });
  };
}

export default HTTPTransport;
