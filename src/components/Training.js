import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { OdpgetTrainingData} from '../data/odptrainingData';
import { HabgetTrainingData} from '../data/habtrainingData';

function Training() {
  const { option, type } = useParams(); // Get both type and option from URL
  const navigate = useNavigate();
  
  // Use the type parameter to determine which data to load
  const trainingData = type === 'odp' ? OdpgetTrainingData(option) : HabgetTrainingData(option);

  // Add error handling for missing data
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
    navigate(`/${type}`); // Navigate back to the correct section
  };

  return (
    <div className="training-page mx-2">
      <div className="container-fluid py-4">
        <div className="row">
          <div className="col-12">
            <div className="d-flex justify-content-between align-items-center mb-4">
              <h3 className="page-title">Training - {option}</h3>
              <button 
                className="btn btn-outline-secondary back-btn" 
                onClick={handleBackToOptions}
              >
                ← Back 
              </button>
            </div>
            
            <div className="card shadow-lg border-0">
              <div className="card-header text-white training-header">
                <h4 style={{color:'#87CEEB'}} className="mb-0">📚 Training Content</h4>
              </div>
              <div className="card-body p-4">
                <div className="row">
                  <div className="col-md-8">
                    <h5 className="text-primary mb-3">Course Overview</h5>
                    <p className="mb-4">
                      {trainingData.description}
                    </p>
                    
                    <h6 className="text-secondary mb-3">Learning Objectives:</h6>
              {trainingData.objective && trainingData.objective.map((objective, objIndex) => (
                        <p className="" key={objIndex}>
                          <i class="fa-regular fa-circle-dot"></i> {objective}
                        </p>
                      ))}
                  </div>
                  
                  <div className="col-md-4">
                    <div className="course-details">
                      <h6 className="text-secondary mb-3">Course Details</h6>
                      <div className="detail-item">
                        <strong>Duration:</strong> {trainingData.duration}
                      </div>
                      <div className="detail-item">
                        <strong>Icebreaker:</strong> {trainingData.icebreaker}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Only render topics section if topics exist */}
            {trainingData.topics && trainingData.topics.length > 0 && (
              <div className='card shadow-lg border-0 mt-3'>
                <div className="card-header text-white training-header">
                  <h4 style={{color:'#87CEEB'}} className="mb-0">Content Details</h4>
                </div>
                <div className="card-body p-4">
                  {trainingData.topics.map((topic, index) => (
                    <div className="training-card p-4 mb-3" key={index}>
                      <h6 className="text-secondary text-center mb-3">{topic.title}</h6>
                      {topic.description && topic.description.map((description, descIndex) => (
                        <p className="" key={descIndex}>
                          <i className="fa-regular fa-hand-point-right"></i> {description}
                        </p>
                      ))}
                      <div className="p-2 activity">
                        Activity/Scenario: {topic.activity || topic.scenario || "No Activity"}
                      </div>
                      <div>
                        {topic.conclusion && (
                          <p className='mt-4 fw-bolder text-secondary text-center'>
                            {topic.conclusion}
                          </p>
                        )}
                      </div>
                    </div> 
                  ))}
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