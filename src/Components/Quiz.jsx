
import './Quiz.css'
import React, { useState, useEffect } from 'react';
import quizData from './data.json';
import ScoreCard from './ScoreCard';
import timerimg from './images/timer1.png'
const Quiz = () => {
    const [currentQuestion, setCurrentQuestion]=useState(0)
    const [id,setId]=useState(1);
    const [score, setScore]= useState(0);
    const [storeOption, setStoreOption]=useState('')
    const [isShowCard, setShowCard]=useState(false)
    const [showSelectedOption, setshowSelectedOption]=useState(false)
    const [timer, setTimer] = useState(30);

    useEffect(() => {
        if (currentQuestion < quizData.questions.length) {
          setTimer(30); 
        }
      }, [currentQuestion]);

    useEffect(() => {
        if (currentQuestion < quizData.questions.length) {
          const interval = setInterval(() => {
            if (timer > 0) {
              setTimer(timer - 1);
            } else {
              clearInterval(interval); 
              handleQuestion(); 
            }
          }, 1000); 
    
          return () => {
            clearInterval(interval); 
          };
        }
      }, [currentQuestion, timer]);


    function handleQuestion(){
        setshowSelectedOption(false)
        handleOption();
        if(currentQuestion<quizData.questions.length-1){
        setId(id+1)
        setCurrentQuestion(currentQuestion+1)
        console.log(score);
        }
        
        else{
            setShowCard(true);
        }
        
    }
    function handleOption(){
        if(storeOption === quizData.questions[currentQuestion].correctAnswer ){
            setScore(score+1);
            
        }
    }
  return (
    <div>
    {isShowCard===true?<ScoreCard score={score} totalScore={quizData.questions.length} />:
    <div className='quiz-container'>
        <div className='upper-bar'>
            <div className='timer'>
                <img className='timerImg' src={timerimg}/>
                <span>{timer}</span>
                
            </div>
            <div className="bar">
                <div className="ques-completed" style={{width: `${id}rem`}}></div>
                <div className="ques-remaining" style={{width: `${quizData.questions.length-id}rem`}}></div>
            </div>
        </div>
        <div className="ques-container">
            <span className="ques-number">{id}. </span>
            <span className="ques">{quizData.questions[currentQuestion].question}</span>
        </div>
        <div className="ans-container">
            {quizData.questions[currentQuestion].options.map((option)=>{
                
                return (
                    <button  className={`option  ${showSelectedOption && storeOption === option ? 'checked' : ''}` } onClick={()=>{
                        setStoreOption(option);
                        setshowSelectedOption(true);
                    }}>
                      {option}
                    </button>
                  );
            })}
        </div>
        <button id="next" onClick={handleQuestion}>Next</button>
        
    </div>
        }
        </div>
  )
}

export default Quiz
