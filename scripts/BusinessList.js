import { getBusiness } from "./BusinessData.js";
import { Business } from "./Business.js";
import { Agents } from "./Business.js";
import { purchaseAgent } from "./BusinessData.js";

const contentTarget = document.querySelector(".business-list")
const newYorkTarget = document.querySelector(".newYork-list")
const agentTarget = document.querySelector(".agents")

export const businessList = () => {
  const businessArr = getBusiness()
  const agentArr = purchaseAgent
  const newYorkArr = businessArr.filter(business => {
    return business.addressStateCode.toLowerCase() === "ny"
  })

  // contentTarget.innerHTML = ''
  businessArr.forEach(element => {
    contentTarget.innerHTML += Business(element)
  })

  // newYorkTarget.innerHTML = ''
  newYorkArr.forEach(element => {
    newYorkTarget.innerHTML += Business(element)
  })

  agentArr.forEach(element => {
    agentTarget.innerHTML += Agents(element)
  } )
}