// 1. LEADGEN SET UP
// 2. DYNAMIC FORM FIELDS
//    - PDP
//    - FPF
//    - BHGAP

// ========================
// ========================
// 1. global writeDebug, pageType, getQueryValue, pageTitle, journey
// ========================
// ========================
function showDefaultForm() {
  document.getElementById('leadgen-box--form').removeChild(document.querySelector('.leadgen-dest'));
  document.getElementById('leadgen').removeAttribute('hidden');
}
function setHiddenFieldValues(programID, programName, pageTypeValue) {
  (document.getElementById('programID') || {}).value = programID || getQueryValue('certificateId') || '';
  (document.getElementById('programName') || {}).value = programName || pageTitle;
  (document.getElementById('pageType') || {}).value = pageTypeValue || pageType;
  (document.getElementById('firstSource') || {}).value = journey.firstEntry.s || '';
  (document.getElementById('firstMedium') || {}).value = journey.firstEntry.m || '';
  (document.getElementById('firstCampaign') || {}).value = journey.firstEntry.c || '';
  (document.getElementById('lastSource') || {}).value = journey.lastEntry.s || '';
  (document.getElementById('lastMedium') || {}).value = journey.lastEntry.m || '';
  (document.getElementById('lastCampaign') || {}).value = journey.lastEntry.c || '';
  (document.getElementById('fullPath') || {}).value = JSON.stringify(journey.completeJourney) || '';
}
function revealField(selectorID, requiredBoolean) {
  const fieldEl = document.getElementById(selectorID);
  if (fieldEl) {
    fieldEl.parentElement.removeAttribute('hidden');
    return requiredBoolean ? fieldEl.setAttribute('required', '') : true;
  }
  return false;
}

// ========================
// ========================
// 2. DYNAMIC FORM FIELDS
// ========================
// ========================

// ================================================
// International Telephone Input field scripts
// ================================================
// NOTE: I'd prefer we find a more accessible system than this. 

const intPhone = document.getElementById('intPhone');
const hiddenPhone = document.getElementById('phoneNumber')
if (intPhone) {
  const iti = window.intlTelInput(intPhone, {
    utilsScript: '/custom/forms/intl-tel-input/js/utils.js', // hiddenInput: 'full', 
  });
  //
  iti.setNumber(hiddenPhone.value);
  intPhone.addEventListener('blur', function() {
      hiddenPhone.value = iti.getNumber();
  });
}
  


// ================================================
// Generic Leadgen - preferred contact selection
// ================================================
// change field input options on select of contact preference
// Use Case:
/*
  <label for="methodContact">Additional Contact Information</label>
  <select class="form-control" name="methodContact" id="methodContact" onchange="preferredContactSelector(event)">
    <option disabled selected value="null">How else can we contact you?</option>
    <option value="sms">SMS (text message)</option>
    <option value="phone">Phone call</option>
    <option value="WhatsApp">WhatsApp</option>
    <option value="WeChat">WeChat</option>
    <option value="video">Video chat</option>
    <option value="email">Just email</option>
  </select>
*/
const preferredContactSelector = (event) => {
  const hiddenInputGroup = document.getElementById('preferredContactFormGroup');
  const intTelInput = document.getElementById('int-tel-wrapper');
  const preferredContact = document.getElementById('preferredContactInput');

  switch (event.target.value) {
    case 'sms': case 'phone': case 'WhatsApp':
      hiddenInputGroup.style.display = 'none';
      intTelInput.style.display = 'block';
      preferredContact.name = '';
      break;
    case 'WeChat':
      hiddenInputGroup.style.display = 'block';
      intTelInput.style.display = 'none';
      preferredContact.type = 'text';
      preferredContact.name = 'weChatID';
      preferredContact.placeholder = 'WeChat ID';
      break;
    case 'video': case 'email':
      intTelInput.style.display = 'none';
      hiddenInputGroup.style.display = 'none';
      preferredContact.name = '';
      break;
    default:
      hiddenInputGroup.style.display = 'none';
  }
};

// ================================================
// Generic Leadgen - set Drip Strings for opt-in
// ================================================
// change field input options on select of contact preference
// 
// NOTE: Do we need to set this system for all programs? 
//       If so, any way to reuse fields vs. adding yet another one?
//
// Use Case:
/* 
<div class="form-group form-check-inline" id="selectedContact" onchange="setDripString(event)">
  <label for="dripOptIn" class="form-checkbox-container">
    <input type="checkbox" name="dripOptIn" id="dripOptIn" value="" class="form-checkbox-input" />
    <span class="form-checkmark"></span>
    <span class="small">Add me to your contact list for announcements, news and special events.</span>
  </label>
</div>
*/
const setDripString = (input) => {
  const dripOptIn = document.getElementById('dripOptIn');
  const bodyId = document.body.id;
  const bodyClassLiveOnline = document.body.className.includes('liveOnline');

  switch (bodyId) {
    case 'bizAdminImmersive':
      dripOptIn.value = (bodyClassLiveOnline) ? 'Global_PDP_BizAdmin_Live_Online' : 'Global_PDP_BizAdmin';
      break;
    case 'bizDevImmersive':
      dripOptIn.value = (bodyClassLiveOnline) ? 'Global_PDP_IBD_Live_Online' : 'Global_PDP_IBD';
      break;
    case 'dataScienceImmersive':
      dripOptIn.value = (bodyClassLiveOnline) ? 'Global_PDP_DataScience_Live_Online' : 'Global_PDP_DataScience';
      break;
    case 'entrepImmersive':
      dripOptIn.value = (bodyClassLiveOnline) ? 'Global_PDP_Entrepreneurship_Live_Online' : 'Global_PDP_Entrepreneurship';
      break;
    case 'financeUiImmersive':
      dripOptIn.value = (bodyClassLiveOnline) ? 'Global_PDP_Finance_Live_Online' : 'Global_PDP_Finance';
      break;
    case 'marketingImmersive':
      dripOptIn.value = (bodyClassLiveOnline) ? 'Global_PDP_Marketing_Live_Online' : 'Global_PDP_Marketing';
      break;
    case 'prodImmersive':
      dripOptIn.value = (bodyClassLiveOnline) ? 'Global_PDP_Product-Management_Live_Online' : 'Global_PDP_Product-Management';
      break;
    case 'pmImmersive':
      dripOptIn.value = (bodyClassLiveOnline) ? 'Global_PDP_Project-Management_Live_Online' : 'Global_PDP_Project-Management';
      break;
    case 'uxUiImmersive':
      dripOptIn.value = (bodyClassLiveOnline) ? 'Global_PDP_UXUI_Live_Online' : 'Global_PDP_UXUI';
      break;
    default:
      dripOptIn.value = 'Global_default';
  }
};

// ================================================
// FPF - Global Freshmen Leadgen
// ================================================
// Selective form routing for FPF university partner vs student field input
// NOTE: This is used in a page we haven't mapped out yet which I now 
//       remember requires a form with a unique select (below).
//       Let's ignore for now. We should be able to build this module
//       to the point where I know how to extend it for things like this.
// 
// Use Case: 
/* 
<label for="leadType">Are you a Student or a University Representative?</label><p class="small mb-0 requiredLabel float-right form-text">Required Field</p>
<select class="form-control" name="leadType" id="leadType" required onchange="setFormAction(event)">
  <option disabled selected>I am a...</option>
  <option value="student">Student</option>
  <option value="universityRep">University Representative</option>
</select>
*/
const setFormAction = (input) => {
  const form = document.getElementById('leadgen-box--form');
  let dripOptIn = document.getElementById('dripOptIn');
  switch (input.target.value) {
    case 'student':
      dripOptIn.value = 'FPF_Online_Student';
      form.action = 'https://go.pardot.com/l/102272/2020-05-26/9kj7gs'; // student advisor handler
      break;
    case 'universityRep':
      dripOptIn.value = 'FPF_Online_University';
      form.action = 'https://go.pardot.com/l/102272/2020-05-26/9kj7gb'; // University Partner handler
      break;
    default:
      dripOptIn = 'FPF_Online_Student';
      form.action = 'https://go.pardot.com/l/102272/2020-05-26/9kj7gs';
  }
};

// Sets up the Other field to deliver the value to the same 
// Pardot field used by the dropdown. 

const showWriteIn = (selectValue) => {
  const hiddenInputGroup = document.getElementById('hiddenWriteIn');
  const intendedMajorGroup = document.getElementById('intendedMajorDropdown');
  switch (selectValue) {
    case 'otherWriteIn': case 'doubleMajorWriteIn':
      hiddenInputGroup.style.display = 'block';
      hiddenInputGroup.children[1].name = 'intendedMajor';
      hiddenInputGroup.children[1].id = 'intendedMajor';
      intendedMajorGroup.children[2].name = '';
      intendedMajorGroup.children[2].id = '';
      break;
    default:
      hiddenInputGroup.style.display = 'none';
      hiddenInputGroup.children[1].name = 'writeIn';
      hiddenInputGroup.children[1].id = 'writeIn';
      intendedMajorGroup.children[2].name = 'intendedMajor';
      intendedMajorGroup.children[2].id = 'intendedMajor';
  }
};