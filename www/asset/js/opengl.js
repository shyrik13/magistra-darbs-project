import * as wasm from "my-rust";

var teaser_ctx = null;

const tick_teaser = () => {
    teaser_ctx.draw();
    requestAnimationFrame(tick_teaser);
}

function start() {
    if (teaser_ctx == null) {
        teaser_ctx = wasm.Context.new();
    }
    requestAnimationFrame(tick_teaser);
}

start();

console.log("OpenGL");