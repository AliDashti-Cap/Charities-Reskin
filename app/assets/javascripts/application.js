/* global $ */

// Warn about using the kit in production
if (window.console && window.console.info) {
  window.console.info('GOV.UK Prototype Kit - do not use for production')
}

$(document).ready(function () {
  window.GOVUKFrontend.initAll()
})

// Selecting the forms
const aboutCharityForm = document.getElementById("about-charity-form")
const aboutOrganisationForm = document.getElementById("about-organisation-form")

// About the Charity - Are you claiming Gift Aid?
const claimingGiftAidGroup = document.getElementById("claiming-gift-aid-group")
const claimingGiftAidErrorMessage = document.getElementById("claiming-gift-aid-error-message")
const claimingGiftAidSelect = document.getElementById("claiming-gift-aid-select")

// About the Charity - Are you claiming UK tax deducted from other income?

const otherIncomeGroup = document.getElementById("other-income-group")
const otherIncomeErrorMessage = document.getElementById("other-icnome-error-message")
const otherIncomeSelect = document.getElementById("other-income-select")

// About the Charity - Are you claiming a top up payment for small cash donations under GASDS? These are not your Gift Aid donations.

const topUpCashGasdsGroup = document.getElementById("top-up-cash-gasds-group")
const topUpCashGasdsErrorMessage = document.getElementById("top-up-cash-gasds-error-message")
const topUpCashGasdsSelect = document.getElementById("top-up-cash-gasds-select")

// About the Charity - Are you claiming a top up payment under GASDS for donations that were not collected in a community building?

const topUpGasdsCommunityBuildingGroup = document.getElementById("top-up-gasds-community-building-group")
const topUpGasdsCommunityBuildingErrorMessage = document.getElementById("top-up-gasds-community-building-error-message")
const topUpGasdsCommunityBuildingSelect = document.getElementById("top-up-gasds-community-building-select")

// About the Charity - Are you claiming for donations collected in community buildings? 

const claimingCommunityBuildingGroup = document.getElementById("claiming-community-building-group")
const claimingCommunityBuildingErrorMessage = document.getElementById("claiming-community-building-error-message")
const claimingCommunityBuildingSelect = document.getElementById("claiming-community-building-select")

// About the Charity - Are you connected to any other charities or CASCs for the purpose of GASDS?

const connectedCharitiesGroup = document.getElementById("connected-charities-group")
const connectedCharitiesErrorMessage = document.getElementById("connected-charities-error-message")
const connectedCharitiesSelect = document.getElementById("connected-charities-select")

// About the Charity - Are you making an adjustment to a previous GASDS claim?

const adjustmentToGasdsGroup = document.getElementById("adjustment-to-gasds-group")
const adjustmentToGasdsErrorMessage = document.getElementById("adjustment-to-gasds-error-message")
const adjustmentToGasdsSelect = document.getElementById("adjustment-to-gasds-select")

// About the Organisation - Name of charity regulator 

const nameCharityRegulatorGroup = document.getElementById("name-charity-regulator-group")
const nameCharityRegulatorErrorMessage = document.getElementById("name-charity-regulator-error-message")
const nameCharityRegulatorSelect = document.getElementById("name-charity-regulator-select")

// About the Organisation - Corporate trustee

const corporateTrusteeGroup = document.getElementById("corporate-trustee-group")
const corporateTrusteeErrorMessage = document.getElementById("corporate-trustee-error-message")
const corporateTrusteeSelect = document.getElementById("corporate-trustee-select")

// About the Organisation - Charity regulator's number

const numberCharityRegulatorGroup = document.getElementById("number-charity-regulator-group")
const numberCharityRegulatorErrorMessage = document.getElementById("number-charity-regulator-error-message")
const numberCharityRegulatorInput = document.getElementById("number-charity-regulator-input")

// About the Organisation - Please provide a reason for not being registered with a regulator

const reasonNotRegisteredRegulatorGroup = document.getElementById("reason-not-registered-regulator-group")
const reasonNotRegisteredRegulatorErrorMessage = document.getElementById("reason-not-registered-regulator-error-message")
const reasonNotRegisteredRegulatorSelect = document.getElementById("reason-not-registered-regulator-select")

// About the Organisation - Name of corporate trustee 

const nameCorporateTrusteeGroup = document.getElementById("name-corporate-trustee-group")
const nameCorporateTrusteeErrorMessage = document.getElementById("name-corporate-trustee-error-message")
const nameCorporateTrusteeInput = document.getElementById("name-corporate-trustee-input")

// About the Organisation - Authorised Official First name 

const authorisedOfficialFirstNameGroup = document.getElementById("authorised-official-first-name-group")
const authorisedOfficialFirstNameErrorMessage = document.getElementById("authorised-official-first-name-error-message")
const authorisedOfficialFirstNameInput = document.getElementById("authorised-official-first-name-input")

// About the Organisation - Authorised Official Last name 

const authorisedOfficialLastNameGroup = document.getElementById("authorised-official-last-name-group")
const authorisedOfficialLastNameErrorMessage = document.getElementById("authorised-official-last-name-error-message")
const authorisedOfficialLastNameInput = document.getElementById("authorised-official-last-name-input")

