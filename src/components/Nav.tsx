import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import icon from 'icons/money.svg'
const NavWrapper = styled.nav`
    >ul{
        display:flex;
        >li{
            border:1px solid red;
            width:33.33%;
            display:flex;
            justify-content:center;
        }
    }

`
function Nav() {
    return (
        <NavWrapper>
            <ul>
                <li>
                    <img src={icon} alt="" />
                    <Link to="/tags">tags</Link>
                </li>
                <li>
                    <Link to="/money">money</Link>
                </li>
                <li>
                    <Link to="/statistics">statistics</Link>
                </li>
            </ul>
        </NavWrapper>
    )
}

export default Nav