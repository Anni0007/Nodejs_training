const { resolveSoa } = require('dns')
const http = require('http')

const server = http.createServer((req,res)=>{
    if(req.url === '/'){
        res.end("welcome to our homepage")
    }
    if(req.url === '/about'){
        res.end("here is about page")
    }
    else{
        res.end(
        `<h1> Oops</h1>
        <p>The page you are lookin for is not available</p>`
        )
    }
})

server.listen(5000)