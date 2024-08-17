import { createContext, useState, useContext, useEffect, ReactNode } from "react";

interface DarkModeContextType {
    darkMode: boolean;
    toggleDarkMode: () => void;
}

interface DarkModeProviderProps {
    children: ReactNode;
}

export const DarkModeContext = createContext<DarkModeContextType | undefined>(undefined);

export const DarkModeProvider: React.FC<DarkModeProviderProps> = ({ children}) => {

    const [darkMode, setDarkMode] = useState<boolean>(() => {
        const savedTheme = localStorage.getItem('dark-mode');
        return savedTheme ? JSON.parse(savedTheme) : false;
    });

    useEffect(() => {
        localStorage.setItem('dark-mode', JSON.stringify(darkMode))
    }, [darkMode]);

    const toggleDarkMode = () => {
        setDarkMode(prevMode => !prevMode);
    };

    return(
        <DarkModeContext.Provider value={{ darkMode, toggleDarkMode }}>
            { children }
        </DarkModeContext.Provider>
    )
};

export const useDarkMode = () => {
    const context = useContext(DarkModeContext);
    if(context === undefined) {
        throw new Error('useDarkMode deve ser usado dentro de um provider');
    }
    return context;
}