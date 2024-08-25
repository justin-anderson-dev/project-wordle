import React, { useState } from 'react';

function GuessInput({ guesses, setGuesses }) {
	const [value, setValue] = useState('');
	function handleChange(event) {
		setValue(event.target.value.toUpperCase());
	}
	function handleSubmit(event) {
		if (value.length < 5) {
			alert('Please enter a 5-letter word.');
			return;
		}
		event.preventDefault();
		setGuesses([...guesses, value]);
		setValue('');
		console.log('guess: ', value);
	}

	return (
		<form className='guess-input-wrapper' onSubmit={handleSubmit}>
			<label htmlFor='guess-input'>Enter guess:</label>
			<input
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
