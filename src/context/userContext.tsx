import { ReactNode, createContext, useContext } from "react";
import { ChildProps, User } from "../ts_types/types";

export const UserContext = createContext<User>(null)

export default function UserProvider ({children}: {children: ReactNode}) {
    
    return (

        
        <UserContext.Provider >
            {children}
        </UserContext.Provider>
    )
}