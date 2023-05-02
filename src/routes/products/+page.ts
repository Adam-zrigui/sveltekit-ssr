import Product from './Product.svelte'

export async  function load(LoadEvent) {
    console.log("1")
    const { data} = LoadEvent
return {
...data,
Component: Product,
banner:'yes da banner'
  }
}
export const prerender = true


