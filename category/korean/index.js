window.onload = function() {
    const endPoint = 'https://api.spoonacular.com/recipes/complexSearch?apiKey=fdf95f4ae2094eefa59fcfd38c3a53b6&cuisine=Korean&number=12'
	
    const foodList = document.getElementById("foodList")
    const fetchApi = () => {
        fetch(endPoint)
        .then(response => response.json())
         .then(data => {
             console.log(data.results);
            let content = ""
            let contentData = data.results.forEach(element => { 
                content += 
                `<div class="col-md-3">
                    <div class="card">
                        <img src="${element.image}" class="card-img-top" height="250px">
                        <div class="card-body">
                            <h5 class="card-title">${element.title}</h5>
                            <input class="btn btn-primary" type="submit" value="Wishlist">
                        </div>
                        <div class ="submitBtn">
                           
                        </div>
                    </div>
                </div>`
            });

            foodList.innerHTML = content
            return contentData
        })
    }

    console.log(fetchApi());
}

    