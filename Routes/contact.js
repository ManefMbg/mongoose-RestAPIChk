
const express = require ('express');
const Contact = require('../models/Contact');


const router = express.Router();
//  Testing
router.get('/test',(req,res)=>{
    res.send("Hello world, I'm here!!!");
});
// Adding
router.post("/add", async (req,res)=>{
    try {
        const {name, email, phone} = req.body;
        const newContact = new Contact({name, email, phone});
        await newContact.save();
        res.status(200).send({ message:"Contact added successuflly", newContact});
    } catch (error) {
        res.status(400).send({message:"Can't added contact!!",error})
    }
});
// Get all
router.get('/all', async (req,res)=>{
    try {
        const listContact= await Contact.find();
        res.status(200)
        .send({msg: "Contacts received", listContact});            
    } catch (error) {
        res.status(400).send({msg:"Can't get, sorry!"});        
    }
});
// Get by Id
router.get('/:id', async (req,res)=>{
    try {
       const contactToGet = await Contact.findOne({_id: req.params.id});
       res.status(200).send({msg:"Contact received", contactToGet});
    } catch (error) {
        res.status(400).send({msg:"id doesn't exist", error});    
    }
});
// Delete 
router.delete('/:_id', async (req,res)=>{
    try {
       const { _id } = req.params;
       await Contact.findOneAndDelete({ _id });
       res.status(200).send({msg:"Contact deleted"});
    } catch (error) {
        res.status(400).send({msg:"Can't delete contact with this id !", error});    
    }
});
// Update
router.put('/:_id', async (req,res)=>{
    try {
       const { _id } = req.params;
       const result= await Contact.updateOne({ _id },{$set:{...req.body}});
       res.status(200).send({msg:"Contact updated"});
    } catch (error) {
        res.status(400).send({msg:"Can't update contact with this id !", error});    
    }
});


module.exports = router;