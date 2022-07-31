import React from 'react';

const Spinner = () => {
	return (
		<div
			className='d-flex justify-content-center align-items-center'
			style={{ height: '100%' }}
		>
			<div
				className='spinner-grow text-primary'
				role='status'
				style={{ width: '10rem', height: '10rem' }}
			>
				<span className='sr-only'>Error loading...</span>
			</div>
		</div>
	);
};

export default Spinner;
