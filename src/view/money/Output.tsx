import Icon from "components/Icon";
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
    display:flex;
    justify-content: center;
    align-items: center;
    >span{padding: 0 10px;}
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
type Props = {
    print: string,
    tag: { name: string, icon: string }
}

function Output(props: Props) {
    return (
        <Wrapper>
            <div>
                <Icon name={props.tag.icon} />
                <span>{props.tag.name}</span>
            </div>
            <input value={props.print} disabled />
        </Wrapper>
    )
}

export { Output }