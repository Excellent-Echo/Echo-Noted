window.onload = function() {
    const endPoint = 'https://api.spoonacular.com/recipes/complexSearch?apiKey=fdf95f4ae2094eefa59fcfd38c3a53b6&cuisine=Korean'
	
    const foodList = document.getElementById("foodList")
    const fetchApi = () => {
        fetch(endPoint)
        .then(response => {
            return response.json()
        })
        .then(data =>{
            console.log(data.results)
            let content = ""
            let contentData = data.results.forEach(element => { 
                content += 
            `<div class="col-md-3">
                <div class="card">
                    <img src="${element.image}" class="card-img-top" height="250px">
                    <div class="card-body">
                      <h3 class="card-title">${element.title}</h3>
                      <p class="card-text">Samyang dengan tingkat kepedasan yang menggugah selera</p>
                      <input class="btn btn-primary" type="submit" value="Wishlist">
                    </div>
                </div>
            </div>`

            foodList.appendChild(contentData)
            });
        })
    }
    
}
    