const newsDetail = document.getElementById("newsDetail");
const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get("id");

fetch(`https://67ee3f33c11d5ff4bf78e031.mockapi.io/data/${id}`)
    .then(res => res.json())
    .then(item => {
        newsDetail.innerHTML = `
            <img src="${item.img}" alt="${item.title}" class="w-full h-64 object-cover rounded mb-6">
            <h1 class="text-3xl font-bold mb-4">${item.title}</h1>
            <div class="text-gray-500 text-sm mb-4">${item.view} views • ${item.date}</div>
            <p class="text-gray-700 leading-relaxed">${item.description}</p>
        `;
    })
;