// About the Organisation - Postcode 

const postcodeGroup = document.getElementById("postcode-group")
const postcodeErrorMessage = document.getElementById("postcode-error-message")
const postcodeInput = document.getElementById("postcode-input")

// About the Organisation - Phone number 

const phoneNumberGroup = document.getElementById("phone-number-group")
const phoneNumberErrorMessage = document.getElementById("phone-number-error-message")
const phoneNumberInput = document.getElementById("phone-number-input")


if (aboutCharityForm) {

// About the Charity - Listeners
aboutCharityForm.addEventListener("submit", function(e) {
  claimingGiftAidGroup.classList.remove("govuk-form-group--error")
  claimingGiftAidErrorMessage.style.display = "none"
  claimingGiftAidSelect.classList.remove("govuk-select--error")
  otherIncomeGroup.classList.remove("govuk-form-group--error")
  otherIncomeErrorMessage.style.display = "none"
  otherIncomeSelect.classList.remove("govuk-select--error")
  topUpCashGasdsGroup.classList.remove("govuk-form-group--error")
  topUpCashGasdsErrorMessage.style.display = "none"
  topUpCashGasdsSelect.classList.remove("govuk-select--error")
  topUpGasdsCommunityBuildingGroup.classList.remove("govuk-form-group--error")
  topUpGasdsCommunityBuildingErrorMessage.style.display = "none"
  topUpGasdsCommunityBuildingSelect.classList.remove("govuk-select--error")
  claimingCommunityBuildingGroup.classList.remove("govuk-form-group--error")
  claimingCommunityBuildingErrorMessage.style.display = "none"
  claimingCommunityBuildingSelect.classList.remove("govuk-select--error")
  connectedCharitiesGroup.classList.remove("govuk-form-group--error")
  connectedCharitiesErrorMessage.style.display = "none"
  connectedCharitiesSelect.classList.remove("govuk-select--error")
  adjustmentToGasdsGroup.classList.remove("govuk-form-group--error")
  adjustmentToGasdsErrorMessage.style.display = "none"
  adjustmentToGasdsSelect.classList.remove("govuk-select--error")

  if (claimingGiftAidSelect.value === "default") {
    e.preventDefault()
    claimingGiftAidGroup.classList.add("govuk-form-group--error")
    claimingGiftAidErrorMessage.style.display = "block"
    claimingGiftAidSelect.classList.add("govuk-select--error")
  }
  if (otherIncomeSelect.value === "default") {
      e.preventDefault()
      otherIncomeGroup.classList.add("govuk-form-group--error")
      otherIncomeErrorMessage.style.display = "block"
      otherIncomeSelect.classList.add("govuk-select--error")
  }
  if (topUpCashGasdsSelect.value === "default") {
    e.preventDefault()
    topUpCashGasdsGroup.classList.add("govuk-form-group--error")
    topUpCashGasdsErrorMessage.style.display = "block"
    topUpCashGasdsSelect.classList.add("govuk-select--error")
  }
  if (topUpGasdsCommunityBuildingSelect.value === "default") {
    e.preventDefault()
    topUpGasdsCommunityBuildingGroup.classList.add("govuk-form-group--error")
    topUpGasdsCommunityBuildingErrorMessage.style.display = "block"
    topUpGasdsCommunityBuildingSelect.classList.add("govuk-select--error")
  }
  if (claimingCommunityBuildingSelect.value === "default") {
    e.preventDefault()
    claimingCommunityBuildingGroup.classList.add("govuk-form-group--error")
    claimingCommunityBuildingErrorMessage.style.display = "block"
    claimingCommunityBuildingSelect.classList.add("govuk-select--error")
  }
  if (connectedCharitiesSelect.value === "default") {
    e.preventDefault()
    connectedCharitiesGroup.classList.add("govuk-form-group--error")
    connectedCharitiesErrorMessage.style.display = "block"
    connectedCharitiesSelect.classList.add("govuk-select--error")
  }
  if (adjustmentToGasdsSelect.value === "default") {
    e.preventDefault()
    adjustmentToGasdsGroup.classList.add("govuk-form-group--error")
    adjustmentToGasdsErrorMessage.style.display = "block"
    adjustmentToGasdsSelect.classList.add("govuk-select--error")
  }
})
}

