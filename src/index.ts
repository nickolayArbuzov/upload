import { app } from './app'

const port = 7777

const startServer = async () => {
    return app.listen(port, () => {
        console.log(`App listening on port ${port}`)
    })
}

startServer()