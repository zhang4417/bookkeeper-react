import { createContext } from "react";

type Print = {
    print?: string;
    setPrint?: React.Dispatch<React.SetStateAction<string>>;
}
type Tag = {
    padTag?: string[];
    setPadTag?: React.Dispatch<React.SetStateAction<string[]>>;
}
const printContext = createContext<Print>({})
const tagContext = createContext<Tag>({})


export { printContext, tagContext }