import { useState } from "react"

export type Record = {
    type: string,
    note: string,
    date: string,
    tag: { name: string, icon: string },
    count: number
}
function useRecord() {
    const getRecord = JSON.parse(localStorage.getItem("_record") || "[]")
    const [record, setRecord] = useState<Record[]>(getRecord)
    const localSave = (record: Record[]) => localStorage.setItem('_record', JSON.stringify(record))
    const addRecord = (obj: Record) => {
        let newRecord = [...record, obj]
        setRecord(newRecord)
        localSave(newRecord)
    }
    return { record, setRecord, addRecord }
}
export { useRecord }