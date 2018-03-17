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

import {TarballUtil} from "../../../utils/TarballUtil";
import {CliLogger} from "../../../utils/CliLogger";

/**
 * The <code>GlassCatLoader</code> class allows to download the GlassCat server
 * archive from the npm repository.
 */
export class GlassCatLoader {
  
  //////////////////////////////////////////////////////////////////////////////
  // Constructor function
  //////////////////////////////////////////////////////////////////////////////

  /**
   * Creates a new <code>GlassCatLoader</code> instance.
   */
  constructor() {}

  //////////////////////////////////////////////////////////////////////////////
  // Public methods
  //////////////////////////////////////////////////////////////////////////////

  /**
   * Downloads the GlassCat server archive from the npm repository. If an error
   * occurs during the download operation, the <code>process.exit()</code>
   * method is automatically called with the failure code (<code>1</code>).
   * 
   * @param {string} version the version of the GlassCat server archive to
   *                         download.
   * @param {Function} callback the callback function called when the archive
   *                            is downloaded and extracted.
   */
  public download(version:string, callback:Function):void {
    const logger:CliLogger = CliLogger.getInstance();
    const util:TarballUtil = new TarballUtil();
    const uri:string = 
        `https://registry.npmjs.org/jec-glasscat/-/jec-glasscat-${version}.tgz`;
    logger.verb("download", uri);
    util.download(
      uri,
      process.cwd(),
      (e:any)=> {
        if(e === null) {
          logger.verb("extract", `jec-glasscat-${version}.tgz`);
          callback();
        } else {
          logger.error(e);
          process.exit(1);
        }
      }
    );
  }
}