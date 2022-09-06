import React from "react";
import { ThemeProvider as EmotionThemeProvider } from "@emotion/react";
import normalTheme from "theme/normal.json";

interface ThemeProviderProps {
	children: React.ReactNode;
}

const ThemeProvider: React.FC<ThemeProviderProps> = ({
	children
}) => {
	return (
		<EmotionThemeProvider theme={normalTheme}>
			{children}
		</EmotionThemeProvider>
	)
}

export default ThemeProvider;