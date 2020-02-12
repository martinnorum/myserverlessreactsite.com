import React from 'react'
import { ThemeProvider } from "theme-ui";
import theme from 'gatsby-plugin-theme-ui'
export const wrapRootElement = ({ element }) => (
    <ThemeProvider>
        {element}
    </ThemeProvider>
)