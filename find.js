const cb = (x,y) => { 
    return (y === x);
}

function find(elements, cb,x){
    for (let i = 0; i < elements.length; i++) {
        if(cb(elements[i],x)){
         return (elements[i]);
        }
    }
    return undefined;
}

export {find,cb}
