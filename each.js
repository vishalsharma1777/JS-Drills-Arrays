const cb = (x) => { 
    console.log(x+2);
}

function each(elements, cb){
    for (let i = 0; i < elements.length; i++) {
        cb(elements[i]);
    }
}

export {cb,each}
