document.addEventListener('DOMContentLoaded', () => {
   var y = document.getElementById("paypal");
   y.addEventListener("click", openPaypal);
});

const openPaypal = () => chrome.tabs.create({active: true, url: "https://www.paypal.me/csuar3z/3"});