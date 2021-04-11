let storage = JSON.parse(localStorage.getItem("wishlist"));

const saveWishlist = () => {
    // storage.forEach(function(data) {
    document.getElementById(
        "dish-table"
    ).innerHTML = `<table class="table table-hover">
			<thead>
			  <tr>
				<th scope="col">No</th>
				<th scope="col" width="30%">Image</th>
				<th scope="col">Dish</th>
			  </tr>
			</thead>
			<tbody>
			  <tr>
				<th scope="row">1</th>
				<td><img src="${storage.image}" class="card-img-top cart-image" alt="image"></td>
				<td>${storage.title}</td>
			  </tr>
			</tbody>
		</table>`;
    // })
};
saveWishlist();

const formHandle = (e) => {
    e.preventDefault();

    const name = document.getElementById("exampleInputName1").value;
    const email = document.getElementById("exampleInputEmail1").value;
    const phone = document.getElementById("exampleInputPhone1").value;
    const dish = storage;

    const data = {
        name: name,
        email: email,
        phone: phone,
        dish: dish,
    };

    fetch("https://605f03ffe96e5c00174080e1.mockapi.io/api/v1/wishlist", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    })
        .then((response) => response.json())
        .then((data) => {
            console.log("Success:", data);

            Swal.fire("Good job!", "Berhasil menambahkan wishlist!", "success");
        })
        .catch((error) => {
            console.error("Error:", error);
        });

    e.target.reset();
};

const form1 = document.getElementById("form1");
form1.addEventListener("submit", formHandle);
