import base64 from 'react-native-base64';

export const login = (userInfo) => fetch(
  `http://event-search-akali.herokuapp.com/users/me`,
  {
    method: 'GET',
    headers: {
      'Authorization': `Basic ${tokenize(userInfo.username, userInfo.password)}`,
    }
  }
);

export const tokenize = (username, password) => {
  const token = `${username}:${password}`;
  return `${base64.encode(token)}`;
};
