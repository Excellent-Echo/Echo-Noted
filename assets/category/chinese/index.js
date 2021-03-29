// window.onload = function() {
    // const apiKey = ["80e73835c8934c0a8f67600904977073", "83f2261f53d549ad8d8451ba2ebde399", "10baa3c3fcac490ab89f070dd6a19ba9"]
    const apiKey = ["d624b4c0731e4398904c190db5bb6783", "1c0f1e0838ad44e8aaccbd48b5375f7b","337cb9cb85fa416bbdf29e69ef8d39d9"]
    const random = Math.floor(Math.random() * apiKey.length)
    const randomAPIKey = apiKey[random]

    const endPoint = `https://api.spoonacular.com/recipes/complexSearch?apiKey=${randomAPIKey}&cuisine=Chinese&number=12`
	
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
                               <div onClick="detail(event, ${element.id})">
                                    <img src="${element.image}" class="card-img-top" height="250px">
                               </div>
                            <div class="card-body">
                        
                                    <h4 class="card-title" onClick="detail(event, ${element.id})">${element.title}</h4>
                                
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

    