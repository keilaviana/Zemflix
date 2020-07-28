import React from 'react'
import Menu from '../menu'
import Footer from '../Footer'
import styled from 'styled-components'

const Main = styled.main`
    background-color: var(--black);
    color: var(--white);
    flex:1;
    padding: 50px 5%;
`;

function PageDafault ({children}){
    return (
        <>
            <Menu/>

                <Main>
                    {children}
                </Main>
                
            <Footer/>
        </>
    )
}

export default PageDafault