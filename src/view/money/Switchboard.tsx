import { printContext } from "helper/context"
import React, { useContext, useEffect, useState } from "react"
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
function Switchboard() {
    const [cash] = useState<CashItem[]>(["-", "+"])
    const cashMap = { "-": "支出", "+": "收入" }
    type CashItem = keyof (typeof cashMap)
    const [select, setSelect] = useState<string>('-')
    const { setTypes } = useContext(printContext)
    useEffect(() => {
        setTypes!(select)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [select])
    return (
        <Wrapper>
            <ul>
                {cash.map(c => {
                    return (
                        <li key={c} className={c === select ? "selected" : undefined} onClick={() => setSelect(c)}>{cashMap[c]}</li>
                    )
                })}
            </ul>
        </Wrapper>
    )
}

export { Switchboard }