import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { OdpgetTrainingData} from '../data/odptrainingData';
import { HabgetTrainingData} from '../data/habtrainingData';

function Training() {
  const { option, type } = useParams();
  const navigate = useNavigate();
  const [currentTopicIndex, setCurrentTopicIndex] = useState(0);
  
  const trainingData = type === 'odp' ? OdpgetTrainingData(option) : HabgetTrainingData(option);

  if (!trainingData) {
    return (
      <div className="training-page mx-2">
        <div className="container-fluid py-4">
          <div className="alert alert-danger">
            <h4>Training data not found</h4>
            <p>No training data available for "{option}" in {type.toUpperCase()} section.</p>
            <button className="btn btn-secondary" onClick={() => navigate(`/${type}`)}>
              ← Back to {type.toUpperCase()}
            </button>
          </div>
        </div>
      </div>
    );
  }

  const handleBackToOptions = () => {
    navigate(`/${type}`);
  };

  const handleNext = () => {
    if (currentTopicIndex < trainingData.topics.length - 1) {
      setCurrentTopicIndex(currentTopicIndex + 1);
    }
  };

  const handlePrevious = () => {
    if (currentTopicIndex > 0) {
      setCurrentTopicIndex(currentTopicIndex - 1);
    }
  };

  const handleTopicSelect = (index) => {
    setCurrentTopicIndex(index);
  };

  const currentTopic = trainingData.topics && trainingData.topics[currentTopicIndex];
  const totalTopics = trainingData.topics ? trainingData.topics.length : 0;

  return (
    <div className="training-page mx-2">
      <div className="container-fluid py-4">
        <div className="row">
          <div className="col-12">
            {/* Header Section */}
            <div className="training-header-section mb-4">
              <div className="d-flex justify-content-end mb-2">
                <button 
                  className="btn btn-secondary back-btn-top" 
                  onClick={handleBackToOptions}
                >
                  <i className="fa-solid fa-arrow-left me-2"></i>Back 
                </button>
              </div>
              <div className="training-title-section">
                <h2 className="training-main-title mb-2">Training - {option}</h2>
                {trainingData.topics && (
                  <div className="topic-counter-badge">
                    <i className="fa-solid fa-book-open me-2"></i>
                    Topic {currentTopicIndex + 1} of {totalTopics}
                  </div>
                )}
              </div>
            </div>

            {/* Course Overview Card */}
            <div className="card shadow-lg border-0 mb-4">
              <div className="card-header text-white training-header">
                <h4 style={{color:'#87CEEB'}} className="mb-0">📚 Course Overview</h4>
              </div>
              <div className="card-body p-4">
                <div className="row">
                  <div className="col-md-8">
                    <h5 className="text-primary mb-3">About This Course</h5>
                    <p className="mb-4">{trainingData.description}</p>
                    
                    <h6 className="text-secondary mb-3">Learning Objectives:</h6>
                    {trainingData.objective && trainingData.objective.map((objective, objIndex) => (
                      <p className="mb-2" key={objIndex}>
                        <i className="fa-regular fa-circle-dot text-primary me-2"></i>
                        {objective}
                      </p>
                    ))}
                  </div>
                  
                  <div className="col-md-4">
                    <div className="course-details bg-light p-3 rounded">
                      <h6 className="text-secondary mb-3">Course Details</h6>
                      <div className="detail-item mb-2">
                        <strong>Duration:</strong> <span className="text-muted">{trainingData.duration}</span>
                      </div>
                      <div className="detail-item mb-2">
                        <strong>Icebreaker:</strong> <span className="text-muted">{trainingData.icebreaker}</span>
                      </div>
                      {totalTopics > 0 && (
                        <div className="detail-item">
                          <strong>Total Topics:</strong> <span className="text-muted">{totalTopics}</span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Progress Bar */}
            {totalTopics > 1 && (
              <div className="card shadow-sm border-0 mb-4">
                <div className="card-body p-3">
                  <div className="d-flex justify-content-between align-items-center mb-2">
                    <small className="text-muted">Progress</small>
                    <small className="text-muted">
                      {Math.round(((currentTopicIndex + 1) / totalTopics) * 100)}%
                    </small>
                  </div>
                  <div className="progress" style={{height: '6px'}}>
                    <div 
                      className="progress-bar bg-info" 
                      role="progressbar" 
                      style={{width: `${((currentTopicIndex + 1) / totalTopics) * 100}%`}}
                      aria-valuenow={currentTopicIndex + 1} 
                      aria-valuemin="0" 
                      aria-valuemax={totalTopics}
                    ></div>
                  </div>
                </div>
              </div>
            )}

            {/* Topic Navigation Pills */}
            {totalTopics > 1 && (
              <div className="card shadow-sm border-0 mb-4">
                <div className="card-body p-3">
                  <div className="d-flex flex-wrap gap-2">
                    {trainingData.topics.map((topic, index) => (
                      <button
                        key={index}
                        className={`btn btn-sm ${index === currentTopicIndex ? 'btn-info' : 'btn-outline-info'}`}
                        onClick={() => handleTopicSelect(index)}
                        style={{minWidth: '40px'}}
                      >
                        {index + 1}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Current Topic Content */}
            {currentTopic && (
              <div className='card shadow-lg border-0'>
                <div className="card-header text-white training-header d-flex justify-content-between align-items-center">
                  <h4 style={{color:'#87CEEB'}} className="mb-0">
                    📝 {currentTopic.title}
                  </h4>
                  <small style={{color:'#87CEEB'}}>
                    Topic {currentTopicIndex + 1}/{totalTopics}
                  </small>
                </div>
                <div className="card-body p-0">
                  <div className="training-card-modern p-4">
                    {/* Topic Content */}
                    <div className="topic-content mb-4">
                      {currentTopic.description && currentTopic.description.map((description, descIndex) => (
                        <div className="content-item p-3 mb-3 bg-light rounded" key={descIndex}>
                          <i className="fa-regular fa-lightbulb text-primary me-3"></i>
                          <span>{description}</span>
                        </div>
                      ))}
                    </div>

                    {/* Activity/Scenario Section */}
                    {(currentTopic.activity || currentTopic.scenario) && (
                      <div className="activity-section mb-4">
                        <div className="activity-modern">
                          <div className="d-flex align-items-center mb-3">
                            <i className="fa-solid fa-clipboard-list text-info me-2"></i>
                            <h6 className="mb-0 text-info fw-bold">Activity/Scenario</h6>
                          </div>
                          <div className="activity-content p-3 bg-white rounded border-start border-info border-3">
                            {currentTopic.activity || currentTopic.scenario || "No Activity"}
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Conclusion */}
                    {currentTopic.conclusion && (
                      <div className="conclusion-section">
                        <div className="alert alert-info bg-light border-info">
                          <div className="d-flex align-items-start">
                            <i className="fa-solid fa-key text-info me-3 mt-1"></i>
                            <div>
                              <h6 className="text-info mb-2">Key Takeaway</h6>
                              <p className="mb-0 text-secondary">{currentTopic.conclusion}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Navigation Buttons */}
                    {totalTopics > 1 && (
                      <div className="d-flex justify-content-between align-items-center mt-4 pt-3 border-top">
                        <button 
                          className="btn btn-outline-secondary"
                          onClick={handlePrevious}
                          disabled={currentTopicIndex === 0}
                        >
                          <i className="fa-solid fa-chevron-left me-2"></i>
                          Previous
                        </button>
                        
                        <span className="text-muted">
                          {currentTopicIndex + 1} / {totalTopics}
                        </span>
                        
                        <button 
                          className="btn btn-primary"
                          onClick={handleNext}
                          disabled={currentTopicIndex === totalTopics - 1}
                        >
                          Next
                          <i className="fa-solid fa-chevron-right ms-2"></i>
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            )}

            {/* No Topics Available */}
            {(!trainingData.topics || trainingData.topics.length === 0) && (
              <div className="card shadow-lg border-0">
                <div className="card-body text-center p-5">
                  <i className="fa-solid fa-book-open text-muted mb-3" style={{fontSize: '3rem'}}></i>
                  <h5 className="text-muted">No detailed topics available</h5>
                  <p className="text-muted">This course overview provides all available information.</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Training;