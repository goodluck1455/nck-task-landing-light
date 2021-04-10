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
  navbar.style.transform = 'scaleY(1)'
})

faTimes.addEventListener('click', () => {
  faBars.style.display = 'block'
  faTimes.style.display = 'none'
  navbar.style.transform = 'scaleY(0)'
})

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
