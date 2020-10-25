import React from "react";
import Layout from 'components/Layout';
import { useRecord } from "hooks/useRecord";

function Statistics() {
    const { record } = useRecord()
    return (
        <Layout>
            <h1>{record.map(r => r.count)}</h1>
        </Layout>
    )
}

export default Statistics