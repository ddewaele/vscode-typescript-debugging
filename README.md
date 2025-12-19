# VSCode Typescript Debugging

Simple typescript project to demonstrate typescript debugging in VSCode

![alt text](image.png)

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

This assumes that `tsx` is available in your package.json.
It enables sourcemaps





# References

- [VSCode copilot keyboard shortcuts](https://code.visualstudio.com/docs/copilot/reference/copilot-vscode-features)
- [Typescript tutorial](https://code.visualstudio.com/docs/typescript/typescript-tutorial)


