//  DO NOT ALTER OR REMOVE COPYRIGHT NOTICES OR THIS HEADER.
//
//   Copyright 2016-2017 Pascal ECHEMANN.
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

import {CliLogger} from "../../../utils/CliLogger";
import * as fs from "fs-extra";
import * as path from "path";

/**
 * The <code>GlassCatInstallCleaner</code> class removes unsused files at the
 * end of the GlassCat server installation.
 */
export class GlassCatInstallCleaner {
  
  //////////////////////////////////////////////////////////////////////////////
  // Constructor function
  //////////////////////////////////////////////////////////////////////////////

  /**
   * Creates a new <code>GlassCatInstallCleaner</code> instance.
   */
  constructor() {}

  //////////////////////////////////////////////////////////////////////////////
  // Private properties
  //////////////////////////////////////////////////////////////////////////////

  /**
   * The collection of files and directories to delete.
   */
  private readonly FILES:Array<string> = [
    ".tscache", "src", "test", "juta", ".editorconfig", ".npmignore", 
    "Gruntfile.js", "package.json", "tsconfig.json"
  ];

  //////////////////////////////////////////////////////////////////////////////
  // Public methods
  //////////////////////////////////////////////////////////////////////////////

  /**
   * Removes all unsused files at the end of the GlassCat server installation.
   * If an error occurs during this operation, the <code>process.exit()</code>
   * method is automatically called with the failure code (<code>1</code>).
   * 
   * @param {Function} callback the callback function called when the operation
   *                            is complete.
   */
  public clean(callback:Function):void {
    let logger:CliLogger = CliLogger.getInstance();
    let currentPath:string = process.cwd();
    let numFiles:number = this.FILES.length;
    let len:number = numFiles;
    let filePath:string = null;
    logger.action("Removing temporary files.");
    while(len--) {
      filePath = path.join(currentPath, this.FILES[len]);
      logger.verb("remove", filePath);
      fs.remove(filePath)
        .then(() => {
          numFiles--;
          if(numFiles <= 0) callback();
        })
        .catch(err => {
          logger.warn(err);
          numFiles--;
          if(numFiles <= 0) callback();
        });
    }
  }
}