/**
 * 
 * @param {string} eventName 
 * @param {object} eventProperties 
 */
const sendEvent = (eventName, eventProperties) => console.log('analytics 1', {eventName, eventProperties});

export default sendEvent;