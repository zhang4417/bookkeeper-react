import React from 'react'
import { Link } from 'react-router-dom'
function Nav() {
    return (
        <>
            <nav>
                <ul>
                    <li>
                        <Link to="/tags">tags</Link>
                    </li>
                    <li>
                        <Link to="/money">money</Link>
                    </li>
                    <li>
                        <Link to="/statistics">statistics</Link>
                    </li>
                </ul>
            </nav>
        </>
    )
}

export default Nav