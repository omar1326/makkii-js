const bs58check = require('../lib_keystore/node_modules/bs58check');
const longToByteArray =  (long) => {
    // we want to represent the input as a 8-bytes array
    let byteArray = [0, 0, 0, 0, 0, 0, 0, 0];

    for (let index = 0; index < byteArray.length; index++) {
        let byte = long & 0xff;
        byteArray[ index ] = byte;
        long = (long - byte) / 256
    }

    return byteArray
};

function base58check2HexString(str) {
    return bs58check.decode(str).toString('hex');
}

function ab2str(buf) {
    return String.fromCharCode.apply(null, new Uint16Array(buf));
}


function deepMergeObject (obj1, obj2){
    Object.keys(obj2).forEach(key=> {
        obj1[key] = obj1[key] && obj1[key].toString() === "[object Object]" ?
            deepMergeObject(obj1[key], obj2[key]) : obj1[key] = obj2[key];
    });
    return obj1;
}

export {
    hmacSha512,
    longToByteArray,
    base58check2HexString,
    deepMergeObject,
    ab2str
};
