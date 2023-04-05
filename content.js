// CCHA Anilist Tomfoolery


// Checks if the popup is open and clicks the save button if the enter button is pressed.
function checkForPopUpAndSave(event) {
    if (event.key === 'Enter') {
      const popUp = document.querySelector('.el-dialog__wrapper'); 
      if (popUp && popUp.style.display !== 'none') {
        const saveButton = popUp.querySelector('.save-btn'); 
        if (saveButton) {
          saveButton.click();
        }
      }
    }
  }
  
  function init() {
    document.removeEventListener('keydown', checkForPopUpAndSave);
    document.addEventListener('keydown', checkForPopUpAndSave);
  }
  
  // Check for the popup every 1 second and add the event listener
  setInterval(init, 1000);