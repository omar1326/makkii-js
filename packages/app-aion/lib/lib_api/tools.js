"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function addressFormat(address) {
    let address1 = address.toLowerCase();
    address1 = address1.startsWith("0x") ? address1 : `0x${address1}`;
    return address1;
}
function sameAddress(address1, address2) {
    return addressFormat(address1) === addressFormat(address2);
}
exports.sameAddress = sameAddress;
//# sourceMappingURL=tools.js.map