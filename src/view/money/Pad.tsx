import { printContext } from "helper/context";
import { useRecord } from "hooks/useRecord";
import { useToast } from "hooks/useToast";

import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";


const Wrapper = styled.div`
    margin:8px 0;
    box-shadow:
        0 3px 3px rgb(225,225,225),
        0 -3px 3px rgb(225,225,225);
    >button{
        font-size:18px;
        float:left;
        width:25%;
        height:56px;
        border:none;
        outline:none;
        border:.5px solid #ebe9e9;
        @media(min-width:500px){
            height:48px;
        }
        &.ok{
            float:right;
            height:112px;
            @media(min-width:500px){
                height:96px;
            }
        }
        &.zero{
            width:50%;
        }
        &.active{
            background:red;
        }
    }
`

function Pad() {
    const [output, setOutput] = useState<string>('0')
    const { setPrint, print, padTag, types, noteDate } = useContext(printContext)
    const { addRecord } = useRecord()
    const { addToast } = useToast()
    const printCash = (e: React.MouseEvent) => {
        const text = (e.target as HTMLButtonElement).textContent
        if (text === null) { return }
        if (text === "c") {
            setOutput("0")
        }
        if (text === "×") {
            if (output.length === 1) {
                setOutput("0")
            } else {
                const str = output.slice(0, -1)
                setOutput(str)
            }
        }
        if (text === "OK") {
            addRecord({ amount: parseFloat(print!), tag: padTag!, type: types!, note: noteDate!.note, date: noteDate!.date, id: Math.random() });
            addToast("添加成功", 2000)
        }
        if (output.length >= 16) { return }
        if ("0123456789".indexOf(text) >= 0) {
            if (output === '0') {
                setOutput(text)
            } else {
                setOutput(output + text)
            }
        }
        if (text === "." && output.indexOf('.') < 0) {
            setOutput(output + text)
        }
    }
    useEffect(() => {
        setPrint!(output)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [output])
    return (
        <Wrapper onClick={printCash}>
            <button>1</button>
            <button>2</button>
            <button>3</button>
            <button>×</button>
            <button>4</button>
            <button>5</button>
            <button>6</button>
            <button>c</button>
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