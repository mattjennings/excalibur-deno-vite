/// <reference lib="deno.ns" />
import { Hono } from "jsr:@hono/hono@4.6.19"
import { serveStatic } from 'jsr:@hono/hono@4.6.19/deno'

const app = new Hono()

app.use('*', serveStatic({ root: import.meta.dirname + '/dist/web' }))
app.get('*', serveStatic({ path: import.meta.dirname + '/dist/web/index.html' }))
Deno.serve(app.fetch)