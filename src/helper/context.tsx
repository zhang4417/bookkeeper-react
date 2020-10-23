import { createContext } from "react";

type Print = {
    print?: string;
    setPrint?: React.Dispatch<React.SetStateAction<string>>;
    padTag?: { name: string, icon: string };
    setPadTag?: React.Dispatch<React.SetStateAction<{ name: string, icon: string }>>;
    types?: string;
    setTypes?: React.Dispatch<React.SetStateAction<string>>;
    noteDate?: { note: string, date: string };
    setNoteDate?: React.Dispatch<React.SetStateAction<{ note: string, date: string }>>;
}

const printContext = createContext<Print>({})

export { printContext }