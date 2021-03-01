/**
 * 
 * @param {string} eventName 
 * @param {object} eventProperties 
 */
const sendEvent = (eventName, eventProperties) => console.log('analytics 2', {eventName, eventProperties});

export default sendEvent;