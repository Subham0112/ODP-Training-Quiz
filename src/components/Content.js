import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { OdpoptionsData } from '../data/optionData';

function Content() {
  const navigate = useNavigate();
  const location = useLocation();
  
  // Determine type from current path
  const type = location.pathname.includes('/odp') ? 'odp' : 'hod';

  return (
    <div className="content-page mx-4">
      <div className="container-fluid d-flex flex-column justify-content-center align-items-center py-4">
        <div className="row justify-content-center">
          <div className="col-12">
            <p className="text-center text-muted mb-5">
              Select an option below to start your training or take a quiz
            </p>
          </div>
        </div>

        <div className="row g-4">
          {OdpoptionsData.map((option) => (
            <div key={option.title} className="col col-md-6">
              <div className="content-card p-4 h-100 text-center">
                <h5 className="card-title card-text mb-3">{option.title}</h5>
                <p className="card-text text-muted">{option.description}</p>
                <div className="mt-3 d-flex justify-content-center gap-3">
                  <button
                    className="btn btn-custom"
                    onClick={() => navigate(`/training/${type}/${option.title}`)}
                  >
                    Training
                  </button>
                  <button
                    className="btn btn-custom"
                    onClick={() => navigate(`/quiz/${type}/${option.title}`)}
                  >
                    Quiz
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Content;