import {searchPost} from "./search.js"
async function main(){
    const response = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=10&_page=1")
    const resJson = await response.json()

    renderPosts(resJson)
    localStorage.setItem("@posts",JSON.stringify(resJson))
    // console.log(resJson)
}
main()
export function renderPosts(list=[]){
    const ul = document.querySelector("ul")
    ul.innerHTML = ""
    list.forEach((item)=>{
        ul.insertAdjacentHTML("beforeend",`
    <li>
        <h3>${item.title}</h3>
        <p>${item.body}</p>
    </li>
    `)
    })
}
searchPost()