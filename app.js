
const express = require("express")
const app =express();

const pagesRouter = require("./router/pages")
const filesRouter = require("./router/files")
const contactsRouter = require("./router/contacts")
const compsRouter = require("./router/comps")


 app.use('/pages',pagesRouter)
 app.use('/files',filesRouter)
 app.use('/contacts',contactsRouter)
 app.use('/comps',compsRouter)


app.listen(8000,()=>console.log("listning to port 8000...."))