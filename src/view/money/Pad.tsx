import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
    margin:8px 0;
    box-shadow:
        0 3px 3px rgb(225,225,225),
        0 -3px 3px rgb(225,225,225);
    >button{
        font-size:16px;
        float:left;
        width:25%;
        height:56px;
        border:none;
        outline:none;
        &.ok{
            float:right;
            height:112px;
        }
        &.zero{
            width:50%;
        }
    }
`
function Pad() {
    return (
        <Wrapper>
            <button>1</button>
            <button>2</button>
            <button>3</button>
            <button>C</button>
            <button>4</button>
            <button>5</button>
            <button>6</button>
            <button>←</button>
            <button>7</button>
            <button>8</button>
            <button>9</button>
            <button className="ok">OK</button>
            <button className="zero">0</button>
            <button>.</button>
        </Wrapper>
    )
}

export { Pad }