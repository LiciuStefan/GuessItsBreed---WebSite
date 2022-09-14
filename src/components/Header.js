import React from "react"
import '../index.css';

export default function Header() {
    return (
        <header className="header">
            <img src = {require("../images/cute-dog.jpg")} alt = "nu e caine"
                 className="img-logo"
            />
            <h2 className="header--title">Guess its breed</h2>
            <h4 className="header--project">React Project</h4>
        </header>
    )
}