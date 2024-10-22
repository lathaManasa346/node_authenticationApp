//@desc get all contacts
//@route Get/api/contacts
//@access public


const asyncHandler = require("express-async-handler");
const getContact = asyncHandler(async(req,res)=>{
    res.status(200).json({message:"Get all contacts"})
})


const createContact = asyncHandler(async(req,res)=>{
    console.log("Req of post : ", req.body);
    const {name,email, phoneNum} = req.body;
    if(!name ||!email|| !phoneNum){
        res.status(400);
        throw new Error("All fields are mandatory")
    }
    res.status(201).json({message: "create contact"})
});

const getIndividualContact =asyncHandler( async(req,res)=>{
    res.status(200).json({message: `Get contact for ${req.params.id}` })
});

const updateContact = asyncHandler(async(req,res)=>{
    res.status(200).json({message: `update contact for ${req.params.id}`})
});

const deleteContact = asyncHandler(async(req,res)=>{
    res.status(200).json({message: `Delete contact for ${req.params.id}`})
});

module.exports = { getContact, createContact, getIndividualContact, updateContact, deleteContact }