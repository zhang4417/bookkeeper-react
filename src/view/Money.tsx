import React from "react";
import styled from "styled-components";
import Nav from "../components/Nav";

const Wrapper = styled.div`
    height:100vh;
    display:flex;
    flex-direction:column;
    justify-content:center;
`
const Main = styled.main`
    flex-grow:1
`

function Money() {
    return (
        <Wrapper>
            <Main>
                <h1>money</h1>
            </Main>
            <Nav />
        </Wrapper>
    )
}

export default Money