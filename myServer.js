const express=require('express');
const http=require('http');
const serv=express();

// //first solution -----------------------------------------
// serv.get('/', (req,res)=>{
//     res.sendFile(__dirname + '/routes/home.html')
// })
// serv.get('/ourservices', (req,res)=>{
//     res.sendFile(__dirname + '/routes/ourservices.html')
// })
// serv.get('/contact', (req,res)=>{
//     res.sendFile(__dirname + '/routes/contact.html')
// })
// ----------------------------------------------------------

// second solution
// serv.get('/', (req,res)=>{
//         res.sendFile(__dirname + '/routes/home.html')
//     })
// serv.use(express.static(__dirname+'/routes'))
// ----------------------------------------------------------

// third solution -------------------------------------------
serv.get('/', (req,res)=>{
        res.sendFile(__dirname + '/routes/home.html')
    })
serv.get('/:name', (req,res)=>{
    if (req.params.name!==""){
        res.sendFile(__dirname + '/routes/'+req.params.name)
    }
        })

serv.listen(4000, (err)=>{
    err?console.log(err):console.log('server is running on localhost 4000')
})