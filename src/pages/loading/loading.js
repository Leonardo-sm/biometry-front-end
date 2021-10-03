// Chamada dos dados

window.localStorage.setItem('username', 'Nome do Usuario');

setTimeout(() => {
  window.location.assign('../dashboard/dashboard.html');
}, 3000);
