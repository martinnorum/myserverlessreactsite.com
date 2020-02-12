import React from 'react'
import { ThemeProvider } from "theme-ui";
import theme from '@rebass/preset'

export const wrapRootElement = ({ element }) => (
    <ThemeProvider theme={theme}>
        {element}
    </ThemeProvider>
)