import '../App.css'
import { useContext } from 'react'
import { UserContext } from '../context/userContext'

export default function Header() {

    const userData = useContext(UserContext);



    return (
        <header id='pageHeader'>
            <div>
              <h1>ATM</h1>
              <h5>Your trusted name in ATMs</h5>
            </div>
            <span className='growSpan'/>
            {userData.authed === true &&
                <h5>Sign Out</h5>
            }
          </header>
    )
}