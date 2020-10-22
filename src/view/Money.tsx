import React, { useState } from "react";
import Layout from "components/Layout";

import { Switchboard } from "view/money/Switchboard";
import { Output } from "view/money/Output";
import { TagList } from "view/money/TagList";
import { Note } from "view/money/Note";
import { Pad } from "view/money/Pad";
import { printContext } from "context";

function Money() {
    const [print, setPrint] = useState<string>('0')
    const [padTag, setPadTag] = useState({ name: "交通", icon: "jiaotong" })
    return (
        <Layout>
            <printContext.Provider value={{ print, setPrint, padTag, setPadTag }}>
                <Switchboard />
                <Output print={print} tag={padTag} />
                <TagList />
                <Note />
                <Pad />
            </printContext.Provider>
        </Layout>
    )
}

export default Money