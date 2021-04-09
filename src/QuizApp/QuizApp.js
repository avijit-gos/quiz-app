import React, { useState } from 'react';
import Questions from './Questions.json';

function QuizApp() {
    const [showResult, setShowResult] = useState(false);
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [result, setResult] = useState(0);

    const answerEvent = (isCorrect) => {

        if(isCorrect === true) {
            setResult(result+1)
        }

        let nextQuestion = currentQuestion + 1;

        if(nextQuestion < Questions.length ) {
            setCurrentQuestion(nextQuestion);
        } else {
            setShowResult(true);
        }

    };

    return(
        <div>
          {
              showResult ? (<p className="result">You got {result} out of {Questions.length}</p>) : 
              (<div>
                 <p className="question-header">{currentQuestion+1} out of {Questions.length} :</p>
                 <p className="question"> {Questions[currentQuestion].question}</p>
                 <div className="answer">
                     {
                         Questions[currentQuestion].answers.map( item=> <button className="answer-key" key={item.id} onClick={()=>answerEvent(item.isCorrect)}>{item.answer}</button> )
                     }
                 </div>
              </div>)
          }
        </div>
    )
}

export default QuizApp;