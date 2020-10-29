import React from "react";
import Layout from 'components/Layout';
import { useTags } from "hooks/useTags";
import styled from "styled-components";
import Icon from "components/Icon";
import { Link } from "react-router-dom";

const Wrapper = styled.ul`
    overflow-y:inherit;
    >li{
        margin:0 5px;
        border-bottom:1px solid #eee;
        >a{
            height:48px;
            display:flex;
            justify-content: flex-start;
            align-items:center;
            >svg{
                height:1.3em;
                width:1.3em;
                &:nth-child(1){

                    margin-left:8px;
                }
                &:nth-child(2){
                    margin-left:auto;
                    fill:#f60;
                }
            }
        }
    }
`
function Tags() {
    const { tag } = useTags()
    return (
        <Layout>
            <Wrapper>
                {tag.map((t) => {
                    return (
                        <li key={t.id}>
                            <Link to={"/tags/" + t.id}>
                                {t.name}
                                <Icon name={t.icon} />
                                <Icon name="right" />
                            </Link>
                        </li>)
                })}
            </Wrapper>
        </Layout>
    )
}

export default Tags