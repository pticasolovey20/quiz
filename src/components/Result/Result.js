import React from 'react';

const Result = ({ correct, questions }) => {
    return (
        <div className="result">
            <img src="https://cdn-icons-png.flaticon.com/512/2278/2278992.png" alt="result" />
            <h2>
                {correct === 1
                    ? `Вы отгадали ${correct} ответ из ${questions.length}`
                    : `Вы отгадали ${correct} ответа из ${questions.length}`}
            </h2>
            <a href="/">
                <button>Попробовать снова</button>
            </a>
        </div>
    );
};

export default Result;
