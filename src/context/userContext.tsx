import { ReactNode, createContext, useState } from "react";
import { User } from "../ts_types/types";

//Used React's Create and Use Context because of the small scope and development team for this project
//In a larger project, or a project with more contributors, I would have likely used Redux
export const UserContext = createContext<{
    user: User,
    setUser: (user: User) => void}>
    ({user: {authed: false},
    setUser: () => {}})

export default function UserProvider ({children}: {children: ReactNode}) {

    const [user, setUser] = useState<User>({authed:false})

    return (
        <UserContext.Provider value={{user, setUser}}>
            {children}
        </UserContext.Provider>
    )
}