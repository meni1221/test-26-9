import exp ,{Express}  from 'express'
//loes enviroment variables
import  'dotenv/config'


import beeperController from './src/controllers/beeperController'

const app:Express = exp()

app.use(exp.json())
app.use("/Beepers",beeperController)

app.listen(process.env.PORT, ():void => console.log(`see you at http::localhost:${process.env.PORT}`))