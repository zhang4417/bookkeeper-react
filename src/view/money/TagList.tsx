import { printContext } from "context";
import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";

const Wrapper = styled.section`
    flex-grow:1;
    margin:8px 16px;
    padding:8px 0;
    >ul{
        display:flex;
        flex-wrap:wrap;
        justify-content:space-between;
        >li{
            margin-top:8px;
            margin-bottom:8px;
            background:#eee;
            border-radius:16px;
            width:18%;
            height:42px;
            display:flex;
            justify-content:center;
            align-items:center;
            &.selected{
                background:#f60;
                color:white;
            }
        }
    }
`

function TagList() {
    const [tag] = useState<string[]>(["交通", "住宿", "购物", "充值", "食物", "日用"])
    const [selectedTag, setSelectedTag] = useState<string[]>([tag[0]])

    const { setPadTag } = useContext(printContext)

    const addTag = (tag: string) => {
        const index = selectedTag.indexOf(tag)
        if (index < 0) {
            selectedTag.splice(0, 1, tag)
            setSelectedTag([...selectedTag])
        }
    }
    useEffect(() => {
        setPadTag!(selectedTag)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [selectedTag])
    return (
        <Wrapper>
            <ul>
                {tag.map(t => {
                    return (
                        <li key={t} onClick={() => addTag(t)} className={selectedTag.indexOf(t) >= 0 ? "selected" : undefined}>
                            {t}
                        </li>
                    )
                })}
            </ul>
        </Wrapper>
    )
}

export { TagList }