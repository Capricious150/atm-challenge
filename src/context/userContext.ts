import { createContext, useContext } from "react";
import { User } from "../ts_types/interfaces";

export const userContext = createContext<User>(null)