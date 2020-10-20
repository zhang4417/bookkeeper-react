import React from "react"
import styled from "styled-components"

const Wrapper = styled.section`
    >ul{
        display:flex;
        justify-content:center;
        padding:5px 16px;
        >li{
            padding:5px 0;
            margin:3px 8px;
            position:relative;
            &.selected{
                &::after{
                    position:absolute;
                    content:"";
                    width:100%;
                    border:1px solid red;
                    bottom:0;
                    left:0;
                }
            }
        }
    }
`
function CashType() {
    return (
        <Wrapper>
            <ul>
                <li className="selected">支出</li>
                <li>收入</li>
            </ul>
        </Wrapper>
    )
}

export { CashType }