import React, { useState, useEffect } from 'react';
import './Addition.css'; // Import the CSS file
import NavigationBar from './NavigationBar';
import Timer from './Timer';
import ReloadQuizButton from './ReloadQuizButton'; // Import the new component
import QuizResultPage from './QuizResultPage';

function Complex() {

  // State to track random numbers, user input, and feedback for all questions
  const [questions, setQuestions] = useState([]);
  const [userAnswers, setUserAnswers] = useState(Array(30).fill(''));
  const [correctAnswers, setCorrectAnswers] = useState([]);
  const [incorrect, setIncorrect] = useState([]);
  const [showResultPopup, setShowResultPopup] = useState(false);
  const [correctAnswersCount, setCorrectAnswersCount] = useState(0);

  // Generate random numbers for the quiz
  const generateRandomNumbers = () => {
    const newQuestions = [];

    while (newQuestions.length < 30) {
      const num1 = Math.floor(Math.random() * 101)+1;
      const num2 = Math.floor(Math.random() * 101)+1;
      const operation = Math.random() < 0.5 ? 'addition' : 'subtraction';
      const correctAnswer =
        operation === 'addition' ? num1 + num2 : num1 - num2;

      if (correctAnswer >= 0 && correctAnswer <= 100) {
        newQuestions.push({
          num1,
          num2,
          correctAnswer,
          operation,
        });
      }
    }

    // Add question numbers
    newQuestions.forEach((question, index) => {
      question.questionNumber = index + 1;
    });

    setQuestions(newQuestions);
  };

  // Function to handle user input change for a specific question
  const handleUserAnswerChange = (e, questionIndex) => {
    const newUserAnswers = [...userAnswers];
    newUserAnswers[questionIndex] = e.target.value;
    setUserAnswers(newUserAnswers);
  };

  // Function to check user's answer for all questions
  const checkAllAnswers = () => {
    const correct = [];
    const incorrect = [];
    for (let i = 0; i < questions.length; i++) {
      const currentQuestion = questions[i];
      const userAnswer = parseInt(userAnswers[i]);

      if (!isNaN(userAnswer) && userAnswer === currentQuestion.correctAnswer) {
        correct.push(currentQuestion.questionNumber);
      }else {
        incorrect.push(currentQuestion.questionNumber);
      }
    }

    // Update correct answers and count
    setCorrectAnswers(correct);
    setCorrectAnswersCount(correct.length);
    setIncorrect(incorrect);
    if (incorrect.length > 0) {
      setShowResultPopup(true);
  }
  };
  const reloadQuiz = () => {
    generateRandomNumbers(); // Regenerate questions
    setUserAnswers(Array(30).fill('')); // Clear user answers
    setCorrectAnswers([]); // Clear correct answers
    setShowResultPopup(false); // Hide result popup
    setCorrectAnswersCount(0); // Reset correct answers count
  };
  
  // Initialize random numbers when the component first loads
  useEffect(() => {
    generateRandomNumbers();
  }, []);
  
  
  return (
    <div className="addition-page">
      <NavigationBar />
      <h1>Quiz</h1>
      <ReloadQuizButton onClick={reloadQuiz} /> {/* Use the new component */}
      <Timer />
      {questions.map((question, index) => (
        <div key={index} className="question-container">
          <div className="question">
          <p className="question-text">
        <span className="question-number">{question.questionNumber}.</span>
        {question.operation === 'addition'
          ? `${question.num1} + ${question.num2} =`
          : `${question.num1} - ${question.num2} =`}
      </p>
            <input
              type="number"
              className="user-answer-input"
              value={userAnswers[index]}
              onChange={(e) => handleUserAnswerChange(e, index)}
            />
          </div>
        </div>
      ))}
      <button className="check-button" onClick={checkAllAnswers}>
        Check Answers
      </button>

{showResultPopup && (
  <QuizResultPage
    correctAnswersCount={correctAnswersCount}
    correctAnswers={correctAnswers}
    incorrect={incorrect}
  />
)}


    </div>
  );
}

export default Complex;

