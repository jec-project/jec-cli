"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const TarballUtil_1 = require("../../utils/TarballUtil");
const fs = require("fs-extra");
const path = require("path");
const childProcess = require("child_process");
class GlassCatInstall {
    constructor() { }
    run(argv) {
        let currentPath = process.cwd();
        let util = new TarballUtil_1.TarballUtil();
        let execProcess = null;
        let tmpFolder = "jec-glasscat";
        util.download("https://registry.npmjs.org/jec-glasscat/-/jec-glasscat-0.0.7.tgz", currentPath, (e) => {
            if (e === null) {
                fs.copy(path.join(currentPath, tmpFolder), currentPath, err => {
                    if (err)
                        return console.error(err);
                    console.log('success!');
                    fs.remove(tmpFolder).then(() => {
                        console.log('temp folder removed');
                    }).catch((reason) => {
                        console.log('temp folder not removed:' + reason);
                    });
                    execProcess = childProcess.exec("npm install");
                    execProcess.stdout.on("data", function (data) {
                        console.log(data);
                    });
                    execProcess.stderr.on("data", function (data) {
                        console.log(data);
                    });
                    execProcess.on("exit", function (code, signal) {
                        console.log('child process exited with ' +
                            `code ${code} and signal ${signal}`);
                    });
                });
            }
        });
    }
}
exports.GlassCatInstall = GlassCatInstall;
