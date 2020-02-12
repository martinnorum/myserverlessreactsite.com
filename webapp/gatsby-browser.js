import React from 'react'
import { ThemeProvider } from "theme-ui";

export const wrapRootElement = ({ element }) => (
    <ThemeProvider>
        {element}
    </ThemeProvider>
)