interface ITheme {
    primary: {
        main: string;
        light: string;
    },
    secondary: {
        main: string;
    },
    text: {
        light: string;
        main: string;
        dark: string;
    },
    border: {
        main: string;
    }
}


interface IBreakpoints {
    mobile: {
        min: number;
        max: number;
    },
    tablet: {
        min: number;
        max: number;
    },
    laptop: {
        min: number;
        max: number;
    },
    desktop: {
        min: number;
        max: number;
    },
    largeDesktop: {
        min: number;
        max: number;
    }
}


export const theme: ITheme =  {
    primary: {
        main: "#000000",
        light: "#0F0F0F"
    },
    secondary: {
        main: "#FBBA12"
    },
    text: {
        light: "#ffffff",
        main: "#D9D9D9",
        dark: "#282828"
    },
    border: {
        main: "#707070"
    }
}



export const breakpoints: IBreakpoints = {
    mobile: {
        min: 320,
        max: 480
    },
    tablet: {
        min: 481,
        max: 768
    },
    laptop: {
        min: 769,
        max: 1024
    },
    desktop: {
        min: 1025,
        max: 1200
    },
    largeDesktop: {
        min: 1201,
        max: 2160
    }
} 