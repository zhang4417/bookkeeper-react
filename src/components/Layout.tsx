import React from "react";
import styled from "styled-components";
import Nav from "components/Nav";


const Wrapper = styled.div`
    height:100vh;
    display:flex;
    flex-direction:column;
    justify-content:center;
`
const Main = styled.main`
    flex-grow:1;
    display:flex;
    flex-direction:column;
    overflow-y:auto;
`

function Layout(props: any) {
    return (
        <Wrapper>
            <Main>
                {props.children}
            </Main>
            <Nav />
        </Wrapper>
    )
}

export default Layout