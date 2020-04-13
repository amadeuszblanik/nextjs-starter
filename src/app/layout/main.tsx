import React from "react";
import {ThemeProvider} from "styled-components";
import {Theme} from "../settings";

interface LayoutProps {
    children: JSX.Element | JSX.Element[];
}

export class Main extends React.PureComponent<LayoutProps> {
    render() {
        const {children} = this.props;
        return (<ThemeProvider theme={Theme}>{children}</ThemeProvider>);
    }
}

