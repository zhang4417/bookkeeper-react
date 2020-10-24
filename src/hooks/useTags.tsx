import { createId } from "helper/createId";
import { useState } from "react";

type TagList = {
    id: number, name: string, icon: string
}
const tags = [
    { id: createId(), name: "交通", icon: "jiaotong" }, { id: createId(), name: "住宿", icon: "zhusu" }, { id: createId(), name: "购物", icon: "gouwu" }, { id: createId(), name: "充值", icon: "chongzhi" }, { id: createId(), name: "聚餐", icon: "jucan" }, { id: createId(), name: "日用", icon: "riyong" }
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
    const changeTag = (id: number, name: string) => {
        const tagMap = cloneTag().map(t =>
            t.id === id ? { ...t, name } : t
        )
        setTag(tagMap)
        localStorage.setItem("tags", JSON.stringify(tagMap))
    }
    const deleteTag = (id: number) => {
        const tagMap = cloneTag().filter(t => t.id !== id)
        setTag(tagMap)
        localStorage.setItem("tags", JSON.stringify(tagMap))
    }
    return { tag, setTag, findTag, changeTag, deleteTag }
}
export { useTags }