const routes={
  '/':"/pages/home.html",
  "/universo":"/pages/oUniverso.html",
  "/exploracao":"/pages/exploracao.html",
  404:"/pages/404.html,"
}

function route(event){
  event= event || window.event
  event.preventDefault()
  window.history.pushState({}, "",event.target.href)
  handle()

}


function handle(){
  const {pathname}=window.location
  const route=routes[pathname] || routes[404]
  fetch(route)
    .then(data=>data.text())
    .then(html=>{
      document.getElementById("app").innerHTML=html
    })
}

window.route=()=>route()