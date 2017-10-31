"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const download = require("download-package-tarball");
class TarballUtil {
    constructor() { }
    download(url, output, callback) {
        download({ url: url, dir: output }).then(() => {
            console.log('file is now downloaded!');
            callback(null);
        }).catch(err => {
            console.log('oh crap the file could not be downloaded properly');
            console.log(err);
            callback(err);
        });
    }
}
exports.TarballUtil = TarballUtil;
