export const getPosts = () => (
  fetch(
    'http://event-search-akali.herokuapp.com/events',
    {
      method: 'GET',
    }
  )
)

export const getPost = (id) => (
    fetch(
        `http://event-search-akali.herokuapp.com/events/${id}`,
        {
            method: 'GET',
        }
    )
)

export const createPost = (data) => (
  fetch(
    'http://event-search-akali.herokuapp.com/events',
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
