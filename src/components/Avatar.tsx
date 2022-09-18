import React, {ReactElement} from "react";
import styled from "styled-components";


import user from "../assets/images/udux_user.png";




interface IAvatar {
    width?: string;
    height?:string;
}

const Image = styled.img`
    width: ${(props: IAvatar) => props.width ?? '62px'};
    height: ${(props: IAvatar) => props.height ?? '62px'};
    border-radius: 50%;
`



const Avatar: React.FC<IAvatar> = ({width, height}): ReactElement => {
    return <Image width={width} height={height} src={user} alt="User" />
}



export default Avatar;