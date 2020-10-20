import React from "react";
import Layout from "components/Layout";

import { Switchboard } from "view/money/Switchboard";
import { Output } from "view/money/Output";
import { Tags } from "view/money/Tags";
import { Note } from "view/money/Note";
import { Pad } from "view/money/Pad";

function Money() {
    return (
        <Layout>
            <Switchboard />
            <Output />
            <Tags />
            <Note />
            <Pad />
        </Layout>
    )
}

export default Money