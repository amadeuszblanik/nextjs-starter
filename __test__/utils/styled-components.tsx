import React from 'react';
import { ThemeProvider } from 'styled-components';
import { Theme } from '../../src/app/settings/';
import renderer from 'react-test-renderer';

export const renderLayout = component => {
    return renderer.create(<ThemeProvider theme={Theme}>{component}</ThemeProvider>).toJSON();
};
