import React from 'react';
import config from "./config.json";

type ThemeContextType = {
    theme: string;
    setTheme: (value: string) => void;
};

export const ThemeContext = React.createContext<ThemeContextType | undefined>(undefined);
// @ts-ignore
const {primaryTheme, secondaryTheme} = config;

export const ThemeProvider = ({children}: any) => {
    const [theme, setTheme] = React.useState(
        secondaryTheme
    );
    React.useEffect(() => {
        const currentTheme = primaryTheme;
        setTheme(currentTheme);
        sessionStorage.setItem('theme', currentTheme);
    }, []);


    return (
        <ThemeContext.Provider value={{theme, setTheme}}>
            {children}
        </ThemeContext.Provider>
    );
}

export const useTheme = () => React.useContext(ThemeContext);