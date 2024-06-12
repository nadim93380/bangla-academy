let allbooks = []

const loadData = () => {
    
    fetch("public/fakeData.json")
        .then(res => res.json())
        .then(data => allbooks.concat(data))
    if (allbooks.length > 0) {
        return allbooks
    }
    
}

export {loadData}