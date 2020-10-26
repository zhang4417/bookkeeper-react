import React, { useState } from "react";
import Layout from 'components/Layout';
import { useRecord } from "hooks/useRecord";
import { Header } from "components/Header";
import styled from "styled-components";

const Wrapper = styled.div`
    display:flex;
    flex-direction:column;
    >ul{
        background:#eee;
        margin:8px 16px;
        border-radius:5px;
        display:flex;
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

`
function Statistics() {
    const { record } = useRecord()
    const [selectedType, setSelectedType] = useState<"-" | "+">('-')
    const selectedRecord = record.filter(r => r.type === selectedType)
    return (
        <Layout>
            <Header cashType={selectedType} onChange={(t) => { setSelectedType(t) }} />
            <Wrapper>
                {selectedRecord.map(r => {
                    return (
                        <ul>
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
            </Wrapper>
        </Layout>
    )
}

export default Statistics