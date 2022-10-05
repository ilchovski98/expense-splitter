import { getUsers, getMe } from '../api/users';

function Home() {

  return (
    <>
      <h1>Home page</h1>
      <button onClick={() => getUsers()}>Get Users</button>
      <button onClick={() => getMe()}>Me</button>
    </>
  )
}

export default Home;
