// const saveWishlist = () => {
// 		document.getElementById("wishlist").innerHTML = 
// 		`<table class="table table-hover">
// 			<thead>
// 			  <tr>
// 				<th scope="col">No</th>
// 				<th scope="col" width="30%">Image</th>
// 				<th scope="col">Dish</th>
// 			  </tr>
// 			</thead>
// 			<tbody>
// 			  <tr>
// 				<th scope="row">1</th>
// 				<td><img src="${storage.image}" class="card-img-top cart-image" alt="image"></td>
// 				<td>${storage.title}</td>
// 			  </tr>
// 			</tbody>
// 		</table>`
// }
// saveWishlist()

const endPoint = "https://605f03ffe96e5c00174080e1.mockapi.io/api/v1/wishlist"
const wishlist = document.getElementById("wishlist")

const fetchApi = () => {
	fetch(endPoint)
	.then(response => response.json())
	 .then(data => {
		 console.log(data);
		let content = ""
		let contentData = data.forEach(element => { 
			content += 
			`<table class="table">
				<thead>
				  <tr>
					<th scope="col">No</th>
					<th scope="col" width="20%">Name</th>
					<th scope="col" width="20%">Email</th>
					<th scope="col" width="20%">Phone Number</th>
					<th scope="col" width="20%">Image</th>
					<th scope="col" width="20%">Dish</th>
				  </tr>
				</thead>
				<tbody>
				  <tr>
					<th scope="row">${element.id}</th>
					<td>${element.name}</td>
					<td>${element.email}</td>
					<td>${element.phone}</td>
					<td><img src="${element.dish.image}" class="card-img-top cart-image" alt="image"></td>
					<td>${element.dish.title}</td>
				  </tr>
				</tbody>
			</table>`
		});

		wishlist.innerHTML = content
		return contentData
	})
}
fetchApi()