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

import * as fs from "fs-extra";
import * as path from "path";
import {CliLogger} from "../../../utils/CliLogger";

/**
 * The <code>GlassCatExtractor</code> class copies the GlassCat config files
 * from the temporary folder to the root of the install folder.
 */
export class GlassCatExtractor {
  
  //////////////////////////////////////////////////////////////////////////////
  // Constructor function
  //////////////////////////////////////////////////////////////////////////////

  /**
   * Creates a new <code>GlassCatExtractor</code> instance.
   */
  constructor() {}

  //////////////////////////////////////////////////////////////////////////////
  // Public methods
  //////////////////////////////////////////////////////////////////////////////

  /**
   * Copies the GlassCat config files from the temporary folder to the root of
   * the install folder. If an error occurs during this operation, the
   * <code>process.exit()</code> method is automatically called with the failure 
   * code (<code>1</code>).
   * 
   * @param {Function} callback the callback function called when the files have
   *                            been moved.
   */
  public move(callback:Function):void {
    let logger:CliLogger = CliLogger.getInstance();
    let currentPath:string = process.cwd();
    let tmpFolder:string = "jec-glasscat";
    fs.copy(
      path.join(currentPath, tmpFolder),
      currentPath,
      (err:Error) => {
        if(err) {
          logger.error(err);
          process.exit(1);
        } else {
          logger.verb("remove", path.join(currentPath, "jec-glasscat"));
          fs.remove(tmpFolder).then(() => {
            callback();
          }).catch((reason:any) => {
            logger.error(reason);
            process.exit(1);
          });
        }
      }
    );
  }
}