import {API_URL} from "../const";

export const getPosts = () => (
  fetch(
    `${API_URL}/posts`,
    {
      method: 'GET',
    }
  )
);

export const getPost = (id) => (
  fetch(
    `${API_URL}/posts/${id}`,
    {
      method: 'GET',
    }
  )
);

export const createPost = (data) => (
  fetch(
    `${API_URL}/posts`,
    {
      method: 'POST',
      body: JSON.stringify({
        title: data.title,
        body: data.body,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8;"
      }
    }
  )
);
