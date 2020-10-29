import React, { useState } from "react";
import Layout from 'components/Layout';
import { useRecord, Record } from "hooks/useRecord";
import { Header } from "components/Header";
import styled from "styled-components";
import Icon from "components/Icon";


const Wrapper = styled.div`
overflow-y:auto;
margin-top:8px;
>section{
    display:flex;
    flex-direction:column;
    >div{
        margin:0 16px;
        padding:5px;
        color:white;
        background:#F60;
        border-radius:5px 5px 0 0;
    }
    >ul{
        background:#eee;
        margin:0 16px;
        margin-bottom:16px;
        border-radius:5px;
        display:flex;
        &:nth-child(2){
            border-top-left-radius:0px;
            border-top-right-radius:0px;
        }
        &.show{
            position:relative;
            box-shadow:inset 0 -3px 3px #f5b992;
            >div{
                display:flex;
                justify-content: center;
                align-items: center;
                position:absolute;
                height:16px;
                width:16px;
                border-radius:8px;
                background:transparent;
                top:0;
                right:0px;
            }
        }
        >li{
            padding:8px 5px;
            line-height:32px;
            white-space: nowrap; 
            &:last-child{
                margin-left:auto;
            }
            &.note{
                flex-grow: 1; 
                overflow: hidden;
                text-overflow:ellipsis;  
                color:#a0a0a0;
            }
        }
        >div{
            display:none;
        }
    }
}

`
type Item = { [K: string]: Record[] }
function Statistics() {
    const { record, deleteRecord } = useRecord()
    const [selectedType, setSelectedType] = useState<"-" | "+">('-')
    const selectedRecord = record.filter(r => r.type === selectedType)
    const hash: Item = {}
    selectedRecord.map(r => {
        if (r.date in hash) { hash[r.date].push(r) }
        else { hash[r.date] = [r] }
        return hash
    })
    const sortRecord = Object.entries(hash).sort((a, b) => a[0] < b[0] ? 1 : -1)

    const [choiceRecord, setChoiceRecord] = useState(0)
    return (
        <Layout>
            <Header cashType={selectedType} onChange={(t) => { setSelectedType(t) }} />
            <Wrapper>
                {sortRecord.map(s => {
                    return (
                        <section key={s[0]}>
                            <div>{s[0]}</div>
                            {s[1].map(r => {
                                return (
                                    <ul key={r.id} onClick={() => setChoiceRecord(r.id)} className={choiceRecord === r.id ? "show" : ""}>
                                        <li>
                                            {r.tag.name}
                                        </li><li className="note">
                                            {r.note}
                                        </li><li>
                                            ¥{r.amount}
                                        </li>
                                        <div onClick={() => deleteRecord(r.id)}>
                                            <Icon name="delete" />
                                        </div>
                                    </ul>
                                )
                            })}
                        </section>
                    )
                })}
            </Wrapper>
        </Layout >
    )
}

export default Statistics