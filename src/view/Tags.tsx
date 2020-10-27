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
            justify-content: space-between;
            align-items:center;
            >svg{
                height:1.3em;
                width:1.3em;
            }
        }
    }
`
function Tags() {
    const { tag } = useTags()
    console.log(tag)
    return (
        <Layout>
            <Wrapper>
                {tag.map((t) => {
                    return (
                        <li key={t.id}>
                            <Link to={"/tags/" + t.id}>
                                {t.id}{t.name}
                                <Icon name="right" />
                            </Link>
                        </li>)
                })}
            </Wrapper>
        </Layout>
    )
}

export default Tags