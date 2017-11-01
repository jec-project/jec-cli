"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const download = require("download-package-tarball");
class TarballUtil {
    constructor() { }
    download(url, output, callback) {
        download({ url: url, dir: output }).then(() => {
            callback(null);
        }).catch(err => {
            callback(err);
        });
    }
}
exports.TarballUtil = TarballUtil;
