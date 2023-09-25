

const home= document.getElementById("home")
const universe=document.getElementById("universe")
const explore=document.getElementById("explore")
const element = document.getElementById("buttonUniverse");

export class Router{
 
  routes={}

  add(routerName,page){
    this.routes[routerName]=page
  }

  route(event){
    event= event || window.event
    event.preventDefault()
    window.history.pushState({}, "",event.target.href)


    this.handle()
  }

  handle(){
    const {pathname}=window.location
    const route=this.routes[pathname] || this.routes[404]
    console.log(element)
    //bold fixed in nav elements
    if(route.includes("exploracao")){
      home.classList.remove("clicked")
      universe.classList.remove("clicked")
      explore.classList.add("clicked")
      console.log("Estou em explorar")

    }else if(route.includes("Universo")){
      console.log("Estou em universo")
      home.classList.remove("clicked")
      universe.classList.add("clicked")
      explore.classList.remove("clicked")
    }else{
      console.log("estou em home")
      home.classList.add("clicked")
      universe.classList.remove("clicked")
      explore.classList.remove("clicked")
    }
    //console.log(pathname)
    //console.log(route)


    fetch(route)
    .then(data=>data.text())
    .then(html=>{
      document.getElementById("app").innerHTML=html
    })
  }
}

