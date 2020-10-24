let id: number = 0
function createId() {
    id += 1
    return id
}

export { createId }