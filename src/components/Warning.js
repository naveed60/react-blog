import React, { useState } from 'react';

export default function Warning() {
  // State to track whether the alert should be displayed
  const [showAlert, setShowAlert] = useState(false);

  // Function to handle the delete button click and show the alert
  const handleDeleteClick = () => {
    setShowAlert(true);
  };

  return (
    <div>
      {/* Display the alert if showAlert state is true */}
      {showAlert && (
        <div data-testid="alert" id="alert">
          <h2>Are you sure?</h2>
          <p>These changes can't be reverted!</p>
          <button>Proceed</button>
        </div>
      )}

      {/* Delete button with onClick handler */}
      <button onClick={handleDeleteClick}>Delete</button>
    </div>
  );
}
