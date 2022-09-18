import React, {ReactElement} from "react";
import styled from "styled-components";



import {Avatar} from "./";
import {breakpoints} from "../theme";



interface ISidebarTop {
    display: boolean;
}

const SidebarTopContainer = styled.div`
    display: ${(props: any) => props.$display ? 'flex' : 'none'};
    width: 100%;
    padding: 20px;
    background-color: ${(props: any) => props.theme.primary.light};
    align-items: center;

    @media screen and (max-width: ${breakpoints.laptop.min + 21}px){
        display: ${(props: any) => props.$display ? 'none' : 'flex'}
    }

    & img {
        margin: 0px 20px;
    }

    & span {
        color: ${(props: any) => props.theme.text.main}
    }
`


const SidebarTop: React.FC<ISidebarTop> = ({display}): ReactElement => {
    return(
        <SidebarTopContainer $display={display}>
            <Avatar />
            <span>Hey! Aleem</span>
        </SidebarTopContainer>
    )
}


export default SidebarTop;