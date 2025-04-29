async function useGetAllNews(){
   const res = await fetch("https://67ee3f33c11d5ff4bf78e031.mockapi.io/data")
   return await res.json()
}

async function useDeleteNews(id){
   const res = await fetch(`https://67ee3f33c11d5ff4bf78e031.mockapi.io/data/${id}`, {
        method:'DELETE'
      })
   return await res.json()
}
async function useAddNews(item){
   const res = fetch(`https://67ee3f33c11d5ff4bf78e031.mockapi.io/data`, {
      method:'POST',
      headers: {
          "Content-type":"application/json",
      },
      body: item
   })
   return await (res => res.json())
}
async function useEditNews(id,item){
   const res = await fetch(`https://67ee3f33c11d5ff4bf78e031.mockapi.io/data/${id}`, {
      method:'PUT',
      headers: {
          "Content-type":"application/json",
      },
      body: item
   })
   return await (res => res.json())
}
