import { createContext } from "react";

const defaultValue = {
    locale: 'es',
    setLocale: () => {}
}

export default createContext(defaultValue)