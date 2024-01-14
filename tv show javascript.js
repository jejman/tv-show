const form=document.querySelector("#form")
const jej=document.querySelector("#jej")
const button=document.querySelector("#button")
const c=document.querySelector("#c")



form.addEventListener("submit", async function(e){
    e.preventDefault()
    // console.log(form.nextElementSibling.querySelector.va)
    const userinput=form.elements.query.value
    const config={params:{q:userinput}}
    const res= await axios.get(`https://api.tvmaze.com/search/shows?`,config)
    makeimages(res.data)
    form.elements.query.value=""
    if(userinput===""){
        alert("Enter something")
    }
})



const makeimages=(shows)=>{
    for(let show of shows){
        if(show.show.image){
        const img=document.createElement("img")
        img.src=show.show.image.medium
         document.body.append(img)

    }

}
}

const deleteimage=()=>{
    const g=document.querySelectorAll("img")
    for (let index = 0; index < g.length; index++) {
          g[index].style.display="none"        
       }
}

c.addEventListener("click", deleteimage)