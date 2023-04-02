# Hono🔥 meets Qwik ⚡️

Qwik City works on Cloudflare Workers and Bun with Hono / Qwik middleware.

It's middleware, so you can integrate Qwik into Hono ultra easily!

```ts
import qwikCityPlan from '@qwik-city-plan'
import render from './entry.ssr'
import { qwikMiddleware } from '@hono/qwik-city'
import { logger } from 'hono/logger'

import { Hono } from 'hono'

const app = new Hono()
app.get('*', logger())

app.get('*', qwikMiddleware({ render, qwikCityPlan }))

export default app
```

## Author

Yusuke Wada <https://github.com/yusukebe

## License

MIT