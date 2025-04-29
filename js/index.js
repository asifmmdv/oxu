const mainNews = document.getElementById('mainNews');

function showMainNews() {
    mainNews.innerHTML = '';
    data.forEach(item => {
        mainNews.innerHTML += `
        <a href="/detail/details.html?id=${item.id}" class="block bg-white rounded-lg overflow-hidden shadow-lg mb-6">
            <img src="${item.img}" class="w-full h-48" alt="${item.title}">
            <div class="p-6">
                <div class="flex justify-between items-start">
                    <h2 class="text-xl font-bold mb-2">${item.title}</h2>
                    <span class="text-gray-500 text-sm">${item.view} views</span>
                </div>
                <p class="text-gray-700 mb-4">${item.description.slice(0, 150)}...</p>
                <div class="flex justify-between items-center">
                    <span class="text-sm text-gray-500">${item.date}</span>
                </div>
            </div>
        </a>
        `;
    });
    
}

function getAllNews(){
    fetch("https://67ee3f33c11d5ff4bf78e031.mockapi.io/data")
        .then(res => res.json())
        .then(mel => {
            data.length = 0;
            data.push(...mel.reverse());
            showMainNews(); 
        });
}

getAllNews();