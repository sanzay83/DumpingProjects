function LoadingSpinner() {
  return (
    <div>
      <div className="text-center spinner">
        <div
          className="spinner-border defined-spinner"
          style={{ width: "3rem", height: "3rem" }}
          role="status"
        >
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    </div>
  );
}

export default LoadingSpinner;
