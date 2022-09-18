import React, {ReactElement, useRef, ReactNode} from "react";
import type {Ref} from "react";
import styled from "styled-components";
import {gsap} from "gsap";



import {useEffectOnMount} from "../../hooks";
import {Topbar, Icon, SidebarTop} from "../../components";
import jumbotronBg from "../../assets/images/udux_hero.png";
import omahLay from "../../assets/images/udux_omahlay.png";
import burna from "../../assets/images/burna.png";
import lojay from "../../assets/images/lojay.png";
import koffee from "../../assets/images/koffee.png";
import {breakpoints} from "../../theme";



interface IHome {}


interface ICard {
    image: string;
    title: string;
    content: string;
    contentBgColor: string;
    layoutColor: string;
    ref: Ref<null | ReactNode>
};


const HomeContainer = styled.div`
    width: 100%;
    min-height: 100vh;
    overflow-y: scroll;
    background-color: ${(props: any) => props.theme.primary.main};
`;


const MobileTop = styled(SidebarTop)`
`


const Jumbotron = styled.div`
    width: 100%;
    position: relative;
    background-image: url(${jumbotronBg});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    padding: 20px;
    height: 255px;
    margin-bottom: 20px;
`


const Tag = styled.img`
    position: absolute;
    bottom: 20px;
    right: 20px;

    @media screen and (max-width: ${breakpoints.mobile.max - 35}px){
        display: none;
    }
`


const Body = styled.div`
    padding: 20px;
    width: 100%;
    // display: flex;
    // flex-direction: column;
    // align-items: center;
    // justify-content: center;


    & h2 {
        color: ${(props: any) => props.theme.text.main};
        font-size: 28px;
        font-weight: 700;
        text-indent: 20px;
        margin: 20px auto;
    }
`;


const Cards = styled.div`
    width: 100%;
    margin-bottom: 50px;
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    grid-gap: 20px;
    overflow-x: scroll;
`;


const Card = styled.div`
    width: 226px;
    min-width: 200px;
    border: 1px solid ${(props: any) => props.theme.border.main};
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    padding: 10px;
    height: 285px;
    cursor: pointer;
`;


const CardImageLayout = styled.div`
    padding: 10px;
    padding-top: 3px;
    position: relative;
    top: -15px;
    width: 185px;
    border: 1px solid ${(props: any) => props.theme.border.main};
    background-color: ${(props: any) => props.theme.primary.main};
`;

const CardImage = styled.img`
    width: 100%;
`;

const CardContent = styled.div`
    background: ${(props: any) => props.$bgColor};
    position: absolute;
    bottom: 10px;
    left: 0;
    width: 100%;
    padding: 10px;

    & h3 {
        font-size: 16px;
        font-weight: 700;
        color: ${(props: any) => props.theme.text.light};
        margin-bottom: 10px;
    }

    & p {
        font-size: 10px;
        font-weight: 500;
        color: ${(props: any) => props.theme.text.main};
        letter-spacing: 0.04em;
    }
`;

const CardBody = styled.div`
    background: ${(props: any) => props.bgColor};
    position: absolute;
    top: 30px;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
`


