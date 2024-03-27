import { UserContext } from "../context/userContext"
import Header from "./Header"
import Login from "./Login"
import { useContext } from "react"
import Menu from "./Menu"

export default function Body () {

    const {user} = useContext(UserContext)
    return (
        <main id='pageBody'>
            <section id='pageCard'>
            <Header />
            {user.authed === false &&
                <Login />
            }
            {user.authed === true &&
                <Menu />
            }
            </section>
      </main>
    )
}