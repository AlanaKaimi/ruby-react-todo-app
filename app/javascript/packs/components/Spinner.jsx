import React from "react";

const Spinner = () => {
  return (
    <div>
      <div className="d-flex align-items-center justify-content-center py-5">
        <div className="spinner-border" role="status"> 
        </div>   
      </div>
      <div className="d-flex align-items-center justify-content-center">
        <span>Loading...</span>
      </div>
    </div>
  );
};

export default Spinner;