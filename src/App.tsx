import './styling/App.css'
import UserProvider from './context/userContext'
import Body from './components/Body';

function App() {

  return (
    <UserProvider>
      <Body />
    </UserProvider>
  )
}

export default App
