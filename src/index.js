const path = require('path')
const express = require('express')
const app = express()
app.use(express.json())
app.use(express.static(__dirname + '/public'))
const port = process.env.PORT || 3000
app.listen(port, console.log("listening on port: "+port))

const hbs = require('hbs')
const views = path.join(__dirname,'/public/views')
const partials = path.join(__dirname,'/public/partials')
app.set('view engine', 'hbs')
app.set('views', views)
hbs.registerPartials(partials)

app.get('', async (req,res) => {
    try {
        res.render('home',{
            title:"home"
        })
    } catch (e) {
        console.log(e)
    }
})
app.get('/home', async(req,res) =>{
    try{
        return res.render('home')
    } catch (e) { console.log("error", e)}
})

app.get('/gallery', async (req,res) =>{
    try{
        return res.render('gallery')
    } catch (e) { console.log("error", e)}
})

app.get('/contact', async (req,res) =>{
    try{
        return res.render('contact')
    } catch (e) { console.log("error", e)}
})

app.get('/about', async (req,res) => {
    return res.render('about')
})

const pics = require('./public/api/imageFinder')

app.post('/gallery/construction', async (req,res) => {
    console.log(req.body.p)
    const dicPicks = await req.body.p

    try {
        const images = await pics.pics[dicPicks]
        return res.send(images)
    } catch (e) {
        return console.log(e)
    }
})
app.post('/gallery/pics', async (req,res) => {
    console.log(req.body)
    const whatPics = await req.body
    console.log(whatPics)
    try { 
            const deezePics = await whatPics.pics
            const unnecessary = await pics.pics[deezePics]
            console.log(unnecessary)
            res.send(unnecessary)
        } catch (e) {
            console.log(e)
            res.send(e).status(405)
        }
})


const mailer = require("nodemailer")

app.post('/mailer', async (req,res) => {
    const body = await req.body
    console.log(body)
    const email = body.email
    const phone = body.phone
    const firstName = body.firstName
    const lastName = body.lastName
    const subject = body.subject
    const msg = body.msg
    
    async function main() {
        const mail = await mailer.createTransport({
            host: "smtp.gmail.com",
            port: 587,
            secure:false,
            auth: {
                user: "that.one.guy.jim.though@gmail.com",
                pass: "toonnyy143",
            }
        })
        mail.sendMail({
            from:"JimboSlicey",
            to: email,            
            subject:"It works bitch",
            text: `Hi ${firstName}! I received your email about ${subject} and will contact you ASAP! If you don't hear from me in the next few business days, please reach out at +1 (508) 962 7183.
I'm excited to take a look!`,
            // html:
            
        },(err,res) => {
            if(err) {
                return console.log(err)
            }
            console.log(res)
        })
        mail.sendMail({
            from:"God",
            to:"that.one.guy.jim.though@gmail.com",
            subject:"MUHAHAHAHA IT WORKS BITCH",
            text: `Prospective client: ${lastName}, ${firstName}\n
            phone: ${phone}\n
            email: ${email}\n
            subject: ${msg}\n
            message: ${msg}`
        },(err,res) => {
        if(err) {
            return console.log(err)
        }
        console.log(res)
    })
    }
    try { 
        await main()

    } catch (e) {
        console.log(e)
    }
})



console.log(__dirname)

console.log(pics.pics)

