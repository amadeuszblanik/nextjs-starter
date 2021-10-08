import {Theme, ThemeSingle} from "./theme.types";

declare module "styled-components" {
    export interface DefaultTheme extends Theme {}
}


const dark: ThemeSingle = {
    text: '#fff',
    background: '#000',
}

const light: ThemeSingle = {
    text: '#000',
    background: '#fff',
}

const theme: Theme = {
    dark,
    light,
}

export default theme;
