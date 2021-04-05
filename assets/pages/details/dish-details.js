const apiKey = [
  "80e73835c8934c0a8f67600904977073",
  "83f2261f53d549ad8d8451ba2ebde399",
  "10baa3c3fcac490ab89f070dd6a19ba9",
];
// const apiKey = ["d624b4c0731e4398904c190db5bb6783", "1c0f1e0838ad44e8aaccbd48b5375f7b","337cb9cb85fa416bbdf29e69ef8d39d9"]
const random = Math.floor(Math.random() * apiKey.length);
const randomAPIKey = apiKey[random];

const dishID = localStorage.getItem("dishID");
const url = localStorage.getItem("url");

const fetchApi = (id) => {
  const detailSection = document.getElementById("details-section");
  const dishBreadcumb = document.getElementById("dish-breadcumb");
  const dishMenu = document.getElementById("menu");

  const endPoint = `https://api.spoonacular.com/recipes/${id}/information?apiKey=${randomAPIKey}&includeNutrition=false`;

  fetch(endPoint)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      let content = `
			<div>

			<div class="row">
				<div class="col-md-5">
					<div class="row">
						<h3 class="summary">Soto Betawi</h3>
					</div>

					<div class="row">
						<div class="box-image">
							<img src="https://i.ibb.co/n7j1f9C/121267029-898785447318816-147767993758142809-n-width-800.jpg" width="100%" alt="gambar makanan" />
						</div>
					</div>

				</div>

				<div class="col-md-7">
					<div class="row information mt-5">
						<div class="col information-content my-2">
							<i class='bx bx-dollar-circle bx-md'></i>
							<h6>$ ${data.pricePerServing} per serving</h6>
						</div>

						<div class="col information-content my-2">
							<i class='bx bx-timer bx-md'></i>
							<h6>Ready in ${data.readyInMinutes} minutes</h6>
						</div>
					</div>

					<div class="row my-2 data-summary p-2">
						<p class="summary">		Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptate possimus atque veritatis repudiandae doloribus consequatur, velit, quasi, illo omnis incidunt debitis quam mollitia excepturi accusamus nam fuga quis alias eaque.</p>
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

			<div class="row tips">
				<div class="col-md-6 health-tips">
					<h4>Health Tips</h4>
					<ul>
						<li>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi hic enim suscipit optio vel officia reprehenderit, obcaecati dolorem sed modi cupiditate recusandae aliquid ab rem asperiores eveniet laboriosam, rerum autem.</li>
						<li>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi hic enim suscipit optio vel officia reprehenderit, obcaecati dolorem sed modi cupiditate recusandae aliquid ab rem asperiores eveniet laboriosam, rerum autem.</li>
						<li>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi hic enim suscipit optio vel officia reprehenderit, obcaecati dolorem sed modi cupiditate recusandae aliquid ab rem asperiores eveniet laboriosam, rerum autem.</li>
					</ul>
				</div>

				<div class="col-md-6 cooking-tips">
					<h4>Cooking Tips</h4>
					<ul>
						<li>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi hic enim suscipit optio vel officia reprehenderit, obcaecati dolorem sed modi cupiditate recusandae aliquid ab rem asperiores eveniet laboriosam, rerum autem.</li>
						<li>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi hic enim suscipit optio vel officia reprehenderit, obcaecati dolorem sed modi cupiditate recusandae aliquid ab rem asperiores eveniet laboriosam, rerum autem.</li>
						<li>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi hic enim suscipit optio vel officia reprehenderit, obcaecati dolorem sed modi cupiditate recusandae aliquid ab rem asperiores eveniet laboriosam, rerum autem.</li>
					</ul>
				</div>
			</div>

			</div>
		`;
      dishBreadcumb.innerHTML = data.title;
      detailSection.innerHTML = content;

      let menuLink = document.createElement("a");
      let linkText = "";

      if (url == "http://127.0.0.1:5500/assets/category/korean/korean.html") {
        linkText = document.createTextNode("Korean Dish");
        menuLink.appendChild(linkText);
      } else if (
        url == "http://127.0.0.1:5500/assets/category/chinese/chinese.html"
      ) {
        linkText = document.createTextNode("Chinese Dish");
        menuLink.appendChild(linkText);
      } else if (
        url == "http://127.0.0.1:5500/assets/category/indian/indian.html"
      ) {
        linkText = document.createTextNode("Indian Dish");
        menuLink.appendChild(linkText);
      } else if (
        url == "http://127.0.0.1:5500/assets/category/italian/italian.html"
      ) {
        linkText = document.createTextNode("Italian Dish");
        menuLink.appendChild(linkText);
      } else if (
        url == "http://127.0.0.1:5500/assets/category/japanese/japanese.html"
      ) {
        linkText = document.createTextNode("Japanese Dish");
        menuLink.appendChild(linkText);
      } else {
        linkText = document.createTextNode("Middle Eastern Dish");
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

      localStorage.setItem("wishlist", JSON.stringify(wishlistData));

      Swal.fire("Good job!", "Menambahkan makanan ke dalam cart!", "success");
    });
};
