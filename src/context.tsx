import { createContext } from "react";

type Print = {
    print?: string;
    setPrint?: React.Dispatch<React.SetStateAction<string>>;
    padTag?: string[];
    setPadTag?: React.Dispatch<React.SetStateAction<string[]>>;
}

const printContext = createContext<Print>({})

export { printContext }