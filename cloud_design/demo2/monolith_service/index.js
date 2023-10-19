import express, { json } from 'express'
import os from 'os'

// Routes
import user from './routes/user'
import messaging from './routes/messaging'

const app = express()

// Body parser
app.use(json())

// Mount routers
app.use('/api/v1/user', user)
app.use('/api/v1/messaging', messaging)

// Add route so base API doesn't cause 4xx error
app.get('/', (req, res) => res.send('Ping "/" route'))

const PORT = process.env.PORT || 3000

app.listen(PORT, console.log(`Server running on port ${PORT}`))