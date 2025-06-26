function searchProducts() {
  const searchValue = document.getElementById('searchBar').value.trim().toLowerCase();
  const productCards = document.querySelectorAll('.product-card');
  const headings = document.querySelectorAll('.section-title');

  if (!searchValue) {
    // Show all cards and headings if search is empty
    productCards.forEach(card => card.style.display = '');
    headings.forEach(h => h.style.display = '');
    return;
  }

  let anyMatch = false;
  productCards.forEach(card => {
    const title = card.querySelector('.product-title')?.textContent.toLowerCase() || '';
    const author = card.querySelector('.product-desc')?.textContent.toLowerCase() || '';
    if (title.includes(searchValue) || author.includes(searchValue)) {
      card.style.display = '';
      anyMatch = true;
    } else {
      card.style.display = 'none';
    }
  });

  // Hide headings if searching
  headings.forEach(h => h.style.display = 'none');
}

<script>
function logout() {
  localStorage.removeItem('imart_logged_in');
  localStorage.removeItem('imart_current_user');
  window.location.href = "auth.html";
}
</script>