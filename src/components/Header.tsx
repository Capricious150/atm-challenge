import '../styling/App.css'
import { useContext } from 'react'
import { UserContext } from '../context/userContext'
import { Button } from '@mui/material';

export default function Header() {

    const {user, setUser} = useContext(UserContext);



    return (
        <header id='pageHeader'>
            <div>
              <h1>ATM</h1>
              <h5>Your trusted name in ATMs</h5>
            </div>
            <span className='growSpan'/>
            {user.authed === true &&
                <Button
                  sx={{
                    color: 'white',
                    height: '2.5rem'
                  }}

                  onClick={() => {
                    setUser({...user, authed: false})
                  }}
                >
                  Sign Out
                </Button>
            }
          </header>
    )
}