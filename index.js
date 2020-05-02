const loader = require("@assemblyscript/loader");

var myModule;

const myImports = {
    env: {
        print(message) {
            document.body.innerText += myModule.__getString(message) + "\n";
        }
    }
};

(async function() {
    myModule = await loader.instantiate(
        fetch("/build/optimized.wasm"),
        myImports
    );
    const { add, start, __allocString } = myModule;
    var msgPtr = __allocString("GLaDOS");
    document.body.innerText += add(10, 15) + "\n";
    start(msgPtr);
})();