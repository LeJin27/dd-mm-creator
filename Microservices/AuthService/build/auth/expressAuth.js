"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.expressAuthentication = expressAuthentication;
function expressAuthentication(request, scopes) {
    return Promise.resolve({ id: "test", roles: "admin" });
}
