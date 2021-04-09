import React from 'react'
import QuizApp from './QuizApp'

function Parent() {
    return (
        <div className="container">
               <p className="header">Quiz App in React</p>
               
            <div className="box2">
               <QuizApp />
            </div>
        </div>
    )
}

export default Parent
