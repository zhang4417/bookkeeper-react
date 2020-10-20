import React from "react";
import styled from "styled-components";

const Wrapper = styled.section`
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

function Tags() {
    return (
        <Wrapper>
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
        </Wrapper>
    )
}

export { Tags }