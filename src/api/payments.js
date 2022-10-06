const { parseJwt } = require('../helpers/jwt-decode');

const getMyPayments = async () => {
  try {
    const result = await fetch('http://localhost:8000/api/payments/me', {
      headers: {
        'x-auth-token': localStorage.getItem('x-auth-token')
      }
    });

    return await result.json();
  } catch (error) {
    console.log(error);
  }
}

const getAllPayments = async () => {
  try {
    const result = await fetch('http://localhost:8000/api/payments');
    return await result.json();
  } catch (error) {
    console.log(error);
  }
}

const createPayment = async (data) => {
  const token = localStorage.getItem('x-auth-token');
  if (token) {
    const parsedToken = parseJwt(token);
    console.log('parsedToken', parsedToken);
    const requestBody = {userId: parsedToken._id, ...data};
    try {
      const result = await fetch('http://localhost:8000/api/payments/create', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-auth-token': localStorage.getItem('x-auth-token')
        },
        body: JSON.stringify(requestBody)
      });

      return await result.json();
    } catch (error) {
      console.log(error);
    }
  } else {
    console.log('You must login before executing this action.');
  }
}

const updatePayment = () => {

}

const deletePayment = () => {

}

module.exports = {
  getMyPayments,
  getAllPayments,
  createPayment,
  updatePayment,
  deletePayment
}
