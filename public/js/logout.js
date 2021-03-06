const logoutFormHandler = async (event) => {
	event.preventDefault();
	const response = await fetch('/api/users/logout', {
		method: 'post',
		headers: { 'Content-Type': 'application/json' }
	});
}

document.querySelector('button').addEventListener('click', logout);
