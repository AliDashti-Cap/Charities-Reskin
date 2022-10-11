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

// About the Organisation - Listeners
aboutOrganisationForm.addEventListener("submit", function(e) {
  nameCharityRegulatorGroup.classList.remove("govuk-form-group--error")
  nameCharityRegulatorErrorMessage.style.display = "none"
  nameCharityRegulatorSelect.classList.remove("govuk-select--error")
  corporateTrusteeGroup.classList.remove("govuk-form-group--error")
  corporateTrusteeErrorMessage.style.display = "none"
  corporateTrusteeSelect.classList.remove("govuk-select--error")


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
})
