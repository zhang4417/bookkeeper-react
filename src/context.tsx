import { createContext } from "react";

type Print = {
    print?: string;
    setPrint?: React.Dispatch<React.SetStateAction<string>>;
    padTag?: { name: string, icon: string };
    setPadTag?: React.Dispatch<React.SetStateAction<{ name: string, icon: string }>>;
}

const printContext = createContext<Print>({})

export { printContext }