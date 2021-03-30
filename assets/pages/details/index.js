// const apiKey = ["80e73835c8934c0a8f67600904977073", "83f2261f53d549ad8d8451ba2ebde399", "10baa3c3fcac490ab89f070dd6a19ba9"]
const apiKey = ["d624b4c0731e4398904c190db5bb6783", "1c0f1e0838ad44e8aaccbd48b5375f7b","337cb9cb85fa416bbdf29e69ef8d39d9"]
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
				<div class="col-4">
					<div class="row">
						<div class="box-image">
							<img src="${data.image}" width="100%" alt="gambar makanan" />
						</div>
					</div>

					<div class="row information">
						<div class="col information-content my-2">
							<i class="fas fa-tags fa-2x"></i>
							<h6>${data.pricePerServing}$ per serving</h6>
						</div>

						<div class="col information-content my-2">
							<i class="fas fa-clock fa-2x"></i>
							<h6>Ready in ${data.readyInMinutes} minutes</h6>
						</div>
					</div>
				</div>

				<div class="col-8">
					<div class="row">
						<h3 class="summary">${data.title}</h3>
					</div>

					<div class="row my-2">
						<p class="summary">${data.summary}</p>
						</p>
					</div>

					<div class="row">
						<div class ="submitBtn">
							<input class="btn btn-primary" type="submit" value="Wishlist" onclick="getByID(event, ${data.id})">                                   
						</div>
					</div>	

					<div class="row">
						<div class="social-media">
							<a href="https://www.instagram.com" target="_blank">
							<i class="fab fa-2x fa-instagram"></i></a>

							<a href="https://www.facebook.com" target="_blank">
							<i class="fab fa-2x fa-facebook"></i></a>

							<a href="https://www.twitter.com" target="_blank">
							<i class="fab fa-2x fa-twitter-square"></i></a>
						</div>

					</div>	
				</div>
			</div>
		`
		dishBreadcumb.innerHTML = data.title
		detailSection.innerHTML = content

		let menuLink = document.createElement('a');
		let linkText = ""
		
		if(url == "http://127.0.0.1:5500/assets/category/korean/") {
			linkText = document.createTextNode("Korean Dish");
			menuLink.appendChild(linkText);
		} else if (url == "http://127.0.0.1:5500/assets/category/chinese/") {
			linkText = document.createTextNode("Chinese Dish");
			menuLink.appendChild(linkText);
		} else if (url == "http://127.0.0.1:5500/assets/category/indian/") {
			linkText = document.createTextNode("Indian Dish");
			menuLink.appendChild(linkText);
		} else if (url == "http://127.0.0.1:5500/assets/category/italian/") {
			linkText = document.createTextNode("Italian Dish");
			menuLink.appendChild(linkText);
		} else if (url == "http://127.0.0.1:5500/assets/category/japanese/") {
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

		Swal.fire(
			'Good job!',
			'Menambahkan makanan ke dalam cart!',
			'success'
		  )
	})
}