import React from 'react';
import { useState } from 'react';

import http from '../../http-common';


const Testpost = () => {

    const formData = {
		Descrption: 'Test',
		likes: 3,
		postTitle: 'Test',
		tag: 'www',
		

	};
    console.log(formData);

    const onSubmit = async (e) => {
		e.preventDefault();
        http.post('/post', formData)
		.then((response) => {
			document.getElementById('create-btn-post').style.visibility =
				'hidden';
			if (response.status === 200) {
				window.location = '/posts';
			} else {
				// TODO errors
				console.log('create post error');
				return null;
			}
		})
		.catch(function (err) {
			document.getElementById('create-btn-post').style.visibility =
				'visible';

			console.log(err);

			//return window.location.reload();
		});

	};

    return (
		
        <form className='form' onSubmit={(e) => onSubmit(e)}>
        <button
							id='create-btn-post'
							className='createpost-btn'
							type='submit'
							value='Post'

							>
						</button>
        
        </form>
        
        
    );
}
export default Testpost;
