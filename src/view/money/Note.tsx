import React from "react";
import styled from "styled-components";

const Wrapper = styled.section`
    padding:3px 0;
    margin:8px 16px;
    display:flex;
    justify-content:center;
    align-items:center;
    box-shadow:
        0 3px 3px rgb(225,225,225),
        0 -3px 3px rgb(225,225,225);
    >label{
        display:flex;
        justify-content:center;
        align-items:center;
            >span{
                padding:0 3px;
                white-space:nowrap;
                color:#333
             }
             >div{
                margin:0 5px;
                border-right:1px solid black;
                height:16px;
                background:transparent;
             }
            >.note{
                width:100%;
                height:32px;
                border:none;
            }
    }
    >.date{
        margin-left:16px;
        border:none;
        text-align:right;
        direction:rtl;
        background:transparent;
    }
`

function Note() {
    const now: string = new Date().toISOString().replace(/T.*/i, '');
    return (
        <Wrapper>
            <label>
                <span>备注</span>
                <div></div>
                <input placeholder="请在这里输入备注" className="note" />
            </label>
            <input type="date" defaultValue={now} className="date" />
        </Wrapper>
    )
}

export { Note }