import { useContext } from "react"
import { UserContext } from "../context/userContext"


export default function Menu () {
    const {user} = useContext(UserContext)
    return (
        <section>
            <h1>WELCOME {user.name?.toUpperCase().split(' ')[0]}</h1>
            <nav>
                <div className="bigButton">
                    <h2>VIEW BALANCE</h2>
                </div>
                <div className="bigButton">
                    <h2>DEPOSIT</h2>
                </div>
                <div className="bigButton">
                    <h2>WITHDRAW</h2>
                </div>
            </nav>
        </section>
    )
}