import React, { createContext, useContext, useState } from 'react';
import { TwitterThemeNames, TwitterThemePrimary } from './themeNames';

interface TwitterThemeContextProps {
  twitterTheme: TwitterThemeNames;
  twitterPrimaryTheme: TwitterThemePrimary;
  setTwitterTheme: (theme: TwitterThemeNames) => void;
  setTwitterPrimaryTheme: (primaryTheme: TwitterThemePrimary) => void;
}

const TwitterThemeContext = createContext<TwitterThemeContextProps | undefined>(undefined);

export const TwitterThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [twitterTheme, setTwitterTheme] = useState<TwitterThemeNames>(TwitterThemeNames.LightsOut)
  const [twitterPrimaryTheme, setTwitterPrimaryTheme] = useState<TwitterThemePrimary>(TwitterThemePrimary.Blue)

  return (
    <TwitterThemeContext.Provider
      value={{ twitterTheme, twitterPrimaryTheme, setTwitterTheme, setTwitterPrimaryTheme }}
    >
      <div className={`${twitterTheme} ${twitterPrimaryTheme}`}>
        {children}
      </div>
    </TwitterThemeContext.Provider>
  );
};

export const useTwitterThemeContext = () => {
  const context = useContext(TwitterThemeContext);
  if (!context) {
    throw new Error('useTwitterThemeContext must be used within a TwitterThemeProvider');
  }
  return context;
};
