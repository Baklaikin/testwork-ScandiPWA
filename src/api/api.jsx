export async function getInfo(querry) {
    return await fetch('http://localhost:4000/', {
        method: 'POST',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            query: querry,
        })
    }).then(response => response.json()).then(data => {
        return data.data
    })
}