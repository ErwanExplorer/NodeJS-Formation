import { createReadStream } from 'node:fs'
import { createServer } from 'node:http'
import { text } from 'stream/consumers'

const ports = 8000
const host = `https://localhost:${ports}`

console.log(`Server is running on ${host}`)
const server = createServer(async (req, res) => {
    const file = createReadStream('index.html')
    res.writeHead(200, { 'Content-Type': 'text/html' })
    file.pipe(res)
    //res.write(`Bonjour ${url.searchParams.get('name')}`)
})
server.listen(ports)