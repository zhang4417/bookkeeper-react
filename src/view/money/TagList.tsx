import Icon from "components/Icon";
import { printContext } from "helper/context";
import { useTags } from "hooks/useTags";
import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
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
            &.addTag{
                >a{
                    display:flex;
                    flex-direction:column;
                }
            }
        }
    }
`
type TagList = {
    name: string, icon: string
}

function TagList() {
    const { tag, setTag } = useTags()
    const [selectedTag, setSelectedTag] = useState<TagList>(tag[0])

    const { setPadTag } = useContext(printContext)

    const choiceTag = (tag: TagList) => {
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
                        <li key={t.name} onClick={() => choiceTag(t)} className={selectedTag.name === t.name ? "selected" : undefined}>
                            <Icon name={t.icon} />
                            <span>{t.name}</span>
                        </li>

                    )
                })}
                <li className="addTag">
                    <Link to="/money/createTag">
                        <Icon name="xinzeng" />
                        <span>新增</span>
                    </Link>
                </li>
            </ul>
        </Wrapper>
    )
}

export { TagList }