const apiKey = [
    "80e73835c8934c0a8f67600904977073",
    "83f2261f53d549ad8d8451ba2ebde399",
    "10baa3c3fcac490ab89f070dd6a19ba9",
    "d624b4c0731e4398904c190db5bb6783",
    "1c0f1e0838ad44e8aaccbd48b5375f7b",
    "337cb9cb85fa416bbdf29e69ef8d39d9"
];
const random = Math.floor(Math.random() * apiKey.length);
const randomAPIKey = apiKey[random];
const endPoint = `https://api.spoonacular.com/recipes/random?number=12&apiKey=${randomAPIKey}`;
const recommendation = document.getElementById("recommendation");

const fetchAPI = _ => {
    fetch(endPoint).then(response => response.json()).then(data => {
        let content = "";
        let contentData = data.recipes.forEach(element => {
            content += `<div class="card col mx-3" 
                             onclick="detail(event, ${element.id})"
                             style="width: 15rem">
                            <img src="${element.image}" onerror="this.onerror=null; this.src='assets/img/image-not-available.jpg'"  alt="${element.title}" class="card-img-top" width="100%">
                            <div class="card-body">
                                <h5 class="card-title">${element.title}</h5>
                            </div>
                        </div>`
        })
        recommendation.innerHTML = content;
        return contentData;
    })}
    fetchAPI();

const detail = (event, id) => {
    event.preventDefault();
    localStorage.setItem('dishID', id);
    window.location.replace('assets/pages/details/dish-details.html');
}