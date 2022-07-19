export const getAllPosts = async () => {
	let ttt;
	await http.get('/posts').then((res) => {
		ttt = res;
	});

	return console.log(ttt);
};

getAllPosts();
