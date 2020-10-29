import { Toast } from "components/Toast";
import React from "react";
import ReactDOM from "react-dom";

function useToast() {
    const div = document.createElement('div')
    let timer: any
    const addToast = (msgs: string, duration: number) => {
        if (timer) {
            clearTimeout(timer);
        }
        document.body.appendChild(div)
        ReactDOM.render(<Toast msg={msgs} />, div)
        timer = setTimeout(() => {
            destroy()
        }, duration)
    }
    const destroy = () => {
        ReactDOM.unmountComponentAtNode(div)
        document.body.removeChild(div)
    }
    return { addToast, destroy }
}

export { useToast }