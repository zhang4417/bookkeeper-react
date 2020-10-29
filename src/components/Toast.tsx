import React from "react"
import styled, { keyframes } from "styled-components"

const aniToast = keyframes`
    0%{opacity:0}
    30%{opacity:.5}
    60%{opacity:.5}
    100%{opacity:0}
`
const Wrapper = styled.div`
    padding:16px;
    position:fixed;
    left:50%;
    top:50%;
    transform:translate(-50%,-50%);
    display:flex;
    justify-content: center;
    align-items: center;
    background:#202020;
    color:white;
    border-radius:16px;
    animation:${aniToast} 2s linear;
`
type Props = {
    msg: string;
}
const Toast: React.FC<Props> = (props) => {
    return (
        <Wrapper>
            {props.msg}
        </Wrapper>
    )
}



export { Toast }
