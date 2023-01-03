function main() {
  const chekboxes = document.querySelectorAll('#is-task-done');
  
  chekboxes.forEach((checkbox, index) => {
    const checkboxKeyInStorage = `checkbox: ${index + 1}`;
    const checkboxValueInStorage = localStorage.getItem(checkboxKeyInStorage);

    checkbox.checked = checkboxValueInStorage === 'true' ? true : false;

    checkbox.addEventListener('change', () => localStorage.setItem(checkboxKeyInStorage, checkbox.checked));
  })
}

main();
