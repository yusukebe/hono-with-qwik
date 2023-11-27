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

#### ⚠️ Error: Something went wrong installing the "sharp" module

If you run into the error `Something went wrong installing the "sharp" module` when using bun as a package manager, try to fix it with the following command:

```sh
npm rebuild --verbose sharp
```

This is currently being tracked [here](https://github.com/oven-sh/bun/issues/3783).

## Author

Yusuke Wada <https://github.com/yusukebe

## License

MIT