import React from 'react';

const QuizResultPage = ({ correctAnswersCount, correctAnswers, incorrect }) => {
  return (
    <div>
      <h1>Quiz Result</h1>
      <p>{`Total Correct Answers: ${correctAnswersCount}`}</p>
      <p>Correct Questions: {correctAnswers.join(', ')}</p>
      {incorrect.length > 0 && (
        <>
          <p>{`Total Incorrect Answers: ${incorrect.length}`}</p>
          <p>Incorrect Questions: {incorrect.join(', ')}</p>
        </>
      )}
      <div className='mark'>{correctAnswersCount === 30 ? 'Mark: A+' : 'Mark: A'}</div>
    </div>
  );
};

export default QuizResultPage;
