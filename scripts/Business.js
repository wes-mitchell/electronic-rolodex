
export const Business = (businessObj) => {  
  return `<div class="content-card"><section class='business-name'><h3>${businessObj.companyName}</h3>
  <p class="business-street">${businessObj.addressFullStreet}</p>
  <p class="business-state">${businessObj.addressCity}, ${businessObj.addressStateCode} ${businessObj.addressZipCode}</p>
  </div>`
}

export const Agents = (agentObj) => {
  return `<div class="content-card"><section class='agent-name'><h3>${agentObj.fullName}</h3></p>
  <p class="agent-company">${agentObj.company}</p>
  <p class="agent-phone">${agentObj.phoneNumber}</p>
  </div>`
}
