import app from './entry.hono'
import { serveStatic } from 'hono/cloudflare-workers'

app.get('*', serveStatic({ root: './' }))

export default app
