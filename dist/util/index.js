/*
 * Copyright 2024 Hypermode, Inc.
 * Licensed under the terms of the Apache License, Version 2.0
 * See the LICENSE file that accompanied this code for further details.
 *
 * SPDX-FileCopyrightText: 2024 Hypermode, Inc. <hello@hypermode.com>
 * SPDX-License-Identifier: Apache-2.0
 */
import { spawnSync } from "node:child_process";
import { createWriteStream, existsSync, mkdirSync } from "node:fs";
import path from "node:path";
import { CLI_VERSION } from "../custom/globals.js";
import chalk from "chalk";
import { Readable } from "node:stream";
import { finished } from "node:stream/promises";
import { rm } from "node:fs/promises";
export async function ensureDir(dir) {
    if (!existsSync(dir))
        mkdirSync(dir, { recursive: true });
}
// Expand ~ to the user's home directory
export function expandHomeDir(filePath) {
    if (filePath.startsWith("~")) {
        return path.join(process.env.HOME || "", filePath.slice(1));
    }
    return filePath;
}
export function isRunnable(cmd) {
    const shell = spawnSync(cmd);
    if (!shell)
        return false;
    return true;
}
export async function cloneRepo(url, pth) {
    // should download .zip curl https://github.com/<org>/<repo>/archive/refs/heads/<branch>.zip
    // or download a release
    return true;
}
export function ask(question, rl, placeholder) {
    return new Promise((res, _) => {
        rl.question(question + (placeholder ? " " + placeholder + " " : ""), (answer) => {
            res(answer);
        });
    });
}
export function clearLine() {
    process.stdout.write(`\u001B[1A`);
    process.stdout.write("\u001B[2K");
    process.stdout.write("\u001B[0G");
}
export function getAvailablePackageManagers() {
    const pkgMgrs = [];
    if (isRunnable("npm"))
        pkgMgrs.push("NPM");
    if (isRunnable("yarn"))
        pkgMgrs.push("Yarn");
    if (isRunnable("pnpm"))
        pkgMgrs.push("PNPM");
    if (isRunnable("bun"))
        pkgMgrs.push("Bun");
    return pkgMgrs;
}
export function getLatestCLI() {
    // implement logic later
    return CLI_VERSION;
}
export function checkVersion(instance) {
    const outdated = false;
    if (outdated) {
        console.log(chalk.bgBlueBright(" INFO ") + chalk.dim(": You are running an outdated version of the Modus SDK! Please set your sdk version to stable"));
    }
}
export async function downloadFile(url, dest) {
    const res = await fetch(url);
    if (!res.ok) {
        console.log(chalk.red(" ERROR ") + chalk.dim(": Could not download latest! Please check your internet connection and try again."));
        process.exit(0);
    }
    if (existsSync(dest))
        await rm(dest, { recursive: true });
    const fileStream = createWriteStream(dest, { flags: 'wx' });
    // @ts-ignore
    await finished(Readable.fromWeb(res.body).pipe(fileStream));
}
;
