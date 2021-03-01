import analytics1 from "./analytics1.js";
import analytics2 from "./analytics2.js";

/**
 *
 * @param {string} eventName
 * @param {object} eventProperties
 */
const sendEvent = (eventName, eventProperties) => {
  analytics1(eventName, eventProperties);
  analytics2(eventName, eventProperties);
};

export default sendEvent;
