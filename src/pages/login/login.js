let button = document.getElementById('send');

button.addEventListener('click', function () {
  toastr.error('Erro');
  // window.location.replace('../dashboard/dashboard.html');
  window.location.assign('../dashboard/dashboard.html');

  // button.classList.add('text-red-500', 'font-bold');
});

// document.querySelectorAll('.drop-zone__input').forEach((inputElement) => {
//   const dropZoneElement = inputElement.closest('.drop-zone');

//   dropZoneElement.addEventListener('click', (e) => {
//     inputElement.click();
//   });

//   inputElement.addEventListener('change', (e) => {
//     if (inputElement.files.length) {
//       updateThumbnail(dropZoneElement, inputElement.files[0]);
//     }
//   });

//   dropZoneElement.addEventListener('dragover', (e) => {
//     e.preventDefault();
//     dropZoneElement.classList.add('drop-zone--over');
//   });

//   ['dragleave', 'dragend'].forEach((type) => {
//     dropZoneElement.addEventListener(type, (e) => {
//       dropZoneElement.classList.remove('drop-zone--over');
//     });
//   });

//   dropZoneElement.addEventListener('drop', (e) => {
//     e.preventDefault();

//     if (e.dataTransfer.files.length) {
//       inputElement.files = e.dataTransfer.files;
//       updateThumbnail(dropZoneElement, e.dataTransfer.files[0]);
//     }

//     dropZoneElement.classList.remove('drop-zone--over');
//   });
// });
