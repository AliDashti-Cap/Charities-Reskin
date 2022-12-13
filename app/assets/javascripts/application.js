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
const gasdsDetailsForm = document.getElementById("gasds-details-form")
const charityRepaymentClaimSummary = document.getElementById("charity-repayment-claim-summary")


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

// GASDS Details - Tax year 1 ending 5 April

const taxYearOneEndGroup = document.getElementById("tax-year-one-end-group")
const taxYearOneEndErrorMessage = document.getElementById("tax-year-one-end-error-message")
const taxYearOneEndInput = document.getElementById("tax-year-one-end-input")

// GASDS Details - YEAR 1: Amount of donations on which you are claiming a top up payment under GASDS

const donationTopUpAmountYearOneGroup = document.getElementById("donation-top-up-amount-year-one-group")
const donationTopUpAmountYearOneErrorMessage = document.getElementById("donation-top-up-amount-year-one-error-message")
const donationTopUpAmountYearOneInput = document.getElementById("donation-top-up-amount-year-one-input")

// GASDS Details - Do you want to make a claim for second tax year?

const claimSecondTaxYearGroup = document.getElementById("claim-second-tax-year-group")
const claimSecondTaxYearErrorMessage = document.getElementById("claim-second-tax-year-error-message")
const claimSecondTaxYearSelect = document.getElementById("claim-second-tax-year-select")

// GASDS Details - Tax year 2 ending 5 April 

const taxYearTwoEndGroup = document.getElementById("tax-year-two-end-group")
const taxYearTwoEndErrorMessage = document.getElementById("tax-year-two-end-error-message")
const taxYearTwoEndInput = document.getElementById("tax-year-two-end-input")

// GASDS Details - YEAR 2: Amount of donations on which you are claiming a top up payment under GASDS.

const donationTopUpAmountYearTwoGroup = document.getElementById("donation-top-up-amount-year-two-group")
const donationTopUpAmountYearTwoErrorMessage = document.getElementById("donation-top-up-amount-year-two-error-message")
const donationTopUpAmountYearTwoInput = document.getElementById("donation-top-up-amount-year-two-input")


// GASDS Details - Do you want to make a claim for third tax year?

const claimThirdTaxYearGroup = document.getElementById("claim-third-tax-year-group")
const claimThirdTaxYearErrorMessage = document.getElementById("claim-third-tax-year-error-message")
const claimThirdTaxYearSelect = document.getElementById("claim-third-tax-year-select")


// GASDS Details - Tax year 3 ending 5 April

const taxYearThreeEndGroup = document.getElementById("tax-year-three-end-group")
const taxYearThreeEndErrorMessage = document.getElementById("tax-year-three-end-error-message")
const taxYearThreeEndInput = document.getElementById("tax-year-three-end-input")

// GASDS Details - YEAR 3: Amount of donations on which you are claiming a top up payment under GASDS.

const donationTopUpAmountYearThreeGroup = document.getElementById("donation-top-up-amount-year-three-group")
const donationTopUpAmountYearThreeErrorMessage = document.getElementById("donation-top-up-amount-year-three-error-message")
const donationTopUpAmountYearThreeInput = document.getElementById("donation-top-up-amount-year-three-input")

// GASDS Details - Adjustment for Gift Aid previously over-claimed:

const adjustmentForGiftAidGroup = document.getElementById("adjustment-for-gift-aid-group")
const adjustmentForGiftAidErrorMessage = document.getElementById("adjustment-for-gift-aid-error-message")
const adjustmentForGiftAidInput= document.getElementById("adjustment-for-gift-aid-input")




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

  let test = false

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

  if (topUpCashGasdsSelect.value === "yes") {
  test = true
  }


  if (topUpGasdsCommunityBuildingSelect.value === "default") {
    // e.preventDefault()
    topUpGasdsCommunityBuildingGroup.classList.add("govuk-form-group--error")
    topUpGasdsCommunityBuildingErrorMessage.style.display = "block"
    topUpGasdsCommunityBuildingSelect.classList.add("govuk-select--error")
  }
  if (claimingCommunityBuildingSelect.value === "default") {
    // e.preventDefault()
    claimingCommunityBuildingGroup.classList.add("govuk-form-group--error")
    claimingCommunityBuildingErrorMessage.style.display = "block"
    claimingCommunityBuildingSelect.classList.add("govuk-select--error")
  }
  if (connectedCharitiesSelect.value === "default") {
    // e.preventDefault()
    connectedCharitiesGroup.classList.add("govuk-form-group--error")
    connectedCharitiesErrorMessage.style.display = "block"
    connectedCharitiesSelect.classList.add("govuk-select--error")
  }
  if (adjustmentToGasdsSelect.value === "default"){
    // e.preventDefault()
    adjustmentToGasdsGroup.classList.add("govuk-form-group--error")
    adjustmentToGasdsErrorMessage.style.display = "block"
    adjustmentToGasdsSelect.classList.add("govuk-select--error")

  }

  localStorage.setItem("first-form","true")
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
    // e.preventDefault()
    reasonNotRegisteredRegulatorGroup.classList.add("govuk-form-group--error")
    reasonNotRegisteredRegulatorErrorMessage.style.display = "block"
    reasonNotRegisteredRegulatorSelect.classList.add("govuk-select--error")
  }

  if (nameCorporateTrusteeInput.value === "") {
    // e.preventDefault()
    nameCorporateTrusteeGroup.classList.add("govuk-form-group--error")
    nameCorporateTrusteeErrorMessage.style.display = "block"
    nameCorporateTrusteeInput.classList.add("govuk-select--error")
  }

  if (authorisedOfficialFirstNameInput.value === "") {
    // e.preventDefault()
    authorisedOfficialFirstNameGroup.classList.add("govuk-form-group--error")
    authorisedOfficialFirstNameErrorMessage.style.display = "block"
    authorisedOfficialFirstNameInput.classList.add("govuk-select--error")
  }

  if (authorisedOfficialLastNameInput.value === "") {
    // e.preventDefault()
    authorisedOfficialLastNameGroup.classList.add("govuk-form-group--error")
    authorisedOfficialLastNameErrorMessage.style.display = "block"
    authorisedOfficialLastNameInput.classList.add("govuk-select--error")
  }

  if (postcodeInput.value === "") {
    // e.preventDefault()
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

  localStorage.setItem("second-form","true")

})
}

const giftAidUpload = document.querySelector("#gas-schedule-confirmation-form")

if (giftAidUpload) {
  giftAidUpload.addEventListener("submit", function(e) {
  localStorage.setItem("third-form","true")
})
}

