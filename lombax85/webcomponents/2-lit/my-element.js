import {LitElement, html} from '../../node_modules/lit/index.js'
import {ClockController} from './clock-controller.js';

class MyElement extends LitElement {
  // Create the controller and store it
  clock = new ClockController(this, 100);

  // Use the controller in render()
  render() {
    const formattedTime = timeFormat.format(this.clock.value);
    return html`Current time: ${formattedTime}`;
  }
}
customElements.define('my-element', MyElement);

const timeFormat = new Intl.DateTimeFormat('en-US', {
  hour: 'numeric',
  minute: 'numeric',
  second: 'numeric',
});
