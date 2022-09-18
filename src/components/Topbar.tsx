import React, {ReactElement} from "react";
import styled from "styled-components";



import {Icon} from ".";
import { useEffectOnMount } from "../hooks";
import {breakpoints} from "../theme";



const TopBarContainer = styled.div`
    width: 100%;
    padding: 20px;
    display: flex;

    @media screen and (max-width: ${breakpoints.laptop.min + 21}px){
        display: none;
    }
`;


const IconButton = styled.div`
    background-color: ${(props: any) => props.theme.primary.light};
    padding: 5px 15px;
    cursor: pointer;
    margin: 10px 5px;
`

const IconContainer = styled.div`
    display: flex;
    align-items: center;
`;


const InputContainer = styled.div`
    display: flex;
    align-items: center;
    border: 1px solid ${(props: any) => props.theme.primary.light};
    margin-left: 70px;
    padding: 0px 20px;
    width: 471px;
`

const Input = styled.input`
    outline: none;
    border: none;
    line-height: 2;
    padding: 8px;
    flex: 1;
    background: transparent;
    margin-left: 10px;
    color: ${(props: any) => props.theme.text.main};
`


const Topbar: React.FC<{}> = ({}): ReactElement => {
    useEffectOnMount(() => {
        console.log("TopBar is mounted");
        return () => console.log("TopBar is unmounted");
    }, [])

    return (
        <TopBarContainer>
            <IconContainer>
                <IconButton>
                    <Icon name="prev" />
                </IconButton>
                <IconButton>
                    <Icon name="next" />
                </IconButton>
            </IconContainer>
            <InputContainer>
                <Icon name="search" />
                <Input autoComplete="off" type="text" name="search" />
            </InputContainer>
        </TopBarContainer>
    )
}



export default Topbar;
