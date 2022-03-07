import { getBusiness } from "./BusinessData.js";
import { Business } from "./Business.js";

const contentTarget = document.querySelector(".business-list")
const newYorkTarget = document.querySelector(".newYork-list")

export const businessList = () => {
  const businessArr = getBusiness()
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
}