import React from 'react';

const Spinner = () => {
	return (
		<div
			class='d-flex justify-content-center align-items-center'
			style={{ height: '100%' }}
		>
			<div
				class='spinner-grow text-primary'
				role='status'
				style={{ width: '10rem', height: '10rem' }}
			>
				<span class='sr-only'>Loading...</span>
			</div>
		</div>
	);
};

export default Spinner;
