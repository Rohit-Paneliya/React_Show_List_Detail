import React, { PropsWithChildren, createContext, useState } from "react";

export enum ThemeType {
    LIGHT,
    DARK
}

export const ThemeTypeContext = createContext<any>(ThemeType.LIGHT);

export const ThemeProvider = ({children}: PropsWithChildren<{}>)=> {

    const [themeType, setThemeType] = useState(ThemeType.LIGHT); // false - light, true - dark

    return (
        <ThemeTypeContext.Provider value={{themeType, setThemeType}}>
            {children}
        </ThemeTypeContext.Provider>
    )
}

export default ThemeTypeContext