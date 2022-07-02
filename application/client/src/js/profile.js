import axios from 'axios';

let config = {
	headers: { 'Access-Control-Allow-Origin': '*' },
};

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

export const getUser = async () => {
	// let searchURL = `http://localhost:1234/api/search?${searchTerm}`;

	// stub
	let searchURL = 'http://localhost:1234/api/aboutus';

	let res = await axios
		.get(searchURL, config)
		.then((res) => {
			return res.data;
		})
		.then((data) => {
			return (res = Object.entries(data[3]));
		})

		.catch((err) => {
			console.log(err);
		});
	return res;
};
