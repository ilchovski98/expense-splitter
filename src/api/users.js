const getUsers = async () => {
  try {
    const result = await fetch('http://localhost:8000/api/users');
    console.log('result', await result.json());
    return result;
  } catch (error) {
    console.log(error);
  }
}

const getMe = async () => {
  try {
    const result = await fetch('http://localhost:8000/api/users/me', {
      headers: {
        'x-auth-token': localStorage.getItem('x-auth-token')
      }
    });
    console.log('result', await result.json());
    return result;
  } catch (error) {
    console.log(error);
  }
}

const login = async (data) => {
  try {
    const result = await fetch('http://localhost:8000/api/auth', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Headers': 'x-auth-token'
      },
      body: JSON.stringify(data),
    });

    const response = await result.json();
    const token = result.headers.get('x-auth-token');
    localStorage.setItem('x-auth-token', token);
    console.log('result', response);
    console.log('token', token);

    return response;
  } catch (error) {
    console.log(error);
  }
}

const register = async (data) => {
  try {
    const result = await fetch('http://localhost:8000/api/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Headers': 'x-auth-token'
      },
      body: JSON.stringify(data),
    });
    const response = await result.json();
    const token = result.headers.get('x-auth-token');

    console.log('token', token);
    console.log('response', response);

    localStorage.setItem('x-auth-token', token);

    return response;
  } catch (error) {
    console.log(error);
  }
}

module.exports = {
  getUsers,
  getMe,
  login,
  register
}
