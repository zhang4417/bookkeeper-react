import { printContext } from "helper/context";
import React, { useContext, useEffect, useRef, useState } from "react";
import styled from "styled-components";

const Wrapper = styled.section`
    padding:3px 0;
    margin:8px 16px;
    @media(min-width:500px){
        margin:3px 16px;
    }
    height:32px;
    display:flex;
    align-items:center;
    box-shadow:
        0 3px 3px rgb(225,225,225),
        0 -3px 3px rgb(225,225,225);
    >label{
        flex-grow:1;
        display:flex;
        justify-content:center;
        align-items:center;
            >span{
                padding:0 3px;
                white-space:nowrap;
                color:#757575
             }
             >div{
                margin:0 5px;
                border-right:1px solid #757575;
                height:16px;
                background:transparent;
             }
            >.note{
                width:100%;

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
    const { setNoteDate } = useContext(printContext)
    const changeNote = () => {
        if (noteRef.current !== null) {
            setNote(noteRef.current.value)
        }
    }
    useEffect(() => {
        setNoteDate!({ note, date: dates })
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [note, dates])
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