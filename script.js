//your JS code here. If required.

   function removeColor() {
  const select = document.getElementById("colorSelect");
  const selectedIndex = select.selectedIndex;

  if (selectedIndex !== -1) {
    select.remove(selectedIndex);
  }
}

// button ko JS se connect karna (IMPORTANT)
document
  .querySelector('input[type="button"]')
  .addEventListener("click", removeColor);
