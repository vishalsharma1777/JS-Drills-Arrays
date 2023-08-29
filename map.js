const cb = (x) => { 
    return (x*2);
}

function map(elements, cb){
    const result = [];
    for (let i = 0; i < elements.length; i++) {
        result.push(cb(elements[i]));
    }
    return result;
}

export {map,cb}
