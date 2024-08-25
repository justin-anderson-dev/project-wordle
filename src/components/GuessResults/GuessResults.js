import React from 'react';

function GuessResults({ guesses }) {
	console.log('guesses: ', guesses);

	return (
		<div className='guess-results'>
			{guesses.map((guess, index) => (
				<p key={guess + index} className='guess'>
					{guess}
				</p>
			))}
		</div>
	);
}

export default GuessResults;
