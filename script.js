const allPagesBox = document.querySelector('.all-pages .checkbox-box');
const pageBoxes = document.querySelectorAll(
  '.checkbox-row:not(.all-pages) .checkbox-box'
);
const doneBtn = document.querySelector('.done-btn');

function updateAllPagesState() {
  const checkedCount = [...pageBoxes].filter(b =>
    b.classList.contains('checked')
  ).length;

  allPagesBox.classList.remove('checked', 'indeterminate');

  if (checkedCount === pageBoxes.length) {
    allPagesBox.classList.add('checked');
  } else if (checkedCount > 0) {
    allPagesBox.classList.add('indeterminate');
  }

  doneBtn.disabled = checkedCount === 0;
}

allPagesBox.addEventListener('click', () => {
  const shouldCheck = !allPagesBox.classList.contains('checked');
  pageBoxes.forEach(b => b.classList.toggle('checked', shouldCheck));
  updateAllPagesState();
});

pageBoxes.forEach(box => {
  box.addEventListener('click', () => {
    box.classList.toggle('checked');
    updateAllPagesState();
  });
});
