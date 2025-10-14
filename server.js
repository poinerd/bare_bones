import http from 'http'
let PORT = 8000


let contentPage =`
<div>
<h1> This is a page I love</h1>
<button>Click this button</button>
</div>
`

const server = http.createServer((req, res)=>{
//    res.setHeader()
//    res.write()
   res.writeHead(500, {'Content-Type': 'application/json'})
   res.end(JSON.stringify({'message': 'Server Error'}))
})


server.listen(PORT, ()=>{
    console.log(`Server is running om port ${PORT}....`)
})