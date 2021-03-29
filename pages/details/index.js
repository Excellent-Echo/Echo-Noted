const apiKey = ["80e73835c8934c0a8f67600904977073", "83f2261f53d549ad8d8451ba2ebde399", "10baa3c3fcac490ab89f070dd6a19ba9"]
const random = Math.floor(Math.random() * apiKey.length)
const randomAPIKey = apiKey[random]

const dishID = localStorage.getItem('dishID')
const url = localStorage.getItem('url')

const fetchApi = (id) => {
	const detailSection = document.getElementById("details-section")
	const dishBreadcumb = document.getElementById("dish-breadcumb")
	const dishMenu = document.getElementById("menu")

	const endPoint = `https://api.spoonacular.com/recipes/${id}/information?apiKey=${randomAPIKey}&includeNutrition=false`

	fetch(endPoint).then(response => response.json())
	.then(data => {
		console.log(data);
		let content = `
			<div class="row">
				<div class="col-md-5">
					<div class="box-image">
						<img src="${data.image}" width="100%" alt="gambar makanan" />
					</div>
				</div>
				<div class="col-md-7">
					<div class="my-2">
						<h2>${data.title}</h2>
					</div>

					<p>${data.summary}</p>
						<p class="price">
						<i class="fas fa-tags"></i>
						<span class="box-price">${data.pricePerServing}$</span>
					</p>

					<div class ="submitBtn">
						<input class="btn btn-primary" type="submit" value="Wishlist" onclick="getByID(event, ${data.id})">                                   
					</div>
					
					<div class="social-media">
						<a href="https://www.instagram.com" target="_blank">
						<i class="fab fa-2x fa-instagram"></i
						></a>
						<a href="https://www.facebook.com" target="_blank">
						<i class="fab fa-2x fa-facebook"></i
						></a>
						<a href="https://www.twitter.com" target="_blank"
						><i class="fab fa-2x fa-twitter-square"></i
						></a>
					</div>
				</div>
			</div>
		`
		dishBreadcumb.innerHTML = data.title
		detailSection.innerHTML = content

		let menuLink = document.createElement('a');
		let linkText = ""
		
		if(url == "http://127.0.0.1:5500/category/korean/") {
			linkText = document.createTextNode("Korean Dish");
			menuLink.appendChild(linkText);
		} else if (url == "http://127.0.0.1:5500/category/chinese/") {
			linkText = document.createTextNode("Chinese Dish");
			menuLink.appendChild(linkText);
		} else if (url == "http://127.0.0.1:5500/category/indian/") {
			linkText = document.createTextNode("Indian Dish");
			menuLink.appendChild(linkText);
		} else if (url == "http://127.0.0.1:5500/category/italian/") {
			linkText = document.createTextNode("Italian Dish");
			menuLink.appendChild(linkText);
		} else if (url == "http://127.0.0.1:5500/category/japanese/") {
			linkText = document.createTextNode("Japanese Dish");
			menuLink.appendChild(linkText);
		} else {
			linkText = document.createTextNode("Middle Eastern Dish");
			menuLink.appendChild(linkText);
		}
		
		menuLink.href = url;
		dishMenu.appendChild(menuLink)
	})
}
fetchApi(dishID)


const getByID = (event, id) => {
	event.preventDefault()

	const endPoint = `https://api.spoonacular.com/recipes/${id}/information?apiKey=${randomAPIKey}&includeNutrition=false`

	fetch(endPoint).then(response => response.json())
	.then(data => {
		let wishlistData = {
			id: dishID,
			title: data.title,
			image: data.image
		}
	
		localStorage.setItem('wishlist', JSON.stringify(wishlistData))	
	})
}