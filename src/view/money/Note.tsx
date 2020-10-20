import React, { useRef, useState } from "react";
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
    const [note, setNote] = useState<string>('')
    const [dates, setDates] = useState(now)
    const noteRef = useRef<HTMLInputElement>(null)
    const changeNote = () => {
        if (noteRef.current !== null) {
            setNote(noteRef.current.value)
        }
    }
    console.log(dates)
    return (
        <Wrapper>
            <label>
                <span>备注</span>
                <div></div>
                <input   //非受控组件
                    placeholder="请在这里输入备注"
                    className="note"
                    ref={noteRef}
                    defaultValue={note}
                    onBlur={changeNote}
                />
            </label>
            <input     //受控组件
                type="date"
                value={dates}
                className="date"
                onChange={(e) => setDates(e.target.value)}
            />
        </Wrapper>
    )
}

export { Note }