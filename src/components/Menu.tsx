import '../styling/App.css';
import { useContext, useEffect } from "react";
import { UserContext } from "../context/userContext";
import { titleCase } from "../utils/utils";
import MakeDepositModal from "./modals/MakeDepositModal";
import MakeWithdrawalModal from "./modals/MakeWithdrawalModal";
import ViewBalanceModal from "./modals/ViewBalanceModal";


export default function Menu () {
    const {user} = useContext(UserContext);

    useEffect (() => {
        if (user.amount === 0 && user.type !== "credit") {
            //Do something if a not-credit account reaches a 0 balance
        }
    }, [user]);
    
    return (
        <>
            <h2>Welcome {titleCase(user.name?.split(' ')[0])}</h2>
            <h2>Account Type: {titleCase(user.type)}</h2>
            <section className="container">
                <nav>
                    <ViewBalanceModal />
                    <MakeDepositModal />
                    <MakeWithdrawalModal />
                </nav>
            </section>
        </>
    )
}