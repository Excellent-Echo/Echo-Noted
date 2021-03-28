window.onload = function () {
    const apiKey = ["80e73835c8934c0a8f67600904977073", "83f2261f53d549ad8d8451ba2ebde399", "10baa3c3fcac490ab89f070dd6a19ba9"]
    const random = Math.floor(Math.random() * apiKey.length)
    const randomAPIKey = apiKey[random]

    const endPoint = `https://api.spoonacular.com/recipes/random?number=5&apiKey=${randomAPIKey}`
    const recommendation = document.getElementById("recommendation");
    const fetchAPI = _ => {
        fetch(endPoint).then(response => response.json()).then(data => {
            console.log(data.recipes);
            let content = "";
            let contentData = data.recipes.forEach(element => {
                content += `<div class="card col mx-3">
                                <img src="${element.image}" alt="" class="card-img-top" width="100%">
                                <div class="card-body">
                                    <h6 class="card-subtitle mb-2 text-muted">${element.title}</h6>
                                </div>
                            </div>`
            })
        recommendation.innerHTML = content;
        return contentData;
        })
    }
    return fetchAPI();
}