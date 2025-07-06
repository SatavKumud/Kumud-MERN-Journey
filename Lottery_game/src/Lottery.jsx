import { useState } from "react";
import { genTicket, sum } from "./helper";
import Ticket from "./Ticket";
import "./Btn.css";

export default function Lottery({ n = 3, winCondition }) {

    let [ticket, setTicket] = useState(genTicket(n));
    let isWinning = winCondition(ticket);

    let buyTicket = () => {
        setTicket(genTicket(n));
    }
    return (
        <div>
            <h1 style={{ color: "pink" }}>Lottery Game</h1>
            <Ticket ticket={ticket} />
            <button className="btn" onClick={buyTicket}>Buy New Ticket</button>
            <h3 style={{ color: "pink" }}>{isWinning && "Congrats!! You won the Lottery"}</h3>

        </div >

    );
}