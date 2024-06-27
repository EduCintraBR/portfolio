"use client"

import { Theme } from '@/lib/types';
import React, { createContext, useContext, useEffect, useState } from 'react'

type ThemeContextProviderProps = {
    children: React.ReactNode
}
type ThemeContextType = {
    theme: Theme,
    toggleTheme: () => void
}
  
const ThemeContext = createContext<ThemeContextType | null>(null);

export default function ThemeContextProvider({
    children
} : ThemeContextProviderProps) {
    const [theme, setTheme] = useState<Theme>("light");

    useEffect(() => {
        const localTheme = window.localStorage.getItem("theme") as Theme | null
    
        if (localTheme) {
            setTheme(localTheme)
            document.documentElement.classList.add(localTheme);
        } else {
            const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
            const defaultTheme = prefersDark ? 'dark' : 'light';
            setTheme(defaultTheme);
            document.documentElement.classList.add(defaultTheme);
        }
      }, [])

    const toggleTheme = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light';
        setTheme(newTheme);
        localStorage.setItem('theme', newTheme);
        document.documentElement.classList.remove('light', 'dark');
        document.documentElement.classList.add(newTheme);
    }
  
    return <ThemeContext.Provider value={{theme, toggleTheme}}>{children}</ThemeContext.Provider>
}

export function useTheme() {
    const context = useContext(ThemeContext)

    if (context === null) {
        throw new Error("useTheme must be used within a ThemeContextProvider")
    }

    return context
}
