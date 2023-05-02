import type { PageLoad } from "./$types";
import type { IP } from "../../lib/interface";

export const load: PageLoad = async (loadEvent) => {

 const {fetch} = loadEvent
    const res = await fetch("api/postcodes").then((res) => res.json())
    const list = res.map((p : IP) => {
        return `${p.post}, ${p.zip}`
    })
    return {list}
};