import React, { useState } from "react";
import Layout from 'components/Layout';
import { useRecord, Record } from "hooks/useRecord";
import { Header } from "components/Header";
import styled from "styled-components";

const Wrapper = styled.div`
overflow-y:auto;
>section{
    display:flex;
    flex-direction:column;
    >div{
        margin:0 16px;
        background:#F60;
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
    }
}

`
type Item = { [K: string]: Record[] }
function Statistics() {
    const { record } = useRecord()
    const [selectedType, setSelectedType] = useState<"-" | "+">('-')
    const selectedRecord = record.filter(r => r.type === selectedType)
    const hash: Item = {}
    selectedRecord.map(r => {
        if (r.date in hash) { hash[r.date].push(r) }
        else { hash[r.date] = [r] }
        return hash
    })
    const sortRecord = Object.entries(hash).sort((a, b) => a[0] < b[0] ? 1 : -1)
    console.log('hash')
    console.log(sortRecord)

    return (
        <Layout>
            <Header cashType={selectedType} onChange={(t) => { setSelectedType(t) }} />
            <Wrapper>
                {sortRecord.map(s => {
                    return (
                        <section key={Math.random()}>
                            <div>{s[0]}</div>
                            {s[1].map(r => {
                                return (
                                    <ul key={Math.random()}>
                                        <li>
                                            {r.tag.name}
                                        </li><li className="note">
                                            {r.note}
                                        </li><li>
                                            ¥{r.count}
                                        </li>
                                    </ul>
                                )
                            })}
                        </section>
                    )
                })}
            </Wrapper>

        </Layout>
    )
}

export default Statistics