const postData = (str) => {
    return fetch('http://localhost:3000/goods', {
            method: 'POST',
            body: JSON.stringify({
                title: "Witcher3",
                price: 3000,
                sale: true,
                img: "https://cdn1.ozone.ru/multimedia/c400/1023547851.jpg",
                category: "Игры и софт"
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
        .then((response) => response.json())
        // .then((json) => console.log(json));
}

export default postData