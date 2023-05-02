import {  redirect } from '@sveltejs/kit'

export async  function load(serverLoadEvent) {
    const {fetch , params} = serverLoadEvent
    if (parseInt(params.id) > 3) throw redirect(307 , '/products')
const resp = await fetch(`http://localhost:4000/products/${params.id}`)
const res = resp.json()
return {
res,
banner: '50% OFF'
  }
}
export const prerender = true