import Icon from "components/Icon";
import { printContext } from "helper/context";
import { useTags } from "hooks/useTags";
import React, { useContext, useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Wrapper = styled.section`
    flex-grow:1;
    overflow-y:auto;
    overflow-x:hidden;
    margin:0 16px;
    padding:8px 0;
    >ul{
        display:flex;
        flex-wrap:wrap;
        justify-content:flex-start;
        >li{
            margin-top:8px;
            margin-bottom:8px;
            width:56px;
            display:flex;
            flex-direction:column;
            justify-content:center;
            align-items:center;
            padding:3px 0;
            >div,a>div{
                border-radius:14px;
                width:48px;
                height:48px;
                background:#eee;
                display:flex;
                justify-content: center;
                align-items:center;
                &.selected{
                    background:#f60;
                    color:white;
                    >svg{fill:white;}
                }
                >svg{
                    width:1.5em;
                    height:1.5em;
                }
            }
            >span,a>span{
                padding-top:8px;
                font-size:14px;
            }
            &.addTag{
                >a{
                    display:flex;
                    flex-direction:column;
                    align-items:center;
                }
            }
        }
    }
`
type TagList = {
    id: number, name: string, icon: string
}

function TagList() {
    const { tag } = useTags()
    const [selectedTag, setSelectedTag] = useState<TagList>(tag[0])
    const ulRef = useRef<HTMLUListElement>(null)
    const liRef: HTMLLIElement[] = []
    const { setPadTag } = useContext(printContext)

    const choiceTag = (tag: TagList) => {
        if (selectedTag.id !== tag.id) {
            setSelectedTag({ ...tag })
        }
    }
    useEffect(() => {
        setPadTag!(selectedTag)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [selectedTag])
    useEffect(() => {
        const ul = ulRef.current!
        const { width } = ul.getBoundingClientRect()
        const right = (width - 5 * 56) / 4 + 'px'
        ul.style.marginRight = "-" + right
        liRef.map(li => li.style.marginRight = right)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    return (
        <Wrapper>
            <ul ref={ulRef}>
                {tag.map((t, index) => {
                    return (
                        <li ref={(li) => liRef[index] = li!} key={t.id} onClick={() => choiceTag(t)}>
                            <div className={selectedTag.id === t.id ? "selected" : undefined}>
                                <Icon name={t.icon} />
                            </div>
                            <span>{t.name}</span>
                        </li>
                    )
                })}
                <li className="addTag">
                    <Link to="/money/createTag">
                        <div>
                            <Icon name="xinzeng" />
                        </div>
                        <span>新增</span>
                    </Link>
                </li>
            </ul>
        </Wrapper>
    )
}

export { TagList }