if (gasdsDetailsForm) {
  // GASDS Details - Listeners
gasdsDetailsForm.addEventListener("submit", function(e) {
  taxYearOneEndGroup.classList.remove("govuk-form-group--error")
  taxYearOneEndErrorMessage.style.display = "none"
  taxYearOneEndInput.classList.remove("govuk-select--error")
  donationTopUpAmountYearOneGroup.classList.remove("govuk-form-group--error")
  donationTopUpAmountYearOneErrorMessage.style.display = "none"
  donationTopUpAmountYearOneInput.classList.remove("govuk-select--error")
  claimSecondTaxYearGroup.classList.remove("govuk-form-group--error")
  claimSecondTaxYearErrorMessage.style.display = "none"
  claimSecondTaxYearSelect.classList.remove("govuk-select--error")
  taxYearTwoEndGroup.classList.remove("govuk-form-group--error")
  taxYearTwoEndErrorMessage.style.display = "none"
  taxYearTwoEndInput.classList.remove("govuk-select--error")
  donationTopUpAmountYearTwoGroup.classList.remove("govuk-form-group--error")
  donationTopUpAmountYearTwoErrorMessage.style.display = "none"
  donationTopUpAmountYearTwoInput.classList.remove("govuk-select--error")
  claimThirdTaxYearGroup.classList.remove("govuk-form-group--error")
  claimThirdTaxYearErrorMessage.style.display = "none"
  claimThirdTaxYearSelect.classList.remove("govuk-select--error")
  taxYearThreeEndGroup.classList.remove("govuk-form-group--error")
  taxYearThreeEndErrorMessage.style.display = "none"
  taxYearThreeEndInput.classList.remove("govuk-select--error")
  donationTopUpAmountYearThreeGroup.classList.remove("govuk-form-group--error")
  donationTopUpAmountYearThreeErrorMessage.style.display = "none"
  donationTopUpAmountYearThreeInput.classList.remove("govuk-select--error")
  adjustmentForGiftAidGroup.classList.remove("govuk-form-group--error")
  adjustmentForGiftAidErrorMessage.style.display = "none"
  adjustmentForGiftAidInput.classList.remove("govuk-select--error")

  if (taxYearOneEndInput.value === "" || !(/^\d+$/.test(taxYearOneEndInput.value))) {
    e.preventDefault()
    taxYearOneEndGroup.classList.add("govuk-form-group--error")
    taxYearOneEndErrorMessage.style.display = "block"
    taxYearOneEndInput.classList.add("govuk-select--error")
}

if (donationTopUpAmountYearOneInput.value === "" || !(/^\d+$/.test(donationTopUpAmountYearOneInput.value))) {
  e.preventDefault()
  donationTopUpAmountYearOneGroup.classList.add("govuk-form-group--error")
  donationTopUpAmountYearOneErrorMessage.style.display = "block"
  donationTopUpAmountYearOneInput.classList.add("govuk-select--error")
}

if (claimSecondTaxYearSelect.value === "default") {
  e.preventDefault()
  claimSecondTaxYearGroup.classList.add("govuk-form-group--error")
  claimSecondTaxYearErrorMessage.style.display = "block"
  claimSecondTaxYearSelect.classList.add("govuk-select--error")
}

if (taxYearTwoEndInput.value === "" || !(/^\d+$/.test(taxYearTwoEndInput.value))) {
  // e.preventDefault()
  taxYearTwoEndGroup.classList.add("govuk-form-group--error")
  taxYearTwoEndErrorMessage.style.display = "block"
  taxYearTwoEndInput.classList.add("govuk-select--error")
}

if (donationTopUpAmountYearTwoInput.value === "" || !(/^\d+$/.test(donationTopUpAmountYearTwoInput.value))) {
  // e.preventDefault()
  donationTopUpAmountYearTwoGroup.classList.add("govuk-form-group--error")
  donationTopUpAmountYearTwoErrorMessage.style.display = "block"
  donationTopUpAmountYearTwoInput.classList.add("govuk-select--error")
}

if (claimThirdTaxYearSelect.value === "default") {
  // e.preventDefault()
  claimThirdTaxYearGroup.classList.add("govuk-form-group--error")
  claimThirdTaxYearErrorMessage.style.display = "block"
  claimThirdTaxYearSelect.classList.add("govuk-select--error")
}

if (taxYearThreeEndInput.value === "" || !(/^\d+$/.test(taxYearThreeEndInput.value))) {
  // e.preventDefault()
  taxYearThreeEndGroup.classList.add("govuk-form-group--error")
  taxYearThreeEndErrorMessage.style.display = "block"
  taxYearThreeEndInput.classList.add("govuk-select--error")
}

if (donationTopUpAmountYearThreeInput.value === "" || !(/^\d+$/.test(donationTopUpAmountYearThreeInput.value))) {
  // e.preventDefault()
  donationTopUpAmountYearThreeGroup.classList.add("govuk-form-group--error")
  donationTopUpAmountYearThreeErrorMessage.style.display = "block"
  donationTopUpAmountYearThreeInput.classList.add("govuk-select--error")
}

if (adjustmentForGiftAidInput.value === "" || !(/^\d+$/.test(adjustmentForGiftAidInput.value))) {
  e.preventDefault()
  adjustmentForGiftAidGroup.classList.add("govuk-form-group--error")
  adjustmentForGiftAidErrorMessage.style.display = "block"
  adjustmentForGiftAidInput.classList.add("govuk-select--error")
}

})}

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
    if (claimingCommunityBuildingSelect.value === "yes" || topUpGasdsCommunityBuildingSelect.value === "yes" ) {
      adjustmentPreviousGasdsFields.style.display = "block"
    }
    else if (claimingCommunityBuildingSelect.value === "no" && topUpGasdsCommunityBuildingSelect.value === "no" )  {
      adjustmentPreviousGasdsFields.style.display = "none"
    }
    }
}

if (aboutOrganisationForm) {

  const charityRegulatorNoneFields = document.getElementById("charity-regulator-none-fields")
  const numberCharityRegulatorFields = document.getElementById("number-charity-regulator-fields")
  function charityRegulatorNoneFieldsOnChange(e){
    if (e.value === "none") {
      charityRegulatorNoneFields.style.display = "block"
      numberCharityRegulatorFields.style.display = "none"
    }
    else {
      charityRegulatorNoneFields.style.display = "none"
      numberCharityRegulatorFields.style.display = "block"
    }
  }

  const authorisedOfficialFields = document.getElementById("authorised-official-fields")
  function nameCorporateTrusteeGroupOnChange(e){
    if (e.value === "yes") {
      nameCorporateTrusteeGroup.style.display = "block"
      authorisedOfficialFields.style.display = "none"
      postcodeGroup.style.display = "block"
    }
    else if (e.value === "no")  {
      nameCorporateTrusteeGroup.style.display = "none"
      authorisedOfficialFields.style.display = "block"
      postcodeGroup.style.display = "block"
    }
    else {
      nameCorporateTrusteeGroup.style.display = "none"
      authorisedOfficialFields.style.display = "none"
      postcodeGroup.style.display = "none"
    }
  }
}

if (gasdsDetailsForm) {

  const secondTaxYear = document.getElementById("second-tax-year")
    function secondTaxYearOnChange(e){
    if (e.value === "yes") {
      secondTaxYear.style.display = "block"
    }
    else {
      secondTaxYear.style.display = "none"
    }
    }

    const thirdTaxYear = document.getElementById("third-tax-year")
    function thirdTaxYearOnChange(e){
    if (e.value === "yes") {
      thirdTaxYear.style.display = "block"
    }
    else {
      thirdTaxYear.style.display = "none"
    }
    }
}

const giftAidTaskShow = document.getElementById("gift-aid-task-show")
const giftAidTaskList = document.getElementById("gift-aid-task-list")
function giftAidTaskListOnLoad(e) {
  if (giftAidTaskShow.value === "yes") {
    console.log("yes")
    giftAidTaskList.style.display = "block"
  }
  else {
    console.log("no")
    giftAidTaskList.style.display = "none"
  }
  }

  const otherIncomeTaskShow = document.getElementById("other-income-task-show")
  const otherIncomeTaskList = document.getElementById("other-income-task-list")
  function otherIncomeTaskListOnLoad(e) {
    if (otherIncomeTaskShow.value === "yes") {
      console.log("yes")
      otherIncomeTaskList.style.display = "block"
    }
    else {
      console.log("no")
      otherIncomeTaskList.style.display = "none"
    }
    }

    const gasdsTaskListTitle = document.getElementById("gasds-task-list-title")


    const gasdsDetailsTaskShow = document.getElementById("gasds-details-task-show")
    const gasdsTaskListDonationDetails = document.getElementById("gasds-task-list-donation-details")
    function gasdsTaskListDonationDetailsOnLoad(e) {
      if (gasdsDetailsTaskShow.value === "yes") {
        console.log("yes")
        gasdsTaskListTitle.style.display = "block"
        gasdsTaskListDonationDetails.style.display = "block"
      }
      else {
        console.log("no")
        gasdsTaskListDonationDetails.style.display = "none"
      }
      }

      const gasdsCommunityBuildingsTaskShow = document.getElementById("gasds-community-buildings-task-show")
      const gasdsTaskListCommunityBuildings = document.getElementById("gasds-task-list-community-buildings")
      function gasdsTaskListCommunityBuildingsOnLoad(e) {
        if (gasdsCommunityBuildingsTaskShow.value === "yes") {
          console.log("yes")
          gasdsTaskListTitle.style.display = "block"
          gasdsTaskListCommunityBuildings.style.display = "block"
        }
        else {
          console.log("no")
          gasdsTaskListCommunityBuildings.style.display = "none"
        }
        }
        
      const gasdsConnectedCharitiesTaskShow = document.getElementById("gasds-connected-charities-task-show")
      const gasdsTaskListConnectedCharities = document.getElementById("gasds-task-list-connected-charities")
      function gasdsTaskListConnectedCharitiesOnLoad(e) {
        if (gasdsConnectedCharitiesTaskShow.value === "yes") {
          console.log("yes")
          gasdsTaskListTitle.style.display = "block"
          gasdsTaskListConnectedCharities.style.display = "block"
        }
        else {
          console.log("no")
          gasdsTaskListConnectedCharities.style.display = "none"
        }
        }

const aboutCharityTagIncompelete = document.getElementById("about-charity-tag-incomplete")
const aboutCharityTagCompelete = document.getElementById("about-charity-tag-compelete")
const aboutOrganisationTagIncompelete = document.getElementById("about-organisation-tag-incomplete")
const aboutOrganisationTagCompelete = document.getElementById("about-organisation-tag-compelete")
const attachGiftAidScheduleTagIncompelete = document.getElementById("attach-gift-aid-schedule-tag-incomplete")
const attachGiftAidScheduleTagCompelete = document.getElementById("attach-gift-aid-schedule-tag-complete")

if (localStorage.getItem("first-form") === "true") {
  aboutCharityTagIncompelete.style.display = "none"
  aboutCharityTagCompelete.style.display = "block"
}

if (localStorage.getItem("second-form") === "true") {
  aboutOrganisationTagIncompelete.style.display = "none"
  aboutOrganisationTagCompelete.style.display = "block"
}

if (localStorage.getItem("third-form") === "true") {
  attachGiftAidScheduleTagIncompelete.style.display = "none"
  attachGiftAidScheduleTagCompelete.style.display = "block"
}


// function updateFormStatusAboutCharity()
// {
//   console.log("Sami is the best")
//   console.log(isFormOneComplete.value)
//   // if (req.session.data['about-charity-form-pass']) {
//   //   aboutCharityTagCompelete.style.display = "block"
//   //   aboutCharityTagIncompelete.style.display = "none"
//   // }

//   // else {
//   //   aboutCharityTagCompelete.style.display = "none"
//   //   aboutCharityTagIncompelete.style.display = "block"
//   // }
// }


if (charityRepaymentClaimSummary) {
const submissionCellDate = document.getElementById("submission-cell-date")
const date = new Date();

const day = date.getDate();
const month = date.getMonth() + 1;
const year = date.getFullYear();

// This arrangement can be altered based on how we want the date's format to appear.
const currentDate = `${day}/${month}/${year}`;
console.log(currentDate); // "17-6-2022"
}