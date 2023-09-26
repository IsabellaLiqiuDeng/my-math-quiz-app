import React, { useState, useEffect } from 'react';
import './Addition.css'; // Import the CSS file
import NavigationBar from './NavigationBar';

function Addition() {
  // State to track random numbers, user input, and feedback for all questions
  const [questions, setQuestions] = useState([]);
  const [userAnswers, setUserAnswers] = useState(Array(30).fill(''));
  const [feedback, setFeedback] = useState(Array(30).fill(''));

  // Generate random numbers for the quiz
  const generateRandomNumbers = () => {
    const newQuestions = [];
    while(newQuestions.length <30) {
      const num1 = Math.floor(Math.random() * 100);
      const num2 = Math.floor(Math.random() * 100);
      const correctAnswer = num1 + num2;
      if (correctAnswer <=100){
        newQuestions.push({
        num1,
        num2,
        correctAnswer,
      });
  }
}

    setQuestions(newQuestions);
  };

  // Function to handle user input change for a specific question
  const handleUserAnswerChange = (e, questionIndex) => {
    const newUserAnswers = [...userAnswers];
    newUserAnswers[questionIndex] = e.target.value;
    setUserAnswers(newUserAnswers);
  };

  // Function to check user's answer for a specific question
  const checkAnswer = (questionIndex) => {
    const currentQuestion = questions[questionIndex];
    const userAnswer = parseInt(userAnswers[questionIndex]);

    if (!isNaN(userAnswer) && userAnswer === currentQuestion.correctAnswer) {
      const newFeedback = [...feedback];
      newFeedback[questionIndex] = 'Correct!';
      setFeedback(newFeedback);
    } else {
      const newFeedback = [...feedback];
      newFeedback[questionIndex] = 'Incorrect. Try again.';
      setFeedback(newFeedback);
    }
  };

  // Initialize random numbers when the component first loads
  useEffect(() => {
    generateRandomNumbers();
  }, []);

  return (
    <div className="addition-page">
      <NavigationBar />
      <h1>Addition Quiz</h1>
      {questions.map((question, index) => (
        <div key={index} className="question-container">
          <div className="question">
            <p className="question-text">{question.num1} + {question.num2}?</p>
            <input
              type="number"
              className="user-answer-input"
              value={userAnswers[index]}
              onChange={(e) => handleUserAnswerChange(e, index)}
            />
            <button className="check-button" onClick={() => checkAnswer(index)}>Check Answer</button>
          </div>
          <p className={`feedback ${feedback[index] === 'Correct!' ? 'feedback-incorrect' : ''}`}>
            {feedback[index]}
          </p>
        </div>
      ))}
    </div>
  );
}

export default Addition;
