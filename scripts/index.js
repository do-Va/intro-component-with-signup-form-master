const formSubmit = document.querySelector('.form');

const emailInput = document.querySelector('.email-input');
const fNameInput = document.querySelector('.fname');
const lNameInput = document.querySelector('.lname');
const passwordInput = document.querySelector('.password');

const eIcon = document.querySelector('.e-icon');
const fIcon = document.querySelector('.f-icon');
const lIcon = document.querySelector('.l-icon');
const pIcon = document.querySelector('.p-icon');

const eError = document.querySelector('.e-error');
const fError = document.querySelector('.f-error');
const lError = document.querySelector('.l-error');
const pError = document.querySelector('.p-error');

const validateEmail = email => {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
};

const addClass = (element1, element2, className) => {
  element1.classList.add(className);
  element2.classList.add(className);
};

const removeClass = (element1, element2, className) => {
  element1.classList.remove(className);
  element2.classList.remove(className);
};

const isEmptyAddClass = (main, element1, element2, className) => {
  if (main.value === '') {
    element1.classList.add(className);
    element2.classList.add(className);
  } else {
    element1.classList.remove(className);
    element2.classList.remove(className);
  }
};

formSubmit.addEventListener('submit', e => {
  e.preventDefault();

  if (!validateEmail(emailInput.value)) {
    addClass(eError, eIcon, 'show');
    emailInput.classList.add('error');
    emailInput.placeholder = 'email@example/com';
  } else {
    removeClass(eError, eIcon, 'show');
    emailInput.classList.remove('error');
  }

  isEmptyAddClass(fNameInput, fError, fIcon, 'show');
  isEmptyAddClass(lNameInput, lError, lIcon, 'show');
  isEmptyAddClass(passwordInput, pError, pIcon, 'show');
});
