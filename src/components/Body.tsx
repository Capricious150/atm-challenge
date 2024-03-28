import { UserContext } from "../context/userContext"
import Header from "./Header"
import Login from "./Login"
import { useContext } from "react"
import Menu from "./Menu"

//Very simple component, serves as the outer pagelayout. Called by App.tsx
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