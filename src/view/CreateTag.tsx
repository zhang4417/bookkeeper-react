import Icon from "components/Icon"
import TagNav from "components/TagNav"
import { useTags } from "hooks/useTags"
import React, { useState } from "react"
import { useHistory } from "react-router-dom"
import styled from "styled-components"

const Wrapper = styled.div`
    display:flex;
    flex-wrap:wrap;
    overflow:none;
    >div{
        margin:16px;
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
`

const name = ["chongzhi", "gouwu", "jiaotong", "jucan", "linshi", "liping", "riyong", "xuexi", "yiliao", "yule", "zhusu", "dianhua", "dianying", "gongzi", "gupiao", "hongbao", "huoguo", "jiangjin", "jiansheng", "jiayou", "kouhong", "lvxing", "qishui", "shuiguo", "yifu", "yiner"]
function CreateTag() {
    const [selectedIcon, setSelectedIcon] = useState(name[0])
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
    return (
        <div>
            <TagNav title="新增标签" fn1={onReturn} fn2={onCommit}>
                <Wrapper>
                    {name.map((n) => {
                        return (
                            <div key={n} onClick={() => choiceIcon(n)} className={selectedIcon === n ? "selected" : undefined}>
                                <Icon name={n} />
                            </div>
                        )
                    })}
                </Wrapper>
            </TagNav>
        </div>
    )
}

export { CreateTag }