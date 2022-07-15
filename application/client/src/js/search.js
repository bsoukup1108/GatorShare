import http from '../http-common';

const highlightText = (str, searchTerm) => {
	return str
		.toString()
		.replace(
			searchTerm,
			`<span style="background-color: yellow">${searchTerm}</span>`
		);
};

const createPostSearch = (entry, searchTerm = '') => {
	let res = '';
	res += `<div><strong>Author:</strong> ${highlightText(
		entry.firstName,
		searchTerm
	)} ${highlightText(entry.lastName, searchTerm)}</div>`;
	res += `<div><strong>Description:</strong> ${highlightText(
		entry.information,
		searchTerm
	)}</div><br/>`;

	return res;
};

const handleSearch = (e) => {
	e.preventDefault();

	let searchTerm = document.getElementById('search-text').value;
	// let searchURL = `http://localhost:1234/api/search?${searchTerm}`;

	// stub
	let searchURL = '/aboutus';
	let mainContent = document.getElementById('search-results');

	http.get(searchURL)
		.then((res) => {
			return res.data;
		})
		.then((data) => {
			let newMainNewContentHTML = '';
			if (searchTerm === '') {
				for (let i = 0; i < data.length; i++) {
					newMainNewContentHTML += createPostSearch(data[i]);
				}
			} else {
				for (let i = 0; i < data.length; i++) {
					Object.entries(data[i]).forEach(([, value]) => {
						if (
							value
								.toString()
								.toLowerCase()
								.includes(searchTerm.toString().toLowerCase())
						) {
							newMainNewContentHTML += createPostSearch(
								data[i],
								searchTerm
							);
						}
					});
				}
			}
			mainContent.innerHTML = newMainNewContentHTML;
		})
		.catch((err) => {
			console.log(err);
		});
};

export default handleSearch;
