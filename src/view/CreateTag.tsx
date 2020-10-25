import TagNav from "components/TagNav"
import { useTags } from "hooks/useTags"
import React from "react"
import { useHistory } from "react-router-dom"



function CreateTag() {
    const { tag, setTag, addTag } = useTags()
    const history = useHistory()
    const onReturn = () => {
        history.goBack()
    }
    const onCommit = (name: string) => {
        addTag(name, "")
    }
    return (
        <div>
            <TagNav title="新增标签" fn1={onReturn} fn2={onCommit}>
                <div>icon</div>
            </TagNav>
        </div>
    )
}

export { CreateTag }