const Home: React.FC<IHome> = ({}): ReactElement => {
    useEffectOnMount(() => {
        console.log("Home is mounted");
        return () => console.log("Home is unmounted");
    }, [])
    const onOne = useRef(null);
    const onTwo = useRef(null);
    const onThree = useRef(null);
    const onFour = useRef(null);
    const onFive = useRef(null);
    const onSix = useRef(null);
    const onSeven = useRef(null);
    const onEight = useRef(null);
    const onNine = useRef(null);
    const onTen = useRef(null);
    const onEleven = useRef(null);
    const onTwelve = useRef(null);

    useEffectOnMount(() => {
        gsap.fromTo(onOne.current, 1, { x: -100 }, { x: 0, yoyo: true, repeat: 0 });
        gsap.fromTo(onTwo.current, 1.25, { x: -100 }, { x: 0, yoyo: true, repeat: 0 });
        gsap.fromTo(onThree.current, 1.5, { x: -100 }, { x: 0, yoyo: true, repeat: 0 });
        gsap.fromTo(onFour.current, 1.75, { x: -100 }, { x: 0, yoyo: true, repeat: 0 });
        gsap.fromTo(onFive.current, 2, { x: -100 }, { x: 0, yoyo: true, repeat: 0 });
        gsap.fromTo(onSix.current, 2.25, { x: -100 }, { x: 0, yoyo: true, repeat: 0 });

        gsap.fromTo(onSeven.current, 1, { x: -100 }, { x: 0, yoyo: true, repeat: 0 });
        gsap.fromTo(onEight.current, 1.25, { x: -100 }, { x: 0, yoyo: true, repeat: 0 });
        gsap.fromTo(onNine.current, 1.5, { x: -100 }, { x: 0, yoyo: true, repeat: 0 });
        gsap.fromTo(onTen.current, 1.75, { x: -100 }, { x: 0, yoyo: true, repeat: 0 });
        gsap.fromTo(onEleven.current, 2, { x: -100 }, { x: 0, yoyo: true, repeat: 0 });
        gsap.fromTo(onTwelve.current, 2.25, { x: -100 }, { x: 0, yoyo: true, repeat: 0 });
    }, [])

    const cards: Array<ICard> = [
        {
            image: burna,
            title: "Daily Vibes 1",
            content: "Burna Boy, Oxlade, Davido, Tems Wizkid, Tiwa Savage.....",
            contentBgColor: "linear-gradient(89.79deg, #AB491C -19.39%, #DDAE45 123.38%)",
            layoutColor: "linear-gradient(89.79deg, #AD4C1D -19.39%, #F6B726 123.38%)",
            ref: onOne
        },
        {
            image: lojay,
            title: "Daily Vibes 2",
            content: "Lojay, Oxlade, Amaa Rae, Rema, Omah Lay, SGawd....",
            contentBgColor: "linear-gradient(89.79deg, #C61522 -19.39%, #030304 123.38%)",
            layoutColor: "linear-gradient(89.79deg, #C61522 -19.39%, #030304 123.38%)",
            ref: onTwo
        },
        {
            image: koffee,
            title: "Daily Vibes 3",
            content: "Koffee, Chris Brown, WSTRN, Drake, Future, Burna Boy",
            contentBgColor: "linear-gradient(89.79deg, #204F9D -19.39%, #ADC0D1 123.38%)",
            layoutColor: "linear-gradient(89.79deg, #3D66A8 -19.39%, #91AAC7 123.38%)",
            ref: onThree
        },
        {
            image: burna,
            title: "Daily Vibes 1",
            content: "Burna Boy, Oxlade, Davido, Tems Wizkid, Tiwa Savage.....",
            contentBgColor: "linear-gradient(89.79deg, #AB491C -19.39%, #DDAE45 123.38%)",
            layoutColor: "linear-gradient(89.79deg, #AD4C1D -19.39%, #F6B726 123.38%)",
            ref: onFour
        },
        {
            image: lojay,
            title: "Daily Vibes 2",
            content: "Lojay, Oxlade, Amaa Rae, Rema, Omah Lay, SGawd....",
            contentBgColor: "linear-gradient(89.79deg, #C61522 -19.39%, #030304 123.38%)",
            layoutColor: "linear-gradient(89.79deg, #C61522 -19.39%, #030304 123.38%)",
            ref: onFive
        },
        {
            image: koffee,
            title: "Daily Vibes 3",
            content: "Koffee, Chris Brown, WSTRN, Drake, Future, Burna Boy",
            contentBgColor: "linear-gradient(89.79deg, #204F9D -19.39%, #ADC0D1 123.38%)",
            layoutColor: "linear-gradient(89.79deg, #3D66A8 -19.39%, #91AAC7 123.38%)",
            ref: onSix
        },
    ]
    const cardss: Array<ICard> = [
        {
            image: burna,
            title: "Daily Vibes 1",
            content: "Burna Boy, Oxlade, Davido, Tems Wizkid, Tiwa Savage.....",
            contentBgColor: "linear-gradient(89.79deg, #AB491C -19.39%, #DDAE45 123.38%)",
            layoutColor: "linear-gradient(89.79deg, #AD4C1D -19.39%, #F6B726 123.38%)",
            ref: onSeven
        },
        {
            image: lojay,
            title: "Daily Vibes 2",
            content: "Lojay, Oxlade, Amaa Rae, Rema, Omah Lay, SGawd....",
            contentBgColor: "linear-gradient(89.79deg, #C61522 -19.39%, #030304 123.38%)",
            layoutColor: "linear-gradient(89.79deg, #C61522 -19.39%, #030304 123.38%)",
            ref: onEight
        },
        {
            image: koffee,
            title: "Daily Vibes 3",
            content: "Koffee, Chris Brown, WSTRN, Drake, Future, Burna Boy",
            contentBgColor: "linear-gradient(89.79deg, #204F9D -19.39%, #ADC0D1 123.38%)",
            layoutColor: "linear-gradient(89.79deg, #3D66A8 -19.39%, #91AAC7 123.38%)",
            ref: onNine
        },
        {
            image: burna,
            title: "Daily Vibes 1",
            content: "Burna Boy, Oxlade, Davido, Tems Wizkid, Tiwa Savage.....",
            contentBgColor: "linear-gradient(89.79deg, #AB491C -19.39%, #DDAE45 123.38%)",
            layoutColor: "linear-gradient(89.79deg, #AD4C1D -19.39%, #F6B726 123.38%)",
            ref: onTen
        },
        {
            image: lojay,
            title: "Daily Vibes 2",
            content: "Lojay, Oxlade, Amaa Rae, Rema, Omah Lay, SGawd....",
            contentBgColor: "linear-gradient(89.79deg, #C61522 -19.39%, #030304 123.38%)",
            layoutColor: "linear-gradient(89.79deg, #C61522 -19.39%, #030304 123.38%)",
            ref: onEleven
        },
        {
            image: koffee,
            title: "Daily Vibes 3",
            content: "Koffee, Chris Brown, WSTRN, Drake, Future, Burna Boy",
            contentBgColor: "linear-gradient(89.79deg, #204F9D -19.39%, #ADC0D1 123.38%)",
            layoutColor: "linear-gradient(89.79deg, #3D66A8 -19.39%, #91AAC7 123.38%)",
            ref: onTwelve
        },
    ]

    return (
        <HomeContainer>
            <MobileTop display={false} />
            <Topbar />
            <Jumbotron>
                <Icon name="logo" />
                <Tag src={omahLay} alt="Omah Lay" />
            </Jumbotron>
            <Body>
                <h2>Welcome Back!</h2>
                <Cards>
                    {
                        cards.map(({image, title, content, contentBgColor, layoutColor, ref}, i) => (
                            <Card key={i} ref={ref}>
                                <CardBody bgColor={layoutColor}>
                                    <CardImageLayout>
                                        <CardImage src={image} alt="title" />
                                    </CardImageLayout>
                                </CardBody>
                                <CardContent $bgColor={contentBgColor}>
                                    <h3>{title}</h3>
                                    <p>{content}</p>
                                </CardContent>
                            </Card>
                        ))
                    }
                </Cards>
                <h2>Cheers to the Weekend</h2>
                <Cards>
                    {
                        cardss.map(({image, title, content, contentBgColor, layoutColor, ref}, i) => (
                            <Card key={i} ref={ref}>
                                <CardBody bgColor={layoutColor}>
                                    <CardImageLayout>
                                        <CardImage src={image} alt="title" />
                                    </CardImageLayout>
                                </CardBody>
                                <CardContent $bgColor={contentBgColor}>
                                    <h3>{title}</h3>
                                    <p>{content}</p>
                                </CardContent>
                            </Card>
                        ))
                    }
                </Cards>
            </Body>
        </HomeContainer>
    )
}


export default Home;