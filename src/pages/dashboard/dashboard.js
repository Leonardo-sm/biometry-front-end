// const userNameElement = document.getElementById('header-bar');
// const userstore = window.localStorage.getItem('username');

// userNameElement.appendChild(document.createTextNode(userstore));

function handleExit() {
  window.localStorage.clear();
  window.location.assign('../login/login.html');
}
