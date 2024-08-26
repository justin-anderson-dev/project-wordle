import React from 'react';
import Guess from '../Guess/Guess';
import { range } from '../../utils';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';

function GuessResults({ guesses, answer, setGameStatus }) {
	console.log('guesses: ', guesses);
	const indexes = range(0, NUM_OF_GUESSES_ALLOWED);
	console.log('indexes: ', indexes);

	return (
		<div className='guess-results'>
			{indexes.map((num) => (
				<Guess
					key={guesses[num] + '-' + num.toString()}
					guess={guesses[num]}
					answer={answer}
				/>
			))}
		</div>
	);
}

export default GuessResults;
