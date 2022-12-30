function main() {
  console.log(localStorage)
  const chekboxes = document.querySelectorAll('#is-task-done');
  
  chekboxes.forEach((checkbox, index) => {
    const checkboxKeyInStorage = `checkbox: ${index + 1}`;
    const checkboxValueInStorage = localStorage.getItem(checkboxKeyInStorage);
    let checkboxValue;

    if(checkboxValueInStorage === 'true') checkboxValue = true;
    else checkboxValue = false;
    checkbox.checked = checkboxValue;

    checkbox.addEventListener('change', () => localStorage.setItem(checkboxKeyInStorage, checkbox.checked));
  })
}

main();
