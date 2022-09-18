import React, {ReactElement} from "react";
import {NavLink} from "react-router-dom";
import styled from "styled-components";




import { useEffectOnMount } from "../hooks";
import bg from "../assets/svgs/sidebarbg.svg";
import {Icon} from "./";
import {breakpoints} from "../theme";



interface IBottomLink {
    icon: string;
    path: string;
}


const bottomLinks: Array<IBottomLink> = [
    {
        icon: "home",
        path: "/"
    },
    {
        icon: "discover",
        path: "/discover"
    },
    {
        icon: "library",
        path: "/library"
    },
    {
        icon: "playlist",
        path: "/playlist"
    },
]

const BottomNavContainer = styled.div`
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    background: url(${bg}), ${(props: any) => props.theme.primary.main};
    display: none;
    align-items: center;
    justify-content: space-around;
    z-index: 1000;

    @media screen and (max-width: ${breakpoints.laptop.min + 21}px){
        display: flex;
    }

`

const BottomIcon = styled.div`
    padding: 20px;
    height: 100%;
`



const BottomNav: React.FC<{}> = ({}): ReactElement => {
    useEffectOnMount(() => {
        console.log("BottomNav is mounted");
        return () => console.log("BottomNav is unmounted");
    }, [])


    return (
        <BottomNavContainer>
            {
                bottomLinks.map(({icon, path}, i) => (
                    <NavLink to={path} key={i}>
                        <BottomIcon>
                            <Icon name={icon} />
                        </BottomIcon>
                    </NavLink>
                ))
            }
        </BottomNavContainer>
    )
}


export default BottomNav;