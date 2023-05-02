import { json } from "@sveltejs/kit";
import type { RequestHandler } from "../postcodes/$types";

export const GET = (() => {
    console.log("first")
    return json(new Date().toLocaleTimeString())
}) satisfies RequestHandler;
export const prerender = true