const apiKey = [
	'80e73835c8934c0a8f67600904977073',
	'83f2261f53d549ad8d8451ba2ebde399',
	'10baa3c3fcac490ab89f070dd6a19ba9',
	'd624b4c0731e4398904c190db5bb6783',
	'1c0f1e0838ad44e8aaccbd48b5375f7b',
	'337cb9cb85fa416bbdf29e69ef8d39d9',
];
const random = Math.floor(Math.random() * apiKey.length);
const randomAPIKey = apiKey[random];

const dishID = localStorage.getItem('dishID');
const url = localStorage.getItem('url');

const fetchApi = (id) => {
	const detailSection = document.getElementById('details-section');
	const dishBreadcumb = document.getElementById('dish-breadcumb');
	const dishMenu = document.getElementById('menu');

	const endPoint = `https://api.spoonacular.com/recipes/${id}/information?apiKey=${randomAPIKey}&includeNutrition=true`;

	fetch(endPoint)
		.then((response) => response.json())
		.then((data) => {
			const checkDairy = () => {
				if (!data.dairyFree) {
					return ``;
				} else {
					return `<div class="col information-content my-2 d-flex flex-column align-items-center">
						<img src="/assets/img/icons/dairy-free.png" alt="dairy-free">
						<h6>dairy free</h6>
					</div>`;
				}
			};

			const checkGluten = () => {
				if (!data.glutenFree) {
					return ``;
				} else {
					return `<div class="col information-content my-2 d-flex flex-column align-items-center">
						<img src="/assets/img/icons/gluten-free.png" alt="dairy-free">
						<h6>gluten free</h6>
					</div>`;
				}
			};

			const checkVegetarian = () => {
				if (!data.vegetarian) {
					return ``;
				} else {
					return `<div class="col information-content my-2 d-flex flex-column align-items-center">
						<img src="/assets/img/icons/vegetarian.png" alt="dairy-free">
						<h6>vegetarian</h6>
					</div>`;
				}
			};

			const checkVegan = () => {
				if (!data.vegan) {
					return ``;
				} else {
					return `<div class="col information-content my-2 d-flex flex-column align-items-center">
						<img src="/assets/img/icons/vegan.png" alt="dairy-free">
						<h6>vegan</h6>
					</div>`;
				}
			};

			const checkHealthy = () => {
				if (!data.veryHealthy) {
					return ``;
				} else {
					return `<div class="col information-content my-2 d-flex flex-column align-items-center">
						<img src="/assets/img/icons/healthy.png" alt="dairy-free">
						<h6>healthy</h6>
					</div>`;
				}
			};

			// nutrition facts
			let nutrition = '';
			data.nutrition.nutrients.forEach((element) => {
				nutrition += `<div class="col-sm-2">
								<h6>${element.name}</h6>
							</div>

							<div class="col-sm-1">
								<h6>${Math.floor(element.amount)}${element.unit}</h6>
							</div>
								
							<div class="col-sm-9">
								<div class='progress mb-2 p-0'>
									<div
										class='progress-bar bg-success'
										role='progressbar'
										style='width: ${element.percentOfDailyNeeds}%'
										aria-valuenow='50'
										aria-valuemin='0'
										aria-valuemax='${element.percentOfDailyNeeds}'
									>${Math.ceil(element.percentOfDailyNeeds)}%</div>
								</div>
							</div>`;
			});

			var instructions = document.createElement('div');
			var textnode = document.createTextNode(data.instructions);
			instructions.appendChild(textnode);
			console.log(instructions);
			// document.getElementById('nice').appendChild(instructions);

			let content = `
			<div>
				<div class="row d-flex">
					<div class="col-md-7 d-flex flex-column justify-content-between">
						<div class="row information">
							${checkDairy()}
							${checkGluten()}
							${checkVegetarian()}
							${checkVegan()}
							${checkHealthy()}
						</div>

						<div class="row" id="nice">

						</div>

						<div class="row">
							<!-- Button trigger modal -->
							<button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" onclick="getByID(event, ${
								data.id
							})">
							Add to Wishlist
							</button>

							<!-- Modal -->
							<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
								<div class="modal-dialog modal-dialog-centered">
									<div class="modal-content">
										<div class="modal-body">
											<div class="container">
												<div class="row">
													<div class="col-md-4">
														<form onsubmit="formHandle(e)">
															<div class="mb-3">
																<label for="nama" class="form-label">Name</label>
																<input type="text" class="form-control" id="inputName" aria-describedby="nameHelp">
															</div>
															<div class="mb-3">
																<label for="email" class="form-label">Email address</label>
																<input type="email" class="form-control" id="inputEmail" aria-describedby="emailHelp">
															</div>
															<div class="mb-3">
																<label for="phone" class="form-label">Phone number</label>
																<input type="text" class="form-control" id="inputPhone" aria-describedby="phoneHelp">
															</div>
															<button type="submit" class="btn btn-primary">Submit</button>
														</form>
													</div>
									
													<div class="col-md-8">
														<table class="table">
															<thead>
																<tr>
																<th scope="col">No</th>
																<th scope="col" width="40%">Image</th>
																<th scope="col">Dish</th>
																</tr>
															</thead>
															<tbody>
																<tr>
																<th scope="row">1</th>
																<td width="40%"><img src="${data.image}" alt="img" style="width: 100%" /></td>
																<td>${data.title}</td>
																</tr>
															</tbody>
														</table>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>

					<div class="col-md-5">
						<div class="box-image">
							<img src="${data.image}" width="100%" alt="gambar makanan" />
						</div>
					</div>
				</div>

				<div class="row">
					<div class="col-sm-7 d-flex justify-content-around align-items-center">
						<a href="https://www.instagram.com" target="_blank">
						<i class="fab fa-2x fa-instagram"></i></a>

						<a href="https://www.facebook.com" target="_blank">
						<i class="fab fa-2x fa-facebook"></i></a>

						<a href="https://www.twitter.com" target="_blank">
						<i class="fab fa-2x fa-twitter"></i></a>

						<a href="https://www.whatsapp.com/?lang=en" target="_blank">
						<i class="fab fa-2x fa-whatsapp"></i></a>

						<a href="https://mail.google.com" target="_blank">
						<i class="far fa-2x fa-envelope"></i></a>
					</div>

					<div class="col-sm-5 d-flex">
					<div class="col information-content my-2 d-flex flex-column align-items-center">
						<i class='bx bx-dollar-circle bx-md'></i>
						<h6>$ ${(data.pricePerServing / 100).toFixed(2)} per serving</h6>
					</div>

					<div class="col information-content my-2 d-flex flex-column align-items-center">
						<i class='bx bx-timer bx-md'></i>
						<h6>ready in ${data.readyInMinutes} minutes</h6>
					</div>
				</div>
				</div>

				<div class="row mt-3">
					<h3 style="font-weight: 600">Nutritional Information</h3>
					${nutrition}
					<p style="font-size: 10px;">covered percent of daily need</p>
				</div>
			</div>
		`;
			dishBreadcumb.innerHTML = data.title;
			detailSection.innerHTML = content;
			cuisines = data.cuisines;

			let menuLink = document.createElement('a');
			let linkText = '';

			if (cuisines.includes('Korean')) {
				linkText = document.createTextNode('Korean Dish');
				menuLink.appendChild(linkText);
			} else if (cuisines.includes('Chinese')) {
				linkText = document.createTextNode('Chinese Dish');
				menuLink.appendChild(linkText);
			} else if (cuisines.includes('Indian')) {
				linkText = document.createTextNode('Indian Dish');
				menuLink.appendChild(linkText);
			} else if (cuisines.includes('Italian')) {
				linkText = document.createTextNode('Italian Dish');
				menuLink.appendChild(linkText);
			} else if (cuisines.includes('Japanese')) {
				linkText = document.createTextNode('Japanese Dish');
				menuLink.appendChild(linkText);
			} else {
				linkText = document.createTextNode('Dish');
				menuLink.appendChild(linkText);
			}

			menuLink.href = url;
			dishMenu.appendChild(menuLink);
		});
};
fetchApi(dishID);

const getByID = (event, id) => {
	event.preventDefault();

	const endPoint = `https://api.spoonacular.com/recipes/${id}/information?apiKey=${randomAPIKey}&includeNutrition=false`;

	fetch(endPoint)
		.then((response) => response.json())
		.then((data) => {
			let wishlistData = {
				id: dishID,
				title: data.title,
				image: data.image,
			};

			localStorage.setItem('wishlistData', JSON.stringify(wishlistData));
		});
};

const formHandle = (e) => {
	e.preventDefault();

	const name = document.getElementById('inputName').value;
	const email = document.getElementById('inputEmail').value;
	const phone = document.getElementById('inputPhone').value;
	const dish = JSON.parse(localStorage.getItem('wishlistData'));

	const data = {
		name: name,
		email: email,
		phone: phone,
		dish: dish,
	};

	fetch('https://605f03ffe96e5c00174080e1.mockapi.io/api/v1/wishlist', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(data),
	})
		.then((response) => response.json())
		.then((data) => {
			console.log('Success:', data);
			alert('sukses');
			// Swal.fire("Good job!", "Berhasil menambahkan wishlist!", "success");
		})
		.catch((error) => {
			console.error('Error:', error);
			alert('error');
		});

	// e.target.reset();
};
