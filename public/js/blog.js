async function newFormHandler(event) {
  event.preventDefault();
  const title = document.querySelector('input[name="blog-title"]').value;
  const blog_content = document.querySelector('input[name="blog-content"]').value;
  const response = await fetch(`/api/blogs`, {
    method: 'POST',
    body: JSON.stringify({
      title,
      blog_content
    }),
    headers: {
      'Content-Type': 'application/json'
    }
  });
  if (response.ok) {
    document.location.replace('/dashboard');
  } else {
    alert(response.statusText);
  }
}

async function editFormHandler(event) {
  event.preventDefault();
  const title = document.querySelector('input[name="blog-title"]').value;
  const blog_content = document.querySelector('input[name="blog-content"]').value;
  const id = location.toString().split('/')[location.toString().split('/').length - 1];
  const response = await fetch(`/api/posts/${id}`, {
      method: 'PUT',
      body: JSON.stringify({
          title,
          blog_content
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

async function deleteFormHandler(event) {
  event.preventDefault();
  const id = location.toString().split('/')[location.toString().split('/').length - 1];
  const response = await fetch(`/api/blogs/${id}`, {
    method: 'DELETE',
    body: JSON.stringify({
      blog_id: id
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

document.querySelector('.new-blog-form').addEventListener('submit', newFormHandler);
document.querySelector('.edit-blog-form').addEventListener('submit', editFormHandler);
document.querySelector('.delete-blog-btn').addEventListener('click', deleteFormHandler);
