"use strict";

module.exports = (() => {
    let fs = require('fs.extra');

    return {
        F_OK: fs.F_OK,
        R_OK: fs.R_OK,
        W_OK: fs.W_OK,
        X_OK: fs.X_OK,
        copyRecursive: function (from, to) {
            return new Promise((resolve, reject) => {
                fs.copyRecursive(from, to, (err) => {
                    if (err) {
                        reject(err);
                    }

                    resolve();
                });
            });
        },
        rmrf: function (dir) {
            return new Promise((resolve, reject) => {
                fs.rmrf(dir, (err) => {
                    if (err) {
                        reject(err);
                    }

                    resolve();
                });
            });
        },
        rename: function (oldPath, newPath) {
            return new Promise((resolve, reject) => {
                fs.rename(oldPath, newPath, (err) => {
                    if (err) {
                        reject(err);
                    }

                    resolve();
                });
            });
        },
        writeFile: function (file, data, options) {
            return new Promise((resolve, reject) => {
                fs.writeFile(file, data, options, (err) => {
                    if (err) {
                        reject(err);
                    }

                    resolve();
                });
            });
        },
        readdir: function (path) {
            return new Promise((resolve, reject) => {
                fs.readdir(path, (err, names) => {
                    if (err) {
                        reject(err);
                    }

                    resolve(names);
                });
            });
        },
        unlink: function (path) {
            return new Promise((resolve, reject) => {
                fs.unlink(path, (err) => {
                    if (err) {
                        reject(err);
                    }

                    resolve();
                });
            });
        },
        createWriteStream: function (path, options) {
            return fs.createWriteStream(path, options);
        },
        access: function (path, mode) {
            return new Promise((resolve, reject) => {
                fs.access(path, mode, (err) => {
                    if (err) {
                        reject(err);
                    }

                    resolve();
                });
            });
        },
        mkdirp: function (path) {
            return new Promise((resolve, reject) => {
                fs.mkdirp(path, (err) => {
                    if (err) {
                        reject(err);
                    }

                    resolve();
                });
            });
        },
        readlink: function (path) {
            return new Promise((resolve, reject) => {
                fs.readlink(path, (err, link) => {
                    if (err) {
                        reject(err);
                    }

                    resolve(link);
                });
            });
        },
        lstat: function (path) {
            return new Promise((resolve, reject) => {
                fs.lstat(path, (err, stats) => {
                    if (err) {
                        reject(err);
                    }

                    resolve(stats);
                });
            });
        },
        stat: function (path) {
            return new Promise((resolve, reject) => {
                fs.stat(path, (err, stats) => {
                    if (err) {
                        reject(err);
                    }

                    resolve(stats);
                });
            });
        },
        readfile: function (path) {
            return new Promise((resolve, reject) => {
                fs.readfile(path, (err, data) => {
                    if (err) {
                        reject(err);
                    }

                    resolve(data);
                });
            });
        }
    };
})();