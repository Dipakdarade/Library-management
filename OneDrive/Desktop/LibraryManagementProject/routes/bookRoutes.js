const express = require('express');
const router = express.Router();
const Book = require('../models/bookModel');

router.get('/books', async (req, res) => {

    try {
        const books = await Book.find({});
        res.render('index', { books });
    } catch (error) {
        console.log("Error fetching books: ", error);
        res.status(500).send("Error fetching books");
    }
});
router.get('/new',async(req,res)=>{
    const books = await Book.find({})
    res.render('new',{books});
})
router.post('/books',async(req,res)=>{
    // console.log(req.body)
    try {
        Book.create(req.body);
        res.redirect('/books');
        req.flash('success','new Book Added!')
    } catch (error) {
        req.flash('error','Error Adding new book')
        res.redirect('/books');

        
    }
   
})
router.get('/books/:id/edit',async(req,res)=>{
    const {id} = req.params;
   const book =  await Book.findById(id);
    res.render('edit',{book})
})

router.post('/books/:id/edit', async (req, res) => {
    const { id } = req.params;
    const { title, author, date } = req.body;
    try {
        await Book.findByIdAndUpdate(id, {
            Title: title,
            Author: author,
            Date: date
        
        });
        res.redirect('/books');
        req.flash('success','Book Updated Successfully')
    } catch (error) {

        req.flash('error','Book Not Updated ')
    }
});

router.get('/books/:id',async(req,res)=>{
    const {id} = req.params;
    try {
        await Book.findByIdAndDelete(id);
        res.redirect('/books');
    } catch (error) {
        res.send('You cannot delete book')

        
    }
   

})

module.exports = router;
