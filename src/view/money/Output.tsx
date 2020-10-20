import React from "react";
import styled from "styled-components";

const Wrapper = styled.section`
margin:8px 16px;
padding:8px 16px;
display:flex;
background:#f60;
border-radius:16px;
justify-content:center;
align-items:center;
font-size:24px;
box-shadow:
    0 3px 3px rgb(225,225,225);
>div{
    white-space:nowrap;
}
>input{
    width:100%;
    height:64px;
    outline:none;
    background:transparent;
    border:none;
    text-align:right;
    font-size:inherit;
}
`

function Output() {
    return (
        <Wrapper>
            <div>工资</div>
            <input defaultValue="123" />
        </Wrapper>
    )
}

export { Output }