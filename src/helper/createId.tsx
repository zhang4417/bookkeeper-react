let id: number = JSON.parse(localStorage.getItem('_ID') || "6")
function createId() {
    id += 1
    localStorage.setItem('_ID', JSON.stringify(id))
    return id
}

export { createId }