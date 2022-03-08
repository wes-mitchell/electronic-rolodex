
export const Business = (businessObj) => {  
  return `<li class='business-name'><h3>${businessObj.companyName}</h3></li>
  <li class="business-street">${businessObj.addressFullStreet}</li>
  <li class="business-state">${businessObj.addressCity}, ${businessObj.addressStateCode} ${businessObj.addressZipCode}</li>
  <\hr>
  `
}

export const Agents = (agentObj) => {
  return `<li class='agent-name'><h3>${agentObj.fullName}</h3></li>
  <li class="agent-company">${agentObj.company}</li>
  <li class="agent-phone">${agentObj.phoneNumber}</li>
  <\hr>
  `
}
