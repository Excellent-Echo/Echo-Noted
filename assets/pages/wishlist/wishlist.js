const endPoint = "https://605f03ffe96e5c00174080e1.mockapi.io/api/v1/wishlist"
const wishlist = document.getElementById("wishlist-item")

const fetchApi = () => {
	fetch(endPoint)
	.then(response => response.json())
	.then(data => {
let content = `
		<table class="table">
			<thead>
				<tr>
					<th width="5%">No</th>
					<th width="20%">Name</th>
					<th width="20%">Email</th>
					<th width="15%">Phone Number</th>
					<th width="15%">Dish Image</th>
					<th width="25%">Dish Name</th>
				</tr>
			</thead>
		</table>`
		let contentData = data.forEach(element => {
			content +=
			`<table class="table">
				<tbody>
					<tr>
						<th scope="row" width="5%">${element.id}</th>
							<td width="20%">${element.name}</td>
							<td width="20%">${element.email}</td>
							<td width="15%">${element.phone}</td>
							<td width="15%"><img src="${element.dish.image}" class="card-img-top cart-image" alt="${element.dish.title}"></td>
							<td width="25%">${element.dish.title}</td>
					</tr>
				</tbody>
			</table>`
		});

		wishlist.innerHTML = content;
		return contentData;
	})
}
fetchApi()