
import { useContext } from 'react'
import './App.css'
import Header from './components/Header'
import UserProvider, { UserContext } from './context/userContext'
import Login from './components/Login';

function App() {
  const userData = useContext(UserContext);

  return (
    <UserProvider>
      <main id='pageBody'>
        <section id='pageCard'>
          <Header />
          {userData.authed === false &&
            <Login />
          }
        </section>
      </main>
    </UserProvider>
  )
}

export default App
