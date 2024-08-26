import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import GuessInput from '../GuessInput';
import GuessResults from '../GuessResults/GuessResults';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
	const [guesses, setGuesses] = React.useState([]);
	const [gameStatus, setGameStatus] = React.useState('running');

	function handleAddGuess(newGuess) {
		const nextGuesses = [...guesses, newGuess];
		setGuesses(nextGuesses);
		console.log('guess: ', newGuess);

		// note: guesses array at this point is stale.
		if (newGuess === answer) {
			setGameStatus('won');
		} else if (nextGuesses.length >= NUM_OF_GUESSES_ALLOWED) {
			setGameStatus('lost');
		}
	}

	return (
		<>
			<GuessResults
				guesses={guesses}
				answer={answer}
				setGameStatus={setGameStatus}
			/>
			<GuessInput
				handleAddGuess={handleAddGuess}
				gameStatus={gameStatus}
			/>
			{gameStatus === 'won' && (
				<div className='happy banner'>
					<p>
						<strong>Congratulations!</strong> Got it in
						<strong> {guesses.length} guesses</strong>.
					</p>
				</div>
			)}
			{gameStatus === 'lost' && (
				<div className='sad banner'>
					<p>
						Sorry, the correct answer is <strong>{answer}</strong>.
					</p>
				</div>
			)}
		</>
	);
}

export default Game;
