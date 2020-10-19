import React from "react";
import Layout from "components/Layout";
import styled from "styled-components";

const CashFlow = styled.section`
    >ul{
        display:flex;
        justify-content:center;
        padding:5px 16px;
        >li{
            padding:5px 0;
            margin:3px 8px;
            position:relative;
            &.selected{
                &::after{
                    position:absolute;
                    content:"";
                    width:100%;
                    border:1px solid red;
                    bottom:0;
                    left:0;
                }
            }
        }
    }
`
const Output = styled.section`
    margin:8px 16px;
    padding:8px 16px;
    display:flex;
    background:#f60;
    border-radius:16px;
    justify-content:center;
    align-items:center;
    font-size:24px;
    >div{
        white-space:nowrap;
    }
    >input{
        width:100%;
        height:64px;
        outline:none;
        background:transparent;
        border:none;
        text-align:right;
        font-size:inherit;
    }
`
const Tags = styled.section`
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
        }
    }
`
const Notes = styled.section`
    padding:3px 0;
    margin:8px 16px;
    display:flex;
    justify-content:center;
    align-items:center;
    box-shadow:inset 0 -3px 3px rgb(225,225,225);
    >label{
        display:flex;
        justify-content:center;
        align-items:center;
            >span{
                white-space:nowrap;
                color:#333
             }
             >div{
                margin:0 5px;
                border-right:1px solid black;
                height:16px;
             }
            >.note{
                width:100%;
                height:32px;
                border:none;
            }
    }
    >.date{
        margin-left:16px;
        border:none;
    }
`
const Pad = styled.section`
padding:8px 0;
    >button{
        float:left;
        width:25%;
        height:56px;
        border:none;
        outline:none;
        &.ok{
            float:right;
            height:112px;
        }
        &.point{
            width:50%;
        }
    }
`

function Money() {
    return (
        <Layout>
            <CashFlow>
                <ul>
                    <li className="selected">支出</li>
                    <li>收入</li>
                </ul>
            </CashFlow>
            <Output>
                <div>工资</div>
                <input value="123" />
            </Output>
            <Tags>
                <ul>
                    <li>
                        "衣"
                    </li>
                    <li>
                        "食"
                    </li>
                    <li>
                        "住"
                    </li>
                    <li>
                        "行"
                    </li>
                    <li>
                        "玩"
                    </li>
                    <li>
                        "睡"
                    </li>
                </ul>
            </Tags>
            <Notes>
                <label>
                    <span>备注</span>
                    <div></div>
                    <input placeholder="请在这里输入备注" className="note" />
                </label>
                <input type="date" className="date" />
            </Notes>
            <Pad>
                <button>1</button>
                <button>2</button>
                <button>3</button>
                <button>C</button>
                <button>4</button>
                <button>5</button>
                <button>6</button>
                <button>←</button>
                <button>7</button>
                <button>8</button>
                <button>9</button>
                <button className="ok">OK</button>
                <button className="point">.</button>
                <button>0</button>
            </Pad>
        </Layout>
    )
}

export default Money