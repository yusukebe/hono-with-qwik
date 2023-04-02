import app from './entry.hono'
import { serveStatic } from 'hono/bun'

app.get('*', serveStatic({ root: './dist' }))

export default app
