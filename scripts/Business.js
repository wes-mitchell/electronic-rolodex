
export const Business = (businessObj) => {  
  return `<li class='business-name'><h3>${businessObj.companyName}</h3></li>
  <li class="business-street">${businessObj.addressFullStreet}</li>
  <li class="business-state">${businessObj.addressCity}, ${businessObj.addressStateCode} ${businessObj.addressZipCode}</li>
  <\hr>
  `
}
