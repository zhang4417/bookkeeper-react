import { useState } from "react";

type TagList = {
    name: string, icon: string
}
function useTags() {
    const [tag, setTag] = useState<TagList[]>([{ name: "交通", icon: "jiaotong" }, { name: "住宿", icon: "zhusu" }, { name: "购物", icon: "gouwu" }, { name: "充值", icon: "chongzhi" }, { name: "聚餐", icon: "jucan" }, { name: "日用", icon: "riyong" }])

    return { tag, setTag }
}

export { useTags }