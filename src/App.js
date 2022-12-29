import React, { useState } from 'react';
import { questions } from 'components/Data/questions';
import { Game } from './components/Game';
import { Result } from './components/Result';

import styles from './App.module.scss';

function App() {
	const [step, setStep] = useState(0);
	const [correct, setCorrect] = useState(0);
	const question = questions[step];

	const onClickVariant = index => {
		setStep(step + 1);

		if (index === question.correct) {
			setCorrect(correct + 1);
		}
	};

	return (
		<div className={styles.wrapper}>
			{step !== questions.length ? (
				<Game
					question={question}
					questions={questions}
					step={step}
					onClickVariant={onClickVariant}
				/>
			) : (
				<Result correct={correct} questions={questions} />
			)}
		</div>
	);
}

export default App;
