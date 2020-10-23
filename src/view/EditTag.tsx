import Icon from "components/Icon"
import React from "react"
import { Link } from "react-router-dom"
import styled from "styled-components"


const Wrapper = styled.div`
    height:100vh;
    display:flex;
    flex-direction:column;
    >ul{
        display:flex;
        justify-content: space-between;
        padding:3px 5px;
        >li{
            display:flex;
            align-items: center;
            line-height:32px;
            >a{
                display:flex;
                align-items: center;
                >svg{
                    width:1.5em;
                    height:1.5em;
                    fill:#f60;
                }
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
    >div{
        display:flex;
        justify-content: center;
        >button{
            outline:none;
            background:#f60;
            border:none;
            padding:16px;
            border-radius:8px;
        }
    }
`

function EditTag() {
    return (
        <Wrapper>
            <ul>
                <li>
                    <Link to="/tags">
                        <Icon name="left" />
                    </Link>
                </li>
                <li>编辑标签</li>
                <li>
                    <Link to="/tags">
                        <Icon name="confirm" />
                    </Link>
                </li>
            </ul>
            <label>
                <span>标签</span>
                <input></input>
            </label>
            <div>
                <button>删除标签</button>
            </div>
        </Wrapper>
    )
}

export default EditTag