/* global $ */

// Warn about using the kit in production
if (window.console && window.console.info) {
  window.console.info('GOV.UK Prototype Kit - do not use for production')
}

$(document).ready(function () {
  window.GOVUKFrontend.initAll()
})

// Selecting the form
const aboutCharityForm = document.getElementById("about-charity-form")

// Are you claiming Gift Aid?
const claimingGiftAidSelect = document.getElementById("claiming-gift-aid-select")
const claimingGiftAidErrorMessage = document.getElementById("claiming-gift-aid-error-message")
const claimingGiftAidGroup = document.getElementById("claiming-gift-aid-group")

// Are you claiming UK tax deducted from other income?

const otherIncomeSelect = document.getElementById("other-income-select")
const otherIncomeErrorMessage = document.getElementById("other-icnome-error-message")
const otherIncomeGroup = document.getElementById("other-income-group")

aboutCharityForm.addEventListener("submit", function(e) {
  claimingGiftAidGroup.classList.remove("govuk-form-group--error")
  claimingGiftAidSelect.classList.remove("govuk-select--error")
  claimingGiftAidErrorMessage.style.display = "none"
  otherIncomeGroup.classList.remove("govuk-form-group--error")
  otherIncomeSelect.classList.remove("govuk-select--error")
  otherIncomeErrorMessage.style.display = "none"



  if (claimingGiftAidSelect.value === "default") {
      e.preventDefault()
      claimingGiftAidErrorMessage.style.display = "block"
    claimingGiftAidGroup.classList.add("govuk-form-group--error")
    claimingGiftAidSelect.classList.add("govuk-select--error")
  }
  if (otherIncomeSelect.value === "default") {
      e.preventDefault()
      otherIncomeErrorMessage.style.display = "block"
      otherIncomeGroup.classList.add("govuk-form-group--error")
      otherIncomeSelect.classList.add("govuk-select--error")
  }
})

