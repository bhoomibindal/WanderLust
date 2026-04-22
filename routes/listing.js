const express = require("express");
const router = express.Router();
const wrapAsync = require("../utils/wrapAsync.js");
const ExpressError = require("../utils/ExpressError.js");
const { listingSchema} = require("../schema.js");
const listing = require("../models/listing.js");
const {isLoggedIn} = require("../middleware.js");


const validateListing = (req,res,next) => {
    let {error} = listingSchema.validate(req.body);
    if(error){
        let errMsg = error.details.map((el) => el.message).join(",");
        throw new ExpressError(400,errMsg);
    }else{
        next();
    }
}



router.get("/",wrapAsync(async(req,res)=>{
    const allListings = await listing.find({});
    res.render("listings/index.ejs",{allListings});
}));

router.get("/new",isLoggedIn,(req,res)=>{
    res.render("listings/new");
})

router.post("/",isLoggedIn,validateListing,wrapAsync(async(req,res,next)=>{
    // let {title,description,image,price,country,location} = req.body
    let result = listingSchema.validate(req.body);
    console.log(result);
    const newListing = new listing(req.body.listing);
    await newListing.save();
    req.flash("success","New Listing created!");

    res.redirect("/listings");
})
);
router.get("/:id",wrapAsync(async(req,res)=>{
    let {id} = req.params;
    const listingData = await listing.findById(id).populate("reviews");
    if(!listingData){
        req.flash("error","Listing you requested for does not exist!");
        return res.redirect("/listings");
    }
    res.render("listings/show",{listing: listingData});
}));

router.get("/:id/edit",isLoggedIn,wrapAsync(async(req,res)=>{
    let {id} = req.params;
    const listingData = await listing.findById(id);
     if(!listingData){
        req.flash("error","Listing you requested for does not exist!");
        return res.redirect("/listings");
    }
    res.render("listings/edit",{listing: listingData});
}));

router.put("/:id",isLoggedIn,validateListing,wrapAsync(async(req,res)=>{
    let {id} = req.params;
    await listing.findByIdAndUpdate(id,{...req.body.listing});
    req.flash("success","New Listing updated!");
    res.redirect(`/listings/${id}`);
}));

router.delete("/:id",isLoggedIn,wrapAsync(async(req,res) => {
    let {id} = req.params;
    let deletedListing = await listing.findByIdAndDelete(id);
    console.log(deletedListing);
    req.flash("success","New Listing Deleted!");
    res.redirect("/listings");
}));



module.exports = router;