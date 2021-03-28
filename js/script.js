window.onload = function () {
    const endPoint = "https://api.spoonacular.com/recipes/random?number=5&apiKey=80e73835c8934c0a8f67600904977073";
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