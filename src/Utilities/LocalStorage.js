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



// For Wishlist

const getWFromLocalStorage = () => {
    const storedWId = localStorage.getItem("storedWId");
    if (storedWId) {
        return JSON.parse(storedWId)
    } else {
        return []
    }
}
const addToWLocalStorage = id => {
    const prevWStored = getWFromLocalStorage();
    const exists = prevWStored.find(prevId => prevId === id);
    if (!exists) {
        prevWStored.push(id)
        localStorage.setItem("storedWId",JSON.stringify(prevWStored))
    }
}

export { addToLocalStorage, getFromLocalStorage, getWFromLocalStorage, addToWLocalStorage }
