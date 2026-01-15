
const allPages = document.getElementById('allPages');
const pageItems = document.querySelectorAll('.page-item');
const pageRows = document.querySelectorAll('.page-row');
const rowAll = document.getElementById('rowAll');

// Fungsi untuk memperbarui status checkbox All Pages
function updateAllPagesStatus() {
  const checkedCount = document.querySelectorAll('.page-item.checked').length;
  
  allPages.classList.remove('checked', 'indeterminate');
  
  if (checkedCount === pageItems.length) {
    allPages.classList.add('checked');

  } else if (checkedCount > 0) {
    allPages.classList.add('indeterminate');
  }
}

// Logika klik pada baris "All Pages"
rowAll.addEventListener('click', () => {
  const isCurrentlyChecked = allPages.classList.contains('checked');
  pageItems.forEach(item => {
    if (isCurrentlyChecked) {
      item.classList.remove('checked');
    } else {
      item.classList.add('checked');
    }
  });
  updateAllPagesStatus();
});

// Logika klik pada baris halaman individual
pageRows.forEach((row, index) => {

  row.addEventListener('click', () => {
    pageItems[index].classList.toggle('checked');
    updateAllPagesStatus();
  });
});
