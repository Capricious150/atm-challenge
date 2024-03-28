import { ReactNode, createContext, useState } from "react";
import { User } from "../ts_types/types";

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