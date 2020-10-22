import Icon from "components/Icon";
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
        justify-content:flex-start;
        >li{
            margin-top:8px;
            margin-bottom:8px;
            margin-left:2%;
            background:#eee;
            border-radius:16px;
            width:18%;
            display:flex;
            flex-direction:column;
            justify-content:center;
            align-items:center;
            padding:3px 0;
            >svg{
                width:1.5em;
                height:1.5em;
            }
            &.selected{
                background:#f60;
                color:white;
                >svg{fill:white;}
            }
        }
    }
`
type TagList = {
    name: string, icon: string
}

function TagList() {
    const [tag] = useState<TagList[]>([{ name: "交通", icon: "jiaotong" }, { name: "住宿", icon: "zhusu" }, { name: "购物", icon: "gouwu" }, { name: "充值", icon: "chongzhi" }, { name: "聚餐", icon: "jucan" }, { name: "日用", icon: "riyong" }])
    const [selectedTag, setSelectedTag] = useState<TagList>(tag[0])

    const { setPadTag } = useContext(printContext)

    const addTag = (tag: TagList) => {
        if (selectedTag.name !== tag.name) {
            setSelectedTag({ ...tag })
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
                        <li key={t.name} onClick={() => addTag(t)} className={selectedTag.name === t.name ? "selected" : undefined}>
                            <Icon name={t.icon} />
                            <span>{t.name}</span>
                        </li>

                    )
                })}
                <li>
                    <Icon name="xinzeng" />
                    <span>新增</span>
                </li>
            </ul>
        </Wrapper>
    )
}

export { TagList }