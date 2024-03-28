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

                  /* Refer to the comment on line 107 of MakeDepositModal for why only authed is set to false here */
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