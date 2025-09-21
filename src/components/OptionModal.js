import React from 'react';
// import '../styles/OptionModal.css';

function OptionModal({ show, onHide, option, onTraining, onQuiz }) {
  if (!show) return null;

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onHide();
    }
  };

  return (
    <div 
      className="modal show d-block" 
      tabIndex="-1" 
      style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}
      onClick={handleBackdropClick}
    >
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">{option}</h5>
            <button 
              type="button" 
              className="btn-close btn-close-white" 
              onClick={onHide}
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body text-center py-4">
           
            <div className="d-flex justify-content-center gap-3">
              <button className="btn btn-custom" onClick={onTraining}>
                📚 Training
              </button>
              <button className="btn btn-custom" onClick={onQuiz}>
                🧠 Quiz
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OptionModal;