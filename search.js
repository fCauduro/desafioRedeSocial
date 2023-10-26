import {renderPosts} from "./script.js"
export function searchPost(){
    const posts =  JSON.parse(localStorage.getItem("@posts"))
    // console.log(posts)
    const input = document.querySelector("input")
    // console.log(input)
    input.addEventListener("input",()=>{
        let newList = []
        posts.forEach((item)=>{
            if(item.title.includes(input.value.toLowerCase())){
                newList.push(item)
            }
        })
        renderPosts(newList)
    })
}

