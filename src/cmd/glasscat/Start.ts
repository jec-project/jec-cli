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

import {Command} from "jec-tool-cli";
import * as childProcess from "child_process";
import * as path from "path";

/**
 * The <code>Start</code> command allows to start a GlassCat server instance.
 */
export class Start implements Command {
  
  //////////////////////////////////////////////////////////////////////////////
  // Constructor function
  //////////////////////////////////////////////////////////////////////////////

  /**
   * Creates a new <code>Start</code> instance.
   */
  constructor() {}

  //////////////////////////////////////////////////////////////////////////////
  // Public methods
  //////////////////////////////////////////////////////////////////////////////

  /**
   * @inheritDoc
   */
  public run(argv:any):void {
    const scriptPath:string = path.join(
      process.cwd(),
      "server/com/onsoft/glasscat/cli/scripts/start-server"
    );
    //console.log("startServerAction ------------>", scriptPath);
    childProcess.fork(scriptPath);
  }
}