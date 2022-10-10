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
      <div className="shell">
        <h1>Home page</h1>
        <button onClick={() => createPayment({
          amount: 20,
          type: 'SINGLE',
          timeStamp: Date.now()
        })}>createPayment</button>
        <button onClick={() => handleMyPayments()}>Me</button>
      </div>
    </>
  )
}

export default Home;
