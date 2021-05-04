async function deleteFormHandler(event) {
	event.preventDefault();
	const id = location.toString().split('/')[location.toString().split('/').length - 1];
	const response = await fetch(`/api/posts/${id}`, {
		method: 'DELETE',
		body: JSON.stringify({
			post_id: id
		}),
		headers: {
			'Content-Type': 'application/json'
		}
	});
	if (response.ok) {
		document.location.replace('/dashboard/');
	} else {
		alert(response.statusText);
	}
}

document.querySelector('.delete-blog-btn').addEventListener('click', deleteFormHandler);
