import { createId } from "helper/createId";
import { useState } from "react";

type TagList = {
    id: number, name: string, icon: string
}
const tags = [
    { id: 1, name: "交通", icon: "jiaotong" }, { id: 2, name: "住宿", icon: "zhusu" }, { id: 3, name: "购物", icon: "gouwu" }, { id: 4, name: "充值", icon: "chongzhi" }, { id: 5, name: "聚餐", icon: "jucan" }, { id: 6, name: "日用", icon: "riyong" }
]
function useTags() {
    const getTags = JSON.parse(localStorage.getItem("tags") || JSON.stringify(tags))
    const [tag, setTag] = useState<TagList[]>(getTags)
    const findTag = (id: number) => {
        const navTag = tag.filter((t) => t.id === id)
        return navTag[0]
    }
    const cloneTag = (): TagList[] => {  //深拷贝，数据不可变
        return JSON.parse(JSON.stringify(tag))
    }
    const localSave = (tag: any) => { localStorage.setItem("tags", JSON.stringify(tag)) }
    const addTag = (name: string, icon: string) => {
        const obj = { id: createId(), name, icon }
        let newTag = cloneTag()
        newTag.push(obj)
        setTag(newTag)
        localSave(newTag)
    }
    const changeTag = (id: number, name: string) => {
        const tagMap = cloneTag().map(t => t.id === id ? { ...t, name } : t)
        setTag(tagMap)
        localSave(tagMap)
    }
    const deleteTag = (id: number) => {
        const tagMap = cloneTag().filter(t => t.id !== id)
        setTag(tagMap)
        localSave(tagMap)
    }
    return { tag, setTag, findTag, changeTag, deleteTag, addTag }
}
export { useTags }