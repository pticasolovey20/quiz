import React from 'react';

const Game = ({ step, onClickVariant, question, questions }) => {
    const percentage = ((step / questions.length) * 100).toFixed(0);

    return (
        <>
            <div className="progress">
                <div style={{ width: `${percentage}%` }} className="progress__inner"></div>
            </div>
            <h1>{question.title}</h1>
            <ul>
                {question.variants.map((text, index) => (
                    <li key={text} onClick={() => onClickVariant(index)}>
                        {text}
                    </li>
                ))}
            </ul>
        </>
    );
};

export default Game;
