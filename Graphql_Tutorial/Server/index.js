const express=require('express')
const {ApolloServer}=require('@apollo/server')
const {expressMiddleware}=require('@apollo/server/express4')
const bodyParser=require('body-parser')
const cors=require('cors')
const { default: axios } = require('axios')
const {USER}=require('../../Graphql_Tutorial/Client/client/Component/user')
const {TODO}=require('../../Graphql_Tutorial/Client/client/Component/todo')



async function startServer(){
    const app=express()
    const server=new ApolloServer({
        typeDefs:`
        type Users{
            id:ID!
            name:String!
            username:String!
            email:String!
            phone:String!
            website:String!
        }
        type Todo{
            id:ID!
            title:String!
            completed:Boolean
            userId:ID!
            user:Users
        }
        type Query{
            getTodo:[Todo]
            getAllUsers:[Users]
            getUser(id:ID!):Users
        }`,
        resolvers:{
            Todo:{
                user:(todo)=>USER.find((e)=>e.id===todo.id),
            },
            Query:{
                getTodo: ()=>TODO,
                getAllUsers:()=>USER,
                getUser:async()=> (parent,{id})=>USER.find((e)=>e.id===id)

            }
        }
    })
    app.use(bodyParser.json())
    app.use(cors())
    await server.start()
    app.use("/graphql",expressMiddleware(server))
    app.listen(9000,()=>console.log("server started at PORT 9000"))
}

startServer()