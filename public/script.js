 // Function to show the modal when the help message icon is clicked
 function showHelpModal() {
    const helpModal = new bootstrap.Modal(document.getElementById('helpModal'));
    helpModal.show();
  }

  // Add a click event listener to the help message icon
  document.getElementById('helpmsg').addEventListener('click', showHelpModal);