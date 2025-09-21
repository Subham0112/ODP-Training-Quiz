import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getQuizData } from '../data/quizData';
import "../App.css"
// import '../styles/QuizPage.css';

function Quiz() {
  const { option } = useParams();
  const navigate = useNavigate();
  const [currentQuestion, setCurrentQuestion] = useState(1);
  const [selectedAnswer, setSelectedAnswer] = useState('');
  const [answers, setAnswers] = useState({});
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [score, setScore] = useState(0);
  
  const quizData = getQuizData(option);

  useEffect(() => {
    // Load saved answer for current question
    if (answers[currentQuestion]) {
      setSelectedAnswer(answers[currentQuestion]);
    } else {
      setSelectedAnswer('');
    }
  }, [currentQuestion, answers]);

  const handleBackToOptions = () => {
    navigate('/odp');
  };

  const handleAnswerSelect = (answer) => {
    setSelectedAnswer(answer);
    setAnswers(prev => ({
      ...prev,
      [currentQuestion]: answer
    }));
  };

  const handleNext = () => {
    if (currentQuestion < quizData.questions.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      handleSubmitQuiz();
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 1) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const handleSubmitQuiz = () => {
    let correctAnswers = 0;
    quizData.questions.forEach((question, index) => {
      if (answers[index + 1] === question.correct) {
        correctAnswers++;
      }
    });
    
    const finalScore = Math.round((correctAnswers / quizData.questions.length) * 100);
    setScore(finalScore);
    setQuizCompleted(true);
  };

  const handleRetakeQuiz = () => {
    setCurrentQuestion(1);
    setSelectedAnswer('');
    setAnswers({});
    setQuizCompleted(false);
    setScore(0);
  };

  if (quizCompleted) {
    return (
      <div className="quiz-page mx-4">
        <div className="container-fluid py-4">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="card shadow-lg border-0 text-center">
                <div className="card-header text-white quiz-header">
                  <h4 className="mb-0">🎉 Quiz Completed!</h4>
                </div>
                <div className="card-body p-5">
                  <div className="score-display mb-4">
                    <h2 className="display-4 text-primary">{score}%</h2>
                    <p className="lead">Your Final Score</p>
                  </div>
                  <div className="result-message mb-4">
                    {score >= 80 ? (
                      <div className="alert alert-success">
                        <strong>Excellent!</strong> You've mastered Option {option}.
                      </div>
                    ) : score >= 60 ? (
                      <div className="alert alert-warning">
                        <strong>Good job!</strong> Consider reviewing the material for Option {option}.
                      </div>
                    ) : (
                      <div className="alert alert-danger">
                        <strong>Keep learning!</strong> Review the training material for Option {option}.
                      </div>
                    )}
                  </div>
                  <div className="d-flex justify-content-center gap-3">
                    <button className="btn btn-custom" onClick={handleRetakeQuiz}>
                      Retake Quiz
                    </button>
                    <button className="btn btn-outline-secondary" onClick={handleBackToOptions}>
                      Back to Options
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  const currentQuestionData = quizData.questions[currentQuestion - 1];

  return (
    <div className="quiz-page">
      <div className="container-fluid py-4">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="d-flex justify-content-between align-items-center mb-4">
              <h3 className="page-title">Quiz - {option}</h3>
              <button 
                className="btn  mx-3 btn-outline-secondary back-btn"
                onClick={handleBackToOptions}
              >
                ← Back 
              </button>
            </div>
            
            <div className="card shadow-lg border-0">
              <div className="card-header text-white quiz-header">
                <div className="d-flex justify-content-between align-items-center">
                  <h4 style={{color:'#87CEEB'}} className="mb-0">🧠 Assessment Quiz</h4>
                  <span className="badge bg-light text-dark">
                    Question {currentQuestion} of {quizData.questions.length}
                  </span>
                </div>
              </div>
              
              <div className="card-body p-4">
                <div className="progress mb-4">
                  <div 
                    className="progress-bar bg-success" 
                    role="progressbar" 
                    style={{ width: `${(currentQuestion / quizData.questions.length) * 100}%` }}
                  ></div>
                </div>

                <h5 className="mb-4 question-text">{currentQuestionData?.question}</h5>
                
                <div className="row g-3 ">
                  {currentQuestionData?.options.map((option, index) => (
                    <div key={index} className="col-12">
                      <div 
                      style={{borderRadius:'10px'}}
                        className={`card answer-option p-3 border-2 ${selectedAnswer === option ? 'selected' : ''}`}
                        onClick={() => handleAnswerSelect(option)}
                      >
                        <div  className="d-flex align-items-center">
                        
                          <span className="answer-text"> {option}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="d-flex justify-content-between mt-4">
                  <button 
                    className="btn btn-outline-secondary"
                    disabled={currentQuestion === 1}
                    onClick={handlePrevious}
                  >
                    Previous
                  </button>
                  
                  <button 
                    className="btn btn-outline-secondary btn-sm"
                    onClick={handleNext}
                    disabled={!selectedAnswer}
                  >
                    {currentQuestion === quizData.questions.length ? 'Submit Quiz' : 'Next Question'}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Quiz;
