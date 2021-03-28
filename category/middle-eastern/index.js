// window.onload = function() {
    const apiKey = ["80e73835c8934c0a8f67600904977073", "83f2261f53d549ad8d8451ba2ebde399", "10baa3c3fcac490ab89f070dd6a19ba9"]
    const random = Math.floor(Math.random() * apiKey.length)
    const randomAPIKey = apiKey[random]

    const endPoint = `https://api.spoonacular.com/recipes/complexSearch?apiKey=${randomAPIKey}&cuisine=Middle Eastern&number=12`
	
    const foodList = document.getElementById("foodList")
    const fetchApi = () => {
        fetch(endPoint)
        .then(response => response.json())
         .then(data => {
            let content = ""
            let contentData = data.results.forEach(element => { 
                content += 
                `<div class="col-md-3">
                        <div class="card">
                            <a href="">
                               <div onClick="detail(event, ${element.id})">
                                    <img src="${element.image}" class="card-img-top" height="250px">
                               </div>
                            </a>
                            <div class="card-body">
                                <a href="">
                                    <h6 class="card-title" onClick="detail(event, ${element.id})">${element.title}</h6>
                                </a>

                                <div class ="submitBtn">
                                    <input class="btn btn-primary" type="submit" value="Wishlist" id="wishlistButton">                                   
                                </div>
                            </div>
                        </div>
                </div>`
            });

            foodList.innerHTML = content
            return contentData
        })
    }
    fetchApi()

    let url = location.href;

    const detail = (event,id) => {
        event.preventDefault()
        localStorage.setItem('dishID', id)
        localStorage.setItem("url",url)
        window.location.replace('/pages/details/index.html')
    }
// }

    