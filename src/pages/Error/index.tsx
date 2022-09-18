import React, {ReactElement} from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";


import { useEffectOnMount } from "../../hooks";



const ErrorContainer = styled.div`
    background-color: ${(props: any) => props.theme.primary.main};
    width: 100%;
    height: 100%;

    & h1 {
        color: ${(props: any) => props.theme.secondary.main};
        text-align: center;
        font-weight: 500;
        letter-spacing: 0.6px;
        margin-top: 100px;
        font-size: 20px;
        line-height: 2;
        margin-bottom: 30px;
    }

    & a {
        text-decoration: none;
        border: 1px solid ${(props:any) => props.theme.secondary.main};
        color: ${(props:any) => props.theme.secondary.main};
        font-size: 14px;
        padding: 15px 40px;
        margin-left: 100px;
        border-radius: 8px;

        &:hover {
            background-color: rgba(0,0,0,.3);
        }
    }

`



const Error: React.FC<{}> = ({}): ReactElement => {
    useEffectOnMount(() => {
        console.log("Error page mmounted");
        return () => console.log("Error page unmounted");
    }, [])

    return (
        <ErrorContainer>
            <h1>Oops! <br /> You navigated to a wrong page</h1>
            <Link to="/">Go back home</Link>
        </ErrorContainer>
    )
}



export default Error;