const forms = document.querySelectorAll('.needs-validation');

// prettier-ignore
Array.prototype.slice.call(forms).forEach(form => {
  form.addEventListener('submit', e => {
      e.preventDefault();
      form.classList.add('was-validated');
    }, false);
});
