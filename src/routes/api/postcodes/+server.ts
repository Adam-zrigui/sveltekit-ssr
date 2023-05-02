import { json } from "@sveltejs/kit"
import holder from "../../../lib/instance"
import type { IP } from "../../../lib/interface"

export async function GET() {
    const res = (await holder.get("/postcode")).data
    const mapper  = res.map((i : IP) => {
return {
    post: i.post,
    zip: i.zip
}
    })
    return json(mapper)
}