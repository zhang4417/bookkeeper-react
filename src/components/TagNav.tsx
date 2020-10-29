import Icon from "components/Icon"
import { useToast } from "hooks/useToast"
import React, { useRef } from "react"
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
        margin:32px 0px;
        padding:5px;
        >input{
            margin-left:5px;
            flex-grow:1;
            height:32px;
            border:1px solid #eee;
        }
    }
`

function TagNav(props: any) {
    const inputRef = useRef<HTMLInputElement>(null)
    const { addToast } = useToast()
    const onCommit = () => {
        const value = inputRef.current!.value
        if (value === "") {
            addToast("标签名不能为空", 2000)
        } else {
            addToast("添加成功", 2000)
            props.fn2(value)
        }
    }
    const onReturn = () => {
        props.fn1()
    }
    return (
        <Wrapper>
            <ul>
                <li onClick={onReturn}>
                    <Icon name="left" />
                </li>
                <li>{props.title}</li>
                <li onClick={onCommit}>
                    <Icon name="confirm" />
                </li>
            </ul>
            <label>
                <span>标签</span>
                <input type="text" placeholder="请输入1-4个字符"
                    ref={inputRef} maxLength={4} />
            </label>
            {props.children}
        </Wrapper>
    )
}

export default TagNav