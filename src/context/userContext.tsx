import { ReactNode, createContext, useContext } from "react";
import { User } from "../ts_types/types";

export const UserContext = createContext<User>({authed: false})

export default function UserProvider ({children}: {children: ReactNode}) {

    const user = useContext(UserContext);
    
    return (
        <UserContext.Provider value={user}>
            {children}
        </UserContext.Provider>
    )
}