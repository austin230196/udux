import React, {ReactElement} from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";


import {SidebarTop, Icon} from "./";
import { useEffectOnMount } from "../hooks";
import bg from "../assets/svgs/sidebarbg.svg";
import {breakpoints} from "../theme";




interface INavItem {
    icon: string;
    title: string;
    path: string;
}


const SidebarContainer = styled.div`
    width: 100%;
    height: 100vh;
    background: url(${bg}), ${(props: any) => props.theme.primary.main};
    display: flex;
    flex-direction: column;
    overflow-y: scroll !important;

    @media screen and (max-width: ${breakpoints.laptop.min + 21}px){
        display: none;
    }
`;


const NavItems = styled.ul`
    width: calc(100% - 20px);
    margin: 0;
    margin-left: 20px;
    margin-top: 10px;
    padding: 20px;
    list-style-type: none;
`


const NavItem = styled.li`
    // color: ${(props: any) => props.theme.text.main};
    font-weight: 600;
    font-size: 16px;
    line-height: 2;
    width: 100%;
    padding: 10px 0px;


    & a {
        text-decoration: none;
        color: ${(props: any) => props.active ? props.theme.secondary.main : props.theme.text.main};
        font-weight: 600;
        font-size: 16px;
        letter-spacing: 1px;
        display: flex;
        align-items: center;

        &:hover {
            color: ${(props: any) => props.theme.secondary.main};
        }    

        & svg {
            color: ${(props: any) => props.theme.primary.main} !important;
        }

        & span {
            margin: 0px 10px;
        }
    }
`;


const Separator = styled.div`
    background-color: #282828;
    width: 100%;
    height: 1px;
    margin: 15px 0px;
`


const Playlist = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px 0px;
    // padding-left: 40px;
    // margin-top: 20px;

    & a {
        text-decoration: none;
        color: ${(props: any) => props.active ? props.theme.secondary.main : props.theme.text.main};
        font-weight: 600;
        font-size: 16px;
        letter-spacing: 1px;
        display: flex;
        align-items: center;

        &:hover {
            color: ${(props: any) => props.theme.secondary.main};
        }    

        & svg {
            color: ${(props: any) => props.theme.primary.main} !important;
        }

        & span {
            margin: 0px 10px;
        }
    }
`;

const Songs = styled.div`
    display: flex;
    flex-direction: column;
    overflow-y: scroll;
`


const Song = styled.div`
    color: ${(props: any) => props.theme.text.main};
    font-weight: 500;
    line-height: 2;
    height: 100%;
    padding: 10px 0px;
    font-size: 14px;
    cursor: pointer;
`


const topNavItems: Array<INavItem> = [
    {
        icon: "home",
        title: "Home",
        path: "/"
    },
    {
        icon: "discover",
        title: "Discover",
        path: "/discover"
    }
]

const bottomNavItems: Array<INavItem> = [
    {
        icon: "library",
        title: "Your Library",
        path: "/library"
    },
    {
        icon: "liked songs",
        title: "Liked Songs",
        path: "/songs"
    },
    {
        icon: "played",
        title: "Recently Played",
        path: "/played"
    },
    {
        icon: "create playlist",
        title: "Create Playlist",
        path: "/playlist"
    },
]

const songs: Array<string> = ["Riffs & Runs", "African Heat", "Running out of Playlist na....", "Saturday was a Good Day", "Gidi Nights","Riffs & Runs", "African Heat"];


const Sidebar: React.FC<{}> = ({}): ReactElement => {
    useEffectOnMount(() => {
        console.log('Sidebar is mounted');
        return () => console.log("Sidebar is unmounted");
    }, [])


    return (
        <SidebarContainer>
            <SidebarTop display={true} />
            <NavItems>
                {
                    topNavItems.map(({icon, title, path}, i) => (
                        <NavItem key={i}>
                            <NavLink to={path}>
                                <Icon name={icon} /> <span>{title}</span>
                            </NavLink>
                        </NavItem>
                    ))
                }
                <Separator />
                {
                    bottomNavItems.map(({icon, title, path}, i) => (
                        <NavItem key={i} active={title === 'Liked Songs' ? true : false}>
                            <NavLink to={path}>
                                <Icon name={icon} /> <span>{title}</span> {title === 'Liked Songs' && <Icon name="sound" />}
                            </NavLink>
                        </NavItem>
                    ))
                }
            </NavItems>
            <NavItems>
                <Playlist>
                    <NavLink to="/playlist">
                        <Icon name="playlist" /> <span>My Playlists</span>
                    </NavLink>
                    <Icon name="search" />
                </Playlist>
                <Separator />
                <Songs>
                    {
                        songs.map((el, i) => (
                            <Song key={i}>
                                {el}
                            </Song>
                        ))
                    }
                </Songs>
            </NavItems>
        </SidebarContainer>
    )
}


export default Sidebar;