const { default: mongoose } = require("mongoose");
const Book = require('./models/bookModel');

mongoose.connect('mongodb://localhost:27017/LibManageDB')
.then(()=>{console.log('DB Connected!')})
.catch((e)=>{console.log(e)})

const bookData = [{
    Title:'The Heaven',
    Author:'Myself'},
    {

        Title:'The Hell',
        Author:'Myself',
    },
    {

        Title:'The Hajardous',
        Author:'Myself',
    },{

        Title:'The poison',
        Author:'Myself',
    }
    


]
async function seedDB(){
    await Book.deleteMany({});
    await Book.insertMany(bookData);
    console.log('DB seeded!');
}

seedDB();