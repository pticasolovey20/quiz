import React from 'react';

import styles from './Result.module.scss';

const Result = ({ correct, questions }) => {
	return (
		<div className={styles.resultWrapper}>
			<img src="https://cdn-icons-png.flaticon.com/512/2278/2278992.png" alt="result" />
			<h2>
				{correct === 1
					? `You guessed ${correct} out of ${questions.length}`
					: `You guessed ${correct} out of ${questions.length}`}
			</h2>
			<a href="/">
				<button>TRY AGAIN</button>
			</a>
		</div>
	);
};

export { Result };
