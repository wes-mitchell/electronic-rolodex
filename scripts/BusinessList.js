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

  // Place an article element in your HTML with the class below
const companySearchResultArticle = document.querySelector(".foundCompanies")

document
    .querySelector("#companySearch")
    .addEventListener("keypress", keyPressEvent => {
        if (keyPressEvent.charCode === 13) {
            /*
                When user presses enter, find the matching business.
                You can use the `.includes()` method strings to
                see if a smaller string is part of a larger string.

                Example:
                    business.companyName.includes(keyPressEvent.target.value)
            */
            const foundBusiness = businessArr.find(element => element.companyName.includes(keyPressEvent.target.value)) // implement .find() method here

            companySearchResultArticle.innerHTML = `
                <h2>
                ${foundBusiness.companyName}
                </h2>
                <section>
                ${foundBusiness.addressFullStreet}

                </section>
                <section>
                ${foundBusiness.addressCity},
                ${foundBusiness.addressStateCode}
                ${foundBusiness.addressZipCode}
                </section>
            `;
        }
    });
}

