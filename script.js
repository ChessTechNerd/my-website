document.addEventListener('DOMContentLoaded', function() {
  const form = document.querySelector('form');
  if (form) {
    form.addEventListener('submit', function(e) {
      e.preventDefault();
      // ...send your form data here if needed...
      window.location.href = "thankyou.html";
    });
  }
});


window.addEventListener('DOMContentLoaded', function() {
  const params = new URLSearchParams(window.location.search);
  const title = params.get('title');
  if (title) {
    const bookTitleInput = document.getElementById('bookTitle');
    if (bookTitleInput) {
      bookTitleInput.value = title;
    }
  }
});
