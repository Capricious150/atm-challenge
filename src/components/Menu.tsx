import { useContext } from "react"
import { UserContext } from "../context/userContext"
import { Button } from "@mui/material"
import { menuButton } from "../styling/sxProps"
import '../styling/App.css'


export default function Menu () {
    const {user} = useContext(UserContext)
    return (
        <>
            <h2>WELCOME {user.name?.toUpperCase().split(' ')[0]}</h2>
            <section className="container">
                <nav>
                    <Button 
                    sx={menuButton}    
                    >
                        <h2>VIEW BALANCE</h2>
                    </Button>
                    <Button 
                    sx={menuButton}    
                    >
                        <h2>DEPOSIT</h2>
                    </Button>
                    <Button 
                    sx={menuButton}    
                    >
                        <h2>WITHDRAW</h2>
                    </Button>
                </nav>
            </section>
        </>
    )
}