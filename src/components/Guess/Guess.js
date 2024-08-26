import React from 'react';
import { checkGuess } from '../../game-helpers';
import { range } from '../../utils';

function Guess({ guess, answer }) {
	const guessIndexes = range(0, 5);
	let checkedGuess = [];
	if (guess) {
		checkedGuess = checkGuess(guess, answer);
	}

	return (
		<p className='guess'>
			{guessIndexes.map((num) => (
				<span
					className={`cell ${guess ? checkedGuess[num].status : ''}`}
					key={num}
				>
					{guess ? checkedGuess[num].letter : ''}
				</span>
			))}
		</p>
	);
}

export default Guess;
