import React from 'react';
import './ScoreCard.css';
import sad from './images/sad1.png';
import smart from './images/glasses.png';
import happy from './images/thumbup.png';
import crown from './images/crown.png';

const ScoreCard = ({ score, totalScore }) => {
  let emoji, color;

  if (score <= 4) {
    emoji = sad;
    color = 'red';
  } else if (score > 4 && score <= 6) {
    emoji = smart;
    color = 'orange';
  } else if (score > 6 && score <= 8) {
    emoji = happy;
    color = 'yellow';
  } else if (score > 8) {
    emoji = crown;
    color = 'green';
  }

  return (
    <div className='quiz-container'>
      <div className='emoji'>
        <img src={emoji} alt='Emoji' />
        <span className='score' style={{ color: color }}>{score * 10}%</span>
      </div>
      <span className='message'>Quiz is completed</span>
      <span style={{marginBottom: '2rem'}}>Marks Secured : {score}</span>
      <span className='totalScore'>Total Scored : {totalScore}</span>
    </div>
  );
};

export default ScoreCard;
