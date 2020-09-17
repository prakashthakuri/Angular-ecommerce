import { addViewToListingRoute } from "./addViewToListing";
import { createNewListingRoute } from "./createNewListing";
import { DeleteListingRoute } from "./deleteListing";
import { getAllListingsRoute } from "./getAllListing";
import { getListingRoute } from "./getListing";
import { getUserListingRoute } from "./getUserListing";
import { UpdateListingRoute } from "./updateListing";


export default [
    getAllListingsRoute,
    getListingRoute,
    addViewToListingRoute,
    getUserListingRoute,
    createNewListingRoute,
    UpdateListingRoute,
    DeleteListingRoute,

]