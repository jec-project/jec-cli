//  DO NOT ALTER OR REMOVE COPYRIGHT NOTICES OR THIS HEADER.
//
//   Copyright 2016-2018 Pascal ECHEMANN.
//
//   Licensed under the Apache License, Version 2.0 (the "License");
//   you may not use this file except in compliance with the License.
//   You may obtain a copy of the License at
//
//       http://www.apache.org/licenses/LICENSE-2.0
//
//   Unless required by applicable law or agreed to in writing, software
//   distributed under the License is distributed on an "AS IS" BASIS,
//   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
//   See the License for the specific language governing permissions and
//   limitations under the License.

import * as childProcess from "child_process";
import {CliLogger, ConsoleCliLogger} from "jec-tool-cli";

//--> Stream events constants:
const DATA:string = "data";
const EXIT:string = "exit";
const NPM_WARN:string = "npm";
const WARN:string = "WARN";
const TS_BUILD:string = "ts:build";
const BUILD_DIRS_TASK:string = "running new task: BuildDirsTask";
const COPY_CONFIG_FILES_TASK:string = "running new task: CopyConfigFilesTask";
const COPY_DIRS_TASK:string = "running new task: CopyDirsTask";
const BUILD_CONSOLE_TASK:string = "running new task: BuildConsoleTask";
const WEBAPP:string = "webapp";
const SKIPPING_OPTIONAL_DEPENDENCY:string = "SKIPPING OPTIONAL DEPENDENCY";

/**
 * The <code>GlassCatNpmInstaller</code> class allows to manage the GlassCat
 * server npm install command.
 */
export class GlassCatNpmInstaller {
  
  //////////////////////////////////////////////////////////////////////////////
  // Constructor function
  //////////////////////////////////////////////////////////////////////////////

  /**
   * Creates a new <code>GlassCatNpmInstaller</code> instance.
   */
  constructor() {}

  //////////////////////////////////////////////////////////////////////////////
  // Public methods
  //////////////////////////////////////////////////////////////////////////////

  /**
   * Runs the <code>npm install</code> command to install GlassCat dependencies.
   * If an error occurs during this operation, a warning message is displayed in
   * the output.
   * 
   * @param {Function} callback the callback function called when installation
   *                            is complete.
   */
  public install(callback:Function):void {
    let logger:CliLogger = ConsoleCliLogger.getInstance();
    let execProcess:childProcess.ChildProcess = null;
    let message:string = null;
    logger.action("Installing packages for tooling via npm.");
    execProcess = childProcess.exec("npm install");
    execProcess.stdout.on(DATA, function(data:any) {
      message = String(data);
      if(message.indexOf(TS_BUILD) !== -1) {
        logger.verb("compile", "compiling TypeScript files");
      } else if(message.indexOf(BUILD_DIRS_TASK) !== -1) {
        logger.verb("build", "creating server directories");
      } else if(message.indexOf(COPY_CONFIG_FILES_TASK) !== -1) {
        logger.verb("build", "copying config files");
      } else if(message.indexOf(COPY_DIRS_TASK) !== -1) {
        logger.verb("build", "copying core directories");
      } else if(message.indexOf(BUILD_CONSOLE_TASK) !== -1) {
        logger.verb("build", "installing packages for admin console via npm");
      } else if(message.indexOf(WEBAPP) !== -1) {
        logger.verb("build", "installed packages for admin console via npm");
      }
    });
    execProcess.stderr.on(DATA, function(err:any) {
      message = String(err);
      if( message.indexOf(NPM_WARN) !== -1 ||
          message.indexOf(WARN) !== -1 ||
          message.indexOf(SKIPPING_OPTIONAL_DEPENDENCY) !== -1) return;
      logger.warn(err);
    });
    execProcess.on(EXIT, function(code:number, signal:string) {
      logger.action("Installed packages for tooling via npm.");
      callback();
    });
  }
}