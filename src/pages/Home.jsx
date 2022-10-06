import { getUsers, getMe } from '../api/users';
import {
  getMyPayments,
  getAllPayments,
  createPayment,
  updatePayment,
  deletePayment } from '../api/payments';

function Home() {

  const handleMyPayments = async () => {
    console.log(await getMyPayments())
  };

  return (
    <>
      <h1>Home page</h1>
      <button onClick={() => createPayment({
        amount: 20,
        type: 'SINGLE',
        timeStamp: Date.now()
      })}>createPayment</button>
      <button onClick={() => handleMyPayments()}>Me</button>
    </>
  )
}

export default Home;
