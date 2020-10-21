import React, { createContext, useState } from "react";
import Layout from "components/Layout";

import { Switchboard } from "view/money/Switchboard";
import { Output } from "view/money/Output";
import { TagList } from "view/money/TagList";
import { Note } from "view/money/Note";
import { Pad } from "view/money/Pad";
import { printContext } from "context";

function Money() {
    const [print, setPrint] = useState<string>('0')
    console.log(print)
    return (
        <Layout>
            <printContext.Provider value={{ print, setPrint }}>
                <Switchboard />
                <Output print={print} />
                <TagList />
                <Note />
                <Pad />
            </printContext.Provider>
        </Layout>
    )
}

export default Money