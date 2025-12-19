# VSCode Typescript Debugging

Simple typescript project to demonstrate typescript debugging in VSCode.

As you can see here, stepping into third party libraries should lead to us stepping into the typescript sources of thoese libraries providing everything is setup correctly.

![alt text](image.png)

# Projecr setup

There are 2 ways to create javascript / typescript projects.

- CommonJS (Node convention)
- ESM (ECMAScript language feature)


## CommonJS

CommonJS (CJS) is the module system invented by Node.
Focussed on the server side.


### package.json

If you don't specify a `type` in your `package.json` it will default to `commonjs`


### tsconfig.json


```
{
    "compilerOptions": {
        "target": "ES2022",
        "module": "commonjs",
        "moduleResolution": "node",
        "strict": true,
        "skipLibCheck": true,
        "sourceMap": true,
        "outDir": "dist",
    },
    "include": [
        "src"
    ]
}
```

## ESM

ES Modules (ESM) is an official JavaScript feature defined in the ECMAScript spec
It is a lot broaster than the pure NodeJS CommonJS. ESM works in browsers , Node , Bun , Deno , ...



### package.json



### tsconfig.json



## VSCode Launch Config

### TSX

TSX allows you to run typescript files directly
According to the [TSX VSCode docs](https://tsx.is/vscode) you create a launch configuration that you can operate on the "current open file"

The launch config looks like this

```json
{
    "name": "tsx",
    "type": "node",
    "request": "launch",
    "program": "${file}",
    "runtimeExecutable": "tsx",
    "console": "integratedTerminal",
    "internalConsoleOptions": "neverOpen",
    "skipFiles": [
        "<node_internals>/**",
    ],
    "sourceMaps": true,
    "resolveSourceMapLocations": [
        "${workspaceFolder}/**",
    ],
},
```

- This assumes that `tsx` is available in your package.json.
- This will launch `tsx` on the currently opened file (just hit F5 and your debug session will start)
- It enables sourcemaps and provides a path where to resolve these source maps


# References

- [VSCode copilot keyboard shortcuts](https://code.visualstudio.com/docs/copilot/reference/copilot-vscode-features)
- [Typescript tutorial](https://code.visualstudio.com/docs/typescript/typescript-tutorial)


