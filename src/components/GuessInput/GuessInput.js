import React, { useState } from 'react';

function GuessInput({ handleAddGuess, gameStatus }) {
	const [value, setValue] = useState('');

	function handleChange(event) {
		setValue(event.target.value.toUpperCase());
	}

	function handleSubmit(event) {
		event.preventDefault();
		handleAddGuess(value);
		setValue('');
	}

	return (
		<form className='guess-input-wrapper' onSubmit={handleSubmit}>
			<label htmlFor='guess-input'>Enter guess:</label>
			<input
				required
				disabled={gameStatus !== 'running'}
				id='guess-input'
				type='text'
				value={value}
				onChange={handleChange}
				minLength={5}
				maxLength={5}
				pattern='[A-Za-z]{5}'
				title='5-letter words only.'
			/>
		</form>
	);
}

export default GuessInput;
