import React, { useState } from 'react';

/**
 * When setValue is called, it doesn't IMMIDETELY rerender things with the new
 * state value. It waits a bit of time to prevent close to together rerenders.
 * This means that if setValue is called twice before a rerender we could be
 * potentially using stale date. Because of this what we ACTUALLY want to do here
 * is not use `value` but pass a function into setValue.
 * @see https://reactjs.org/docs/hooks-reference.html#usestate
 */
// i have seen this thanks
export default function Stepper() {
	const [value, setValue] = useState(0);

	return (
		<div>
			<button
				type="button"
				onClick={() => setValue(prev => prev - 1)}
			>
				-
			</button>

			<input value={value} />

			<button
				type="button"
				onClick={() => setValue(prev => prev + 1)}
			>
				+
			</button>
		</div>
	);
}
