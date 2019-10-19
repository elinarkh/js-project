export const getPosts = () => (
  fetch(
    'http://5da5c7ce57f48b0014fbad58.mockapi.io/api/posts',
    {
      method: 'GET',
    }
  )
)

/*export const getPost = (id) => (
    fetch(
        'http://5da5c7ce57f48b0014fbad58.mockapi.io/api/posts/' + id,
        {
            method: 'GET',
        }
    )
)*/

export const createPost = (data) => (
  fetch(
    'http://5da5c7ce57f48b0014fbad58.mockapi.io/api/posts',
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
)
