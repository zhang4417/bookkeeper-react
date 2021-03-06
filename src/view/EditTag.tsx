import Icon from "components/Icon"
import { useTags } from "hooks/useTags"
import { useToast } from "hooks/useToast"
import React, { useRef } from "react"
import { useHistory, useParams } from "react-router-dom"
import styled from "styled-components"


const Wrapper = styled.div`
    height:100vh;
    display:flex;
    flex-direction:column;
    background:white;
    >ul{
        display:flex;
        justify-content: space-between;
        padding:3px 5px;
        >li{
            display:flex;
            align-items: center;
            line-height:32px;
                >svg{
                    width:1.5em;
                    height:1.5em;
                    fill:#f60;
            
            }
        }    
    }
    >label{
        display:flex;
        align-items:center;
        margin:16px 0px;
        padding:16px 5px;
        >input{
            margin-left:5px;
            flex-grow:1;
            height:32px;
            border:1px solid #eee;
        }
    }
    >div{
        display:flex;
        justify-content: center;
        margin:16px 0;
        >button{
            outline:none;
            background:#f60;
            border:none;
            padding:16px;
            border-radius:8px;
        }
    }
`
type Params = {
    id: string
}
type TagList = {
    id: number, name: string, icon: string
}
function EditTag() {
    const { id } = useParams<Params>()
    const history = useHistory()
    const { findTag, changeTag, deleteTag } = useTags()
    const _id = parseInt(id)
    const navTag = findTag(_id)
    const inputRef = useRef<HTMLInputElement>(null)
    const { addToast } = useToast()
    const onChangeTag = () => {
        if (navTag) {
            const value = inputRef.current!.value
            if (value === "") {
                addToast("标签名不能为空", 2000)
            } else {
                changeTag(_id, value)
                history.goBack()
            }
        }
    }
    const onReturn = () => {
        history.goBack()
    }
    const onDeleteTag = () => {
        deleteTag(_id)
    }
    return (
        <Wrapper>
            <ul>
                <li onClick={onReturn}>
                    <Icon name="left" />
                </li>
                <li>编辑标签</li>
                <li onClick={onChangeTag}>
                    <Icon name="confirm" />
                </li>
            </ul>
            {navTag ? (
                <>
                    <label>
                        <span>标签</span>
                        <input defaultValue={navTag.name} ref={inputRef} maxLength={4} />
                    </label>
                    <div >
                        <button onClick={onDeleteTag}>删除标签</button>
                    </div>
                </>
            ) : (
                    <div>标签删除成功</div>
                )
            }
        </Wrapper>
    )
}

export default EditTag