import React, {
  createContext,
  ReactNode,
  TextareaHTMLAttributes,
  useState,
} from 'react';

export const themes = {
  light: 'light',
  dark: 'dark',
  cupcake: 'cupcake',
  bumblebee: 'bumblebee',
  emerald: 'emerald',
  corporate: 'corporate',
  synthwave: 'synthwave',
  retro: 'retro',
  cyberpunk: 'cyberpunk',
  valentine: 'valentine',
  halloween: 'halloween',
  garden: 'garden',
  forest: 'forest',
  aqua: 'aqua',
  lofi: 'lofi',
  pastel: 'pastel',
  fantasy: 'fantasy',
  wireframe: 'wireframe',
  black: 'black',
  luxery: 'luxery',
  dracula: 'dracula',
  cmyk: 'cmyk',
  autum: 'autum',
  business: 'business',
  acid: 'acid',
  lemonade: 'lemonade',
  night: 'night',
  coffee: 'coffee',
  winter: 'winter',
};

interface init {
  themes: typeof themes;
  themeState: string;
  setThemeState: undefined | Function;
}

const initial = {
  themes: themes,
  themeState: themes.cupcake,
  setThemeState: undefined,
};

export const themeContext = createContext(initial);

export default function ThemeProvider({ children }: { children: ReactNode }) {
  const [themeState, setThemeState] = useState(initial);
  const value = {
    themes,
    themeState,
    setThemeState,
  };

  return (
    <themeContext.Provider value={value}>{children}</themeContext.Provider>
  );
}
