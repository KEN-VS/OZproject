const getData = (str) => {
    return fetch('https://testproject-9ebc3-default-rtdb.firebaseio.com/goods.json')
        .then(response => response.json())
        // .then(json => console.log(json))
}

export default getData