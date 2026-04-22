const express = require("express");
const router = express.Router({mergeParams:true});
const Review = require("../models/review.js");
const wrapAsync = require("../utils/wrapAsync.js");
const ExpressError = require("../utils/ExpressError.js");
const { reviewSchema} = require("../schema.js");
const listing = require("../models/listing.js");

const validateReview = (req,res,next) => {
    let {error} = reviewSchema.validate(req.body);
    if (error) {
        let errMsg = error.details.map((el) => el.message).join(",");
        throw new ExpressError(400,errMsg);
    }else{
        next();
    }
}

router.post("/",validateReview,wrapAsync(async(req,res)=>{
    console.log(req.params.id);
    let listingData = await listing.findById(req.params.id);
    let newReview = new Review(req.body.review);
    listingData.reviews.push(newReview);
    await newReview.save();
    await listingData.save();
    req.flash("success","New Listing created!");
    res.redirect(`/listings/${listingData._id}`);
}));

router.delete("/:reviewId",wrapAsync(async(req,res)=>{
    let {id,reviewId} = req.params; 
    await listing.findByIdAndUpdate(id,{$pull: {reviews: reviewId}});
    await Review.findByIdAndDelete(reviewId);
    req.flash("success","New Listing deleted!");
    res.redirect(`/listings/${id}`);
}));

module.exports = router;