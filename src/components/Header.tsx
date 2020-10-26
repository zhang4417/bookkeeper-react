import React, { useState } from "react"
import styled from "styled-components"

const Wrapper = styled.section`
    >ul{
        display:flex;
        justify-content:center;
        padding:5px 16px;
        background:#eee;
        >li{
            padding:5px 0;
            margin:3px 8px;
            position:relative;
            &.selected{
                &::after{
                    position:absolute;
                    content:"";
                    width:100%;
                    border:1px solid #f60;
                    border-radius:.5px;
                    bottom:0;
                    left:0;
                }
            }
        }
    }
`
type Props = {
    cashType: "-" | "+",
    onChange: (selectedType: "-" | "+") => void
}
const Header: React.FC<Props> = (props) => {
    const [cash] = useState<CashItem[]>(["-", "+"])
    const cashMap = { "-": "支出", "+": "收入" }
    type CashItem = keyof (typeof cashMap)
    return (
        <Wrapper>
            <ul>
                {cash.map(c => {
                    return (
                        <li key={c} className={c === props.cashType ? "selected" : undefined} onClick={() => props.onChange(c)}>{cashMap[c]}</li>
                    )
                })}
            </ul>
        </Wrapper>
    )
}

export { Header }