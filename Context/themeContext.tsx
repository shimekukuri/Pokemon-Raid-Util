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

export const themeContext = createContext<any>(null);

export default function ThemeProvider({ children }: { children: ReactNode }) {
  const [themeState, setThemeState] = useState();
  const meep = {
    themes,
    themeState,
    setThemeState,
  };

  return <themeContext.Provider value={meep}>{children}</themeContext.Provider>;
}
