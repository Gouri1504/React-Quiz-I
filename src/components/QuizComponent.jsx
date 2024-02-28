import React, { Component } from 'react'

export default class QuizComponent extends Component {
    render() {
        return (
            <div className="quiz-comp">
                <div className='Question-Box'>
                    <h1 className="text-center status">Question</h1>
                    <h5 className="status">1 of 15</h5>
                    <h3 className="text-center status">Where is Taj Mahal located?</h3>

                    <div className="options-grid">
                        <div className="option text-center">Delhi</div>
                        <div className="option text-center">Agra</div>
                        <div className="option text-center">Amritsar</div>
                        <div className="option text-center">Jaipur</div>
                    </div>
                    <div className="btns">
                        <button id='prev-btn'>Previous</button>
                        <button id='next-btn'>Next</button>
                        <button id='quit-btn'>Quit</button>
                    </div>

                </div>

            </div>
        )
    }
}