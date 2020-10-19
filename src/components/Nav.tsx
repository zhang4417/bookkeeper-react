import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import Icon from 'components/Icon'

const NavWrapper = styled.nav`
    >ul{
        background:#eee;
        display:flex;
        >li{
            width:33.33%;
            padding:3px 16px;
            >a{
                display:flex;
                flex-direction:column;
                justify-content:center;
                align-items:center;
                &.selected{
                    color:#f60;
                    .icon{
                        fill:#ff6600;
                    }
                }
            };

        }
    }

`
function Nav() {
    return (
        <NavWrapper>
            <ul>
                <li>
                    <NavLink to="/tags" activeClassName="selected">
                        <Icon name="tag" />
                        <div>标签</div>
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/money" activeClassName="selected">
                        <Icon name="money" />
                        <div>记账</div>
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/statistics" activeClassName="selected">
                        <Icon name="statistics" />
                        <div>统计</div>
                    </NavLink>
                </li>
            </ul>
        </NavWrapper>
    )
}

export default Nav