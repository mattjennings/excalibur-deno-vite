# Excalibur + Deno + Vite

An example of using Excalibur with Deno and Vite.

### Usage

Make sure to install Deno: https://deno.land/manual/getting_started/installation

Then start the project:

```
deno task dev
```

### Building

#### Web

```
deno task build:web
```

Built files are in the `dist` directory and can be served statically.

#### Mac/Windows

```
deno task build:mac
deno task build:windows
```

App will be in dist/mac or dist/windows. This uses a native webview to run the web build.