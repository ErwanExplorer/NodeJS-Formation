import { createReadStream, createWriteStream } from 'node:fs'

const stream = createReadStream('video.mp4')
const writeStreeam = createWriteStream('video-copy.mp4')
stream.pipe(writeStreeam)