import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import Icon from 'components/Icon'

const NavWrapper = styled.nav`
    >ul{
        display:flex;
        >li{
            border:1px solid red;
            width:33.33%;
            display:flex;
            flex-direction:column;
            justify-content:center;
            align-items:center
        }
    }

`
function Nav() {
    return (
        <NavWrapper>
            <ul>
                <li>
                    <Icon name="tag" />
                    <Link to="/tags">tags</Link>
                </li>
                <li>
                    <Icon name="money" />
                    <Link to="/money">money</Link>
                </li>
                <li>
                    <Icon name="statistics" />
                    <Link to="/statistics">statistics</Link>
                </li>
            </ul>
        </NavWrapper>
    )
}

export default Nav