import Block from "../../../core/block";

import appointment from "./appointment.tml";
import './appointment.scss'

interface IAppointment {
}

class Appointment extends Block {
  constructor(props?: IAppointment) {
    super("div", props);
  }

  render() {
    return this.setTemplate(appointment, this.props);
  }
}

export default Appointment;
