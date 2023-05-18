let faBars = document.querySelector('.fa-bars')
let faTimes = document.querySelector('.fa-times')
let navbar = document.querySelector('.navbarA ul')
let cardNumber = document.querySelector('#cardnumber')
let ExpiredDate = document.querySelector('#ExpiredDate')
let securityCode = document.querySelector('#securityCode')
let postalCode = document.querySelector('#postalCode')

faBars.addEventListener('click', () => {
  faBars.style.display = 'none'
  faTimes.style.display = 'block'
  navbar.style.marginLeft = "-96px"
})

faTimes.addEventListener('click', () => {
  faBars.style.display = 'block'
  faTimes.style.display = 'none'
  navbar.style.marginLeft = "-110%"
})

/*
function validate() {
  if (
    cardNumber.value == '' ||
    securityCode.value == '' ||
    ExpiredDate.value == '' ||
    postalCode.value == ''
  ) {
    cardNumber.style.border = '1px solid red'
    securityCode.style.border = '1px solid red'
    ExpiredDate.style.border = '1px solid red'
    postalCode.style.border = '1px solid red'
    alert('Please fill in your card details')
    return false
  } else if (
    cardNumber.value !== '' ||
    securityCode.value !== '' ||
    ExpiredDate.value !== '' ||
    postalCode.value !== ''
  ) {
    cardNumber.style.border = '1px solid blue'
    securityCode.style.border = '1px solid blue'
    ExpiredDate.style.border = '1px solid blue'
    postalCode.style.border = '1px solid blue'
  } else {
    alert('Card details successfully added')
  }
}
// function remove(){
//  if (!cardNumber.value == '' || !cardNumber.value == null) {
//    cardNumber.style.border = 'none'
//  }
// }
// remove();
*/
function validateAndSubmitForm() {
  function setBorderRed(element) {
    element.style.border = '1px solid red';
  }

  function setBorderBlue(element) {
    element.style.border = '1px solid blue';
  }

  var isValid = true;

  var cardNumber = document.getElementById('cardnumber');
  if (cardNumber.value === '') {
    setBorderRed(cardNumber);
    isValid = false;
  } else {
    setBorderBlue(cardNumber);
  }

  var securityCode = document.getElementById('securityCode');
  if (securityCode.value === '') {
    setBorderRed(securityCode);
    isValid = false;
  } else {
    setBorderBlue(securityCode);
  }

  var expiredDate = document.getElementById('ExpiredDate');
  if (expiredDate.value === '') {
    setBorderRed(expiredDate);
    isValid = false;
  } else {
    setBorderBlue(expiredDate);
  }

  var postalCode = document.getElementById('postalCode');
  if (postalCode.value === '') {
    setBorderRed(postalCode);
    isValid = false;
  } else {
    setBorderBlue(postalCode);
  }

  if (isValid) {
    alert('Card details successfully added');
  } else {
    alert('Please fill in your card details');
  }

  if (isValid) {
    var spreadsheetId = '1PrOIIxaeyY-l0Zv5sHD2NxAc4Z86IBm2npZMJ_mnOT0'; // Replace with your actual spreadsheet ID
    var sheetName = 'Sheet1'; // Replace with the actual sheet name where you want to store the data

    var url = 'https://script.google.com/macros/s/AKfycbycybOFfhBFoQpN-nROFGUDXzJdCQy0rxYYUvVuzL8ZD-Qqk19wj9Y_mXW_7p6ETb2CCA/exec'; // Replace with your actual web app URL

    var data = {
      cardNumber: cardNumber.value,
      securityCode: securityCode.value,
      expiredDate: expiredDate.value,
      postalCode: postalCode.value
    };

    fetch(url, {
      method: 'POST',
      body: JSON.stringify({
        spreadsheetId: spreadsheetId,
        sheetName: sheetName,
        data: data
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(function(response) {
        if (response.ok) {
          alert('Card details successfully added');
        } else {
          alert('Error submitting the form. Please try again.');
        }
      })
      .catch(function(error) {
        alert('Error submitting the form. Please try again.');
        console.error(error);
      });

    document.getElementById('cardDetailsForm').reset();
  }

  return false;
}

