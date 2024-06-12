const getFromLocalStorage = () => {
    const storedId = localStorage.getItem("storedId");
    if (storedId) {
        return JSON.parse(storedId)
    } else {
        return []
    }
}

const addToLocalStorage = id => {
    const prevStored = getFromLocalStorage();
    const exists = prevStored.find(prevId => prevId === id);
    if (!exists) {
        prevStored.push(id)
        localStorage.setItem("storedId",JSON.stringify(prevStored))
    }
}

export {addToLocalStorage,getFromLocalStorage}
