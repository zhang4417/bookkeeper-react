import Icon from "components/Icon"
import TagNav from "components/TagNav"
import { useTags } from "hooks/useTags"
import React, { useEffect, useRef, useState } from "react"
import { useHistory } from "react-router-dom"
import styled from "styled-components"

const Wrapper = styled.div`
    margin:8px 16px;
    >ul{
        display:flex;
        flex-wrap:wrap;
        >li{
        margin-top:8px;
        margin-bottom:8px;
        border-radius:8px;
        width:48px;
        height:48px;
        background:#eee;
        display:flex;
        justify-content:center;
        align-items:center;
        &.selected{
            background:#f60;
            >svg{
                fill:white
            }
        }
    }
    }
`

const name = ["chongzhi", "gouwu", "jiaotong", "jucan", "linshi", "liping", "riyong", "xuexi", "yiliao", "yule", "zhusu", "dianhua", "dianying", "gongzi", "gupiao", "hongbao", "huoguo", "jiangjin", "jiansheng", "jiayou", "kouhong", "lvxing", "qishui", "shuiguo", "yifu", "yiner"]
function CreateTag() {
    const [selectedIcon, setSelectedIcon] = useState(name[0])
    const ulRef = useRef<HTMLUListElement>(null)
    const liRef: HTMLLIElement[] = []
    const { addTag } = useTags()
    const history = useHistory()
    const onReturn = () => {
        history.goBack()
    }
    const onCommit = (name: string) => {
        addTag(name, selectedIcon)
    }
    const choiceIcon = (name: string) => {
        if (selectedIcon !== name) setSelectedIcon(name)
    }
    useEffect(() => {
        const ul = ulRef.current!
        const { width } = ul.getBoundingClientRect()
        const right = (width - 5 * 48) / 4 + 'px'
        liRef.map(li => li.style.marginRight = right)
        ul.style.marginRight = "-" + right
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    return (
        <div>
            <TagNav title="新增标签" fn1={onReturn} fn2={onCommit}>
                <Wrapper>
                    <ul ref={ulRef}>
                        {name.map((n, index) => {
                            return (
                                <li ref={li => liRef[index] = li!} key={n} onClick={() => choiceIcon(n)} className={selectedIcon === n ? "selected" : undefined}>
                                    <Icon name={n} />
                                </li>
                            )
                        })}
                    </ul>
                </Wrapper>
            </TagNav>
        </div>
    )
}

export { CreateTag }