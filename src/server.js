import Hapi from '@hapi/hapi'

const start = async () => {
    const server = Hapi.server( {
        port: 8000,
        host: 'localhost',
    })

    server.route({
        method: 'GET',
        path: '/hello',
                    
//callback
        handler: (req, h)  => {
            return 'Hello!'
            //return h.response('Hello').code(201)
        }
    })

    await server.start()
    console.log(`server is listening on ${server.info.uri}`)

}
process.on('unhandledRejection', err => {
    console.log(err)
    process.exit(1)
})

start()