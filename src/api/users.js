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
    const result = await fetch('http://localhost:8000/api/users/me');
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
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data),
    });
    if (result.status == 200) {
      localStorage.setItem('x-auth-token', await result.json());
      return {status: result.status};
    } else {
      return {status: result.status, message: await result.json().message};
    }
    console.log('result', await result.json());
    return result;
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
    console.log('result1', await result.json());
    console.log('result2', await result);
    console.log('result3', await result.headers);
    console.log('result4', await JSON.stringify(result.headers.keys()));
    console.log(JSON.stringify(result.headers.get('x-auth-token')));
    return result;
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