if (aboutOrganisationForm) {

// About the Organisation - Listeners
aboutOrganisationForm.addEventListener("submit", function(e) {
  nameCharityRegulatorGroup.classList.remove("govuk-form-group--error")
  nameCharityRegulatorErrorMessage.style.display = "none"
  nameCharityRegulatorSelect.classList.remove("govuk-select--error")
  corporateTrusteeGroup.classList.remove("govuk-form-group--error")
  corporateTrusteeErrorMessage.style.display = "none"
  corporateTrusteeSelect.classList.remove("govuk-select--error")
  numberCharityRegulatorGroup.classList.remove("govuk-form-group--error")
  numberCharityRegulatorErrorMessage.style.display = "none"
  numberCharityRegulatorInput.classList.remove("govuk-select--error")
  nameCorporateTrusteeGroup.classList.remove("govuk-form-group--error")
  nameCorporateTrusteeErrorMessage.style.display = "none"
  nameCorporateTrusteeInput.classList.remove("govuk-select--error")
  authorisedOfficialFirstNameGroup.classList.remove("govuk-form-group--error")
  authorisedOfficialFirstNameErrorMessage.style.display = "none"
  authorisedOfficialFirstNameInput.classList.remove("govuk-select--error")
  authorisedOfficialLastNameGroup.classList.remove("govuk-form-group--error")
  authorisedOfficialLastNameErrorMessage.style.display = "none"
  authorisedOfficialLastNameInput.classList.remove("govuk-select--error")
  postcodeGroup.classList.remove("govuk-form-group--error")
  postcodeErrorMessage.style.display = "none"
  postcodeInput.classList.remove("govuk-select--error")
  phoneNumberGroup.classList.remove("govuk-form-group--error")
  phoneNumberErrorMessage.style.display = "none"
  phoneNumberInput.classList.remove("govuk-select--error")

  if (nameCharityRegulatorSelect.value === "default") {
    e.preventDefault()
    nameCharityRegulatorGroup.classList.add("govuk-form-group--error")
    nameCharityRegulatorErrorMessage.style.display = "block"
    nameCharityRegulatorSelect.classList.add("govuk-select--error")
  }

  if (corporateTrusteeSelect.value === "default") {
    e.preventDefault()
    corporateTrusteeGroup.classList.add("govuk-form-group--error")
    corporateTrusteeErrorMessage.style.display = "block"
    corporateTrusteeSelect.classList.add("govuk-select--error")
  }

  if (numberCharityRegulatorInput.value === "" || !(/^\d+$/.test(numberCharityRegulatorInput.value))) {
    // https://stackoverflow.com/a/1779019
    e.preventDefault()
    numberCharityRegulatorGroup.classList.add("govuk-form-group--error")
    numberCharityRegulatorErrorMessage.style.display = "block"
    numberCharityRegulatorInput.classList.add("govuk-select--error")
  }

  if (reasonNotRegisteredRegulatorSelect.value === "default") {
    e.preventDefault()
    reasonNotRegisteredRegulatorGroup.classList.add("govuk-form-group--error")
    reasonNotRegisteredRegulatorErrorMessage.style.display = "block"
    reasonNotRegisteredRegulatorSelect.classList.add("govuk-select--error")
  }

  if (nameCorporateTrusteeInput.value === "") {
    e.preventDefault()
    nameCorporateTrusteeGroup.classList.add("govuk-form-group--error")
    nameCorporateTrusteeErrorMessage.style.display = "block"
    nameCorporateTrusteeInput.classList.add("govuk-select--error")
  }

  if (authorisedOfficialFirstNameInput.value === "") {
    e.preventDefault()
    authorisedOfficialFirstNameGroup.classList.add("govuk-form-group--error")
    authorisedOfficialFirstNameErrorMessage.style.display = "block"
    authorisedOfficialFirstNameInput.classList.add("govuk-select--error")
  }

  if (authorisedOfficialLastNameInput.value === "") {
    e.preventDefault()
    authorisedOfficialLastNameGroup.classList.add("govuk-form-group--error")
    authorisedOfficialLastNameErrorMessage.style.display = "block"
    authorisedOfficialLastNameInput.classList.add("govuk-select--error")
  }

  if (postcodeInput.value === "") {
    e.preventDefault()
    postcodeGroup.classList.add("govuk-form-group--error")
    postcodeErrorMessage.style.display = "block"
    postcodeInput.classList.add("govuk-select--error")
  }

  if (phoneNumberInput.value === "" || !(/^\d+$/.test(phoneNumberInput.value))) {
    e.preventDefault()
    phoneNumberGroup.classList.add("govuk-form-group--error")
    phoneNumberErrorMessage.style.display = "block"
    phoneNumberInput.classList.add("govuk-select--error")
  }

})
}

if (aboutCharityForm) {

const topUpPaymentFields = document.getElementById("top-up-payment-fields")
 function topUpPaymentFieldsOnChange(e){
  
if (e.value === "yes") {
  topUpPaymentFields.style.display = "block"
}
else {
  topUpPaymentFields.style.display = "none"
}
}

const adjustmentPreviousGasdsFields = document.getElementById("adjustments-previous-gasds-fields")
 function adjustmentPreviousGasdsFieldsOnChange(e){
if (e.value === "yes") {
  adjustmentPreviousGasdsFields.style.display = "block"
}
else {
  adjustmentPreviousGasdsFields.style.display = "none"
}
}
}

if (aboutOrganisationForm) {

  const charityRegulatorNoneFields = document.getElementById("charity-regulator-none-fields")
  function charityRegulatorNoneFieldsOnChange(e){
 if (e.value === "none") {
  charityRegulatorNoneFields.style.display = "block"
 }
 else {
  charityRegulatorNoneFields.style.display = "none"
 }
 }


  }
