const getType = (type) => {
	switch (type) {
		case 'danger':
			return 'alert alert-danger';
		case 'secondary':
			return 'alert alert-secondary';
		case 'success':
			return 'alert alert-success';
		case 'primary':
			return 'alert alert-primary';
		case 'warning':
			return 'alert alert-warning';
		case 'info':
			return 'alert alert-info';
		case 'light':
			return 'alert alert-light';
		case 'dark':
			return 'alert alert-dark';
		default:
			return 'alert alert-light';
	}
};

const setMessageFadeOut = (alertMessage) => {
	setTimeout(() => {
		let currentOpacity = 1.0;
		let timer = setInterval(() => {
			if (currentOpacity <= 0.05) {
				clearInterval(timer);
				alertMessage.remove();
			}
			currentOpacity -= 0.05;
			alertMessage.style.opacity = currentOpacity;
		}, 50);
	}, 4000);
};

export const alert = (type = 'danger', message = 'sdfsf') => {
	let div = document.createElement('div');
	div.setAttribute('class', getType(type));
	let innerTextNode = document.createTextNode(message);
	div.appendChild(innerTextNode);

	div.appendChild(innerTextNode);

	document.getElementById('notifications').appendChild(div);

	let notif = document.createElement('p');
	let innerTextNodeNotif = document.createTextNode(message);
	notif.appendChild(innerTextNodeNotif);
	notif.appendChild(innerTextNodeNotif);
	if (document.getElementById('notifications-1')) {
		document.getElementById('notifications-1').appendChild(notif);
	}

	if (document.getElementById('eeee')) {
		document.getElementById('eeee').remove();
	}

	setMessageFadeOut(div);

	if (div) {
		setMessageFadeOut(div);
	}
};
