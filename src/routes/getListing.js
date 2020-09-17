// import { fakeListings } from "./fake-data"
import  Boom  from "@hapi/boom"
import { db } from "../database"



export const getListingRoute = {
    method: 'GET',
    path: '/api/listings/{id}',
    handler: async (req, h) => {
        const id = req.params.id

        const {results} = await db.query (
            'SELECT * FROM listings WHERE id=?',
            [id],
        )
        const listing = results[0];
        // const listing = db.find(listing => listing.id === id)
        if(!listing) {
            throw Boom.notFound(`Listing does not exisit with ${id}`)
        }
            return listing
    }
}
