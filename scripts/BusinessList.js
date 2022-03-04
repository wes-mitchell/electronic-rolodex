import { getBusiness } from "./BusinessData.js";
import { Business } from "./Business.js";

const contentTarget = document.querySelector(".business-list")

export const businessList = () => {
  const businessArr = getBusiness()
  contentTarget.innerHTML = '';

  businessArr.forEach(
    (businessObj) => {
      contentTarget.innerHTML += Business(businessObj)
    })
}
