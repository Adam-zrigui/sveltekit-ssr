
export async  function load(serverLoadEvent) {
    console.log("2")
    const {fetch} = serverLoadEvent
const resp = await fetch("http://localhost:4000/products")
const res = resp.json()
return {
res,

  }
}
