const data = []
const modal = document.getElementById('modal')
const table = document.getElementById('table')
const inpTitle = document.getElementById('inpTitle')
const inpDesc = document.getElementById('inpDesc')
const inpImg = document.getElementById('inpImg')
const inpView = document.getElementById('inpView')
const inpDate = document.getElementById('inpDate')
const edit = document.getElementById('edit')

function openModal(){
    modal.classList.toggle("hidden")
}

function getAllNews(){
    fetch("https://67ee3f33c11d5ff4bf78e031.mockapi.io/data")
        .then(res => res.json())
        .then(mel => {
            data.length = 0
            data.push(...mel.reverse())
            showAllNews()
        })
}

getAllNews()

function showAllNews(){
    table.innerHTML = ""
    data.map(item => {
        table.innerHTML += `
            <tr class="shadow-sm text-[16px] shadow-[#23c483] mt-[20px] rounded-lg text-white h-[150px]">
                <td class="w-[20%]">
                    <img src="${item.img}" class="h-[150px] w-[95%] rounded-l-lg"/>
                </td>
                <td class="w-[20%] ">${item.title}</td>
                <td class="w-[25%]">${item.description.slice(0,100)}</td>
                <td class="w-[10%]">${item.date}</td>
                <td class="w-[5%] text-center">${item.view}</td>
                <td class="w-[5%]  text-center">
                    <button id="btn2" onclick="deleteNews(${item.id})">
                        <svg viewBox="0 0 15 17.5" height="24" width="20" xmlns="http://www.w3.org/2000/svg" class="icon">
                            <path transform="translate(-2.5 -1.25)" d="M15,18.75H5A1.251,1.251,0,0,1,3.75,17.5V5H2.5V3.75h15V5H16.25V17.5A1.251,1.251,0,0,1,15,18.75ZM5,5V17.5H15V5Zm7.5,10H11.25V7.5H12.5V15ZM8.75,15H7.5V7.5H8.75V15ZM12.5,2.5h-5V1.25h5V2.5Z" id="Fill"></path>
                        </svg>
                    </button>
                </td>
                <td class="w-[15%] pr-[20px]">
                    <button onclick="editNews(${item.id})" class="text-[12px] mt-[-8px]" id="btn3">Düzəliş 
                        <svg id="svg2" viewBox="0 0 512 512">
                            <path d="M410.3 231l11.3-11.3-33.9-33.9-62.1-62.1L291.7 89.8l-11.3 11.3-22.6 22.6L58.6 322.9c-10.4 10.4-18 23.3-22.2 37.4L1 480.7c-2.5 8.4-.2 17.5 6.1 23.7s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L387.7 253.7 410.3 231zM160 399.4l-9.1 22.7c-4 3.1-8.5 5.4-13.3 6.9L59.4 452l23-78.1c1.4-4.9 3.8-9.4 6.9-13.3l22.7-9.1v32c0 8.8 7.2 16 16 16h32zM362.7 18.7L348.3 33.2 325.7 55.8 314.3 67.1l33.9 33.9 62.1 62.1 33.9 33.9 11.3-11.3 22.6-22.6 14.5-14.5c25-25 25-65.5 0-90.5L453.3 18.7c-25-25-65.5-25-90.5 0zm-47.4 168l-144 144c-6.2 6.2-16.4 6.2-22.6 0s-6.2-16.4 0-22.6l144-144c6.2-6.2 16.4-6.2 22.6 0s6.2 16.4 0 22.6z"></path></svg>
                    </button>
                </td>
            </tr>
        `
    })
}
function deleteNews(id){
     fetch(`https://67ee3f33c11d5ff4bf78e031.mockapi.io/data/${id}`, {
        method:'DELETE'
     })
     .then(res => res.json())
     .then(mel => {
            const newData = data.filter(item => item.id != id)
            data.length = 0
            data.push(...newData)
            showAllNews()
     })
}

function addNews(){

    if(validation()) return;

    fetch(`https://67ee3f33c11d5ff4bf78e031.mockapi.io/data`, {
        method:'POST',
        headers: {
            "Content-type":"application/json",
        },
        body: JSON.stringify({
            title: inpTitle.value,
            description: inpDesc.value,
            img: inpImg.value,
            view: inpView.value,
            date: inpDate.value

        })
     }).then(res => res.json())
       .then(mel => {
        getAllNews()
        openModal()
        clearInps()
       })
}

function validation(){
    if (inpTitle.value.trim() == ""){
        inpTitle.focus()
        return true
    }
    if (inpDesc.value.trim() == ""){
        inpDesc.focus()
        return true
    }
    if (inpImg.value.trim() == ""){
        inpImg.focus()
        return true
    }
    if (inpView.value.trim() == ""){
        inpView.focus()
        return true
    }
    if (inpDate.value.trim() == ""){
        inpDate.focus()
        return true
    }
}

function clearInps(){
    modal.querySelectorAll("input").forEach(item => item.value  = "")
    inpDesc.value = ""
}

function editFetchNews(id){
    if(validation()) return;
    fetch(`https://67ee3f33c11d5ff4bf78e031.mockapi.io/data/${id}`, {
        method:'PUT',
        headers: {
            "Content-type":"application/json",
        },
        body: JSON.stringify({
            title: inpTitle.value,
            description: inpDesc.value,
            img: inpImg.value,
            view: inpView.value,
            date: inpDate.value

        })
     }).then(res => res.json())
       .then(mel => {
        getAllNews()
        openModal()
        clearInps()

        edit.innerHTML = "Yerləşdir"
        edit.onclick = addNews
       })
}

function editNews(id){
    openModal()
    edit.innerHTML = "Düzəlis et"
    edit.onclick = () => {
        editFetchNews(id)
    }   

    const elem = data.find(item => item.id == id)
    inpTitle.value = elem.title
    inpDesc.value = elem.description
    inpImg.value = elem.img
    inpDate.value = elem.date
    inpView.value = elem.view
}