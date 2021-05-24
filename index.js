import 'regenerator-runtime/runtime'

import wasmFile from "./dist/module.WASM";
const loader = require("@assemblyscript/loader");

var myModule;

const myImports = {
    env: {
        print(message) {
            document.body.innerText += myModule.exports.__getString(message) + "\n";
        }
    }
};

(async function() {
    const data = await fetch(wasmFile);
    const arraybuffer = await data.arrayBuffer();
    myModule = await loader.instantiate(
        arraybuffer,
        myImports
    );
    const { add, start, __newString, __getString } = myModule.exports;
    var msgPtr = __newString("GLaDOS");
    document.body.innerText += add(10, 15) + "\n";
    start(msgPtr);
})();