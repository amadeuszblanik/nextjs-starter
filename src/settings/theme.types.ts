export enum ThemeVariants {
    Dark = 'dark',
    Light = 'light'
}

export interface ThemeSingle {
    text: string;
    background: string;
}

export type Theme = {
    [key in ThemeVariants]: ThemeSingle;
};
