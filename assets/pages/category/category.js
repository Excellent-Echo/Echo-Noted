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
// const endPoint = `https://api.spoonacular.com/recipes/random?cuisine=chinese&number=8&apiKey=${randomAPIKey}`;
const chineseDish = document.getElementById('chinese-dish');
const indianDish = document.getElementById('indian-dish');
const italianDish = document.getElementById('italian-dish');
const japaneseDish = document.getElementById('japanese-dish');
const koreanDish = document.getElementById('korean-dish');

const fetchChinese = () => {
	let loader = `<div class="loader loader-default is-active" data-text></div>`;
	chineseDish.innerHTML = loader;
	fetch(`https://api.spoonacular.com/recipes/complexSearch?cuisine=chinese&number=8&apiKey=${randomAPIKey}`)
		.then((response) => response.json())
		.then((data) => {
			let content = '';
			let contentData = data.results.forEach((element) => {
				content += `<div class="card mb-3" 
                                 onclick="detail(event, ${element.id})"
                                 style="width: 13rem; padding: 0.5rem">
                                <img src="${element.image}" 
                                     onerror="this.onerror=null; this.src='assets/img/image-not-available.jpg'"  
                                     alt="${element.title}" 
                                     class="card-img-top" >
                                <div class="card-body">
                                    <h6 class="card-title">${element.title}</h6>
                                </div>
                            </div>
                        </div>
                    </div>
            `;
			});
			chineseDish.innerHTML = content;
			return contentData;
		});
};

const fetchIndian = () => {
	let loader = `<div class="loader loader-default is-active" data-text></div>`;
	indianDish.innerHTML = loader;
	fetch(`https://api.spoonacular.com/recipes/complexSearch?cuisine=indian&number=8&apiKey=${randomAPIKey}`)
		.then((response) => response.json())
		.then((data) => {
			let content = '';
			let contentData = data.results.forEach((element) => {
				content += `<div class="card mb-3" 
                                 onclick="detail(event, ${element.id})"
                                 style="width: 13rem; padding: 0.5rem">
                                <img src="${element.image}" 
                                     onerror="this.onerror=null; this.src='assets/img/image-not-available.jpg'"  
                                     alt="${element.title}" 
                                     class="card-img-top" >
                                <div class="card-body">
                                    <h6 class="card-title">${element.title}</h6>
                                </div>
                            </div>
                        </div>
                    </div>
            `;
			});
			indianDish.innerHTML = content;
			return contentData;
		});
};

const fetchItalian = () => {
	let loader = `<div class="loader loader-default is-active" data-text></div>`;
	italianDish.innerHTML = loader;
	fetch(`https://api.spoonacular.com/recipes/complexSearch?cuisine=italian&number=8&apiKey=${randomAPIKey}`)
		.then((response) => response.json())
		.then((data) => {
			let content = '';
			let contentData = data.results.forEach((element) => {
				content += `<div class="card mb-3" 
                                 onclick="detail(event, ${element.id})"
                                 style="width: 13rem; padding: 0.5rem">
                                <img src="${element.image}" 
                                     onerror="this.onerror=null; this.src='assets/img/image-not-available.jpg'"  
                                     alt="${element.title}" 
                                     class="card-img-top" >
                                <div class="card-body">
                                    <h6 class="card-title">${element.title}</h6>
                                </div>
                            </div>
                        </div>
                    </div>
            `;
			});
			italianDish.innerHTML = content;
			return contentData;
		});
};

const fetchJapanese = () => {
	let loader = `<div class="loader loader-default is-active" data-text></div>`;
	japaneseDish.innerHTML = loader;
	fetch(`https://api.spoonacular.com/recipes/complexSearch?cuisine=japanese&number=8&apiKey=${randomAPIKey}`)
		.then((response) => response.json())
		.then((data) => {
			let content = '';
			let contentData = data.results.forEach((element) => {
				content += `<div class="card mb-3" 
                                 onclick="detail(event, ${element.id})"
                                 style="width: 13rem; padding: 0.5rem">
                                <img src="${element.image}" 
                                     onerror="this.onerror=null; this.src='assets/img/image-not-available.jpg'"  
                                     alt="${element.title}" 
                                     class="card-img-top" >
                                <div class="card-body">
                                    <h6 class="card-title">${element.title}</h6>
                                </div>
                            </div>
                        </div>
                    </div>
            `;
			});
			japaneseDish.innerHTML = content;
			return contentData;
		});
};

const fetchKorean = () => {
	let loader = `<div class="loader loader-default is-active" data-text></div>`;
	koreanDish.innerHTML = loader;
	fetch(`https://api.spoonacular.com/recipes/complexSearch?cuisine=korean&number=8&apiKey=${randomAPIKey}`)
		.then((response) => response.json())
		.then((data) => {
			let content = '';
			let contentData = data.results.forEach((element) => {
				content += `<div class="card mb-3" 
                                 onclick="detail(event, ${element.id})"
                                 style="width: 13rem; padding: 0.5rem">
                                <img src="${element.image}" 
                                     onerror="this.onerror=null; this.src='assets/img/image-not-available.jpg'"  
                                     alt="${element.title}" 
                                     class="card-img-top" >
                                <div class="card-body">
                                    <h6 class="card-title">${element.title}</h6>
                                </div>
                            </div>
                        </div>
                    </div>
            `;
			});
			koreanDish.innerHTML = content;
			return contentData;
		});
};

let url = location.href;

const detail = (event, id, title) => {
	event.preventDefault();
	localStorage.setItem('dishID', id);
	localStorage.setItem('url', url);
	window.location.replace('/assets/pages/details/dish-details.html');
};
