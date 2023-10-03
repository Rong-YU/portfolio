"use client";

import React, { useState, createContext, useLayoutEffect, useContext } from "react";
type Props = {
	children: React.ReactNode;
};
export const ThemeContext = createContext({ theme: "dark", setTheme() {} });

export default function ThemeProvider({ children }: Props) {
	const [theme, setTheme] = useState("dark");

	function toggleTheme() {
		setTheme(theme === "light" ? "dark" : "light");
	}
	useLayoutEffect(() => {
		if (theme === "light") {
			document.documentElement.classList.remove("dark-mode");
			document.documentElement.classList.add("light-mode");
		} else {
			document.documentElement.classList.remove("light-mode");
			document.documentElement.classList.add("dark-mode");
		}
	}, [theme]);

	const providerValue = {
		theme: theme,
		setTheme: toggleTheme,
	};
	return <ThemeContext.Provider value={providerValue}>{children}</ThemeContext.Provider>;
}

export const useTheme = () => {
	const context = useContext(ThemeContext);
	if (context === undefined) {
		throw new Error("this component must be wrapped in a ThemeProvider");
	}
	return context;
};
