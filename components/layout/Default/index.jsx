import React from 'react';
import styled from 'styled-components';
import client from './index.client.js';
import Header from '../../primitives/Header';
import Main from '../../primitives/Main';
import ThemeProvider from '../../../theme';
import Menu from '../Menu';
import H1 from '../../primitives/H1';
import Span from '../../primitives/Span';
import Script from '../../ui/Script';

const StyledHeader = styled(Header)`
    display: flex;
    justify-content: center;
    margin: calc(${(props) => props.theme.spaceUnit} * 2) 0;
`;

const StyledMain = styled(Main)`
    width: 90vw;
    max-width: 50rem;
    margin: calc(${(props) => props.theme.spaceUnit} * 2) auto;
`;

const StyledH1 = styled(H1)`
    text-align: center;
    margin-bottom: calc(${(props) => props.theme.spaceUnit} * 2);
`;

const StyledFooter = styled(Main)`
    font-family: ${(props) => props.theme.type.fontMono};
    font-size: 70%;
    width: 90vw;
    max-width: 50rem;
    margin: calc(${(props) => props.theme.spaceUnit} * 4) auto;
    text-align: center;
`;

const JsPoweredYear = styled(Span)`
    .no-js & {
        /** only with js enabled */
        display: none;
    }
`;

export default function Default({ head, title, children, active }) {
    return (
        <ThemeProvider>
            <html lang="en" className="no-js">
                {head}
                <body>
                    <StyledHeader>
                        <Menu active={active} />
                    </StyledHeader>
                    {title && <StyledH1>{title}</StyledH1>}
                    <StyledMain>{children}</StyledMain>
                    <StyledFooter>
                        Hey, this is a footer
                        <JsPoweredYear>
                            {' '}
                            and we are in <Span id="currentYear"></Span>
                        </JsPoweredYear>
                    </StyledFooter>
                    <Script>{client}</Script>
                </body>
            </html>
        </ThemeProvider>
    );
}
