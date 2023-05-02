import type { PageLoad } from "./$types";

export const load: PageLoad = async (l) => {
    const {fetch ,parent } = l
    const d = await parent()
    const { username} = d
    const resp = await fetch("http://localhost:4000/featured-products")
    const res = await resp.json()
    return {
        res,
        username
    }
};
