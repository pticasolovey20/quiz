import React from 'react';
import styles from './Game.module.scss';

const Game = ({ step, onClickVariant, question, questions }) => {
	const percentage = ((step / questions.length) * 100).toFixed(0);

	return (
		<div className={styles.gameWrapper}>
			<div className={styles.progress}>
				<div style={{ width: `${percentage}%` }} className={styles.progressInner}></div>
			</div>
			<h1>{question.title}</h1>
			<ul>
				{question.variants.map((text, index) => (
					<li key={text} onClick={() => onClickVariant(index)}>
						{text}
					</li>
				))}
			</ul>
		</div>
	);
};

export { Game };
