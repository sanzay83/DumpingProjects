import React from "react";

function LoadingSpinner() {
  return (
    <div>
      <div class="text-center">
        <div
          class="spinner-border defined-spinner"
          style={{ width: "3rem", height: "3rem" }}
          role="status"
        >
          <span class="visually-hidden">Loading...</span>
        </div>
      </div>
    </div>
  );
}

export default LoadingSpinner;
