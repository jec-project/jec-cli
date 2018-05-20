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

import {Command, CliLogger, ConsoleCliLogger} from "jec-tool-cli";
import {BootstrapTemplateGenerator, FileWriter} from "jec-cli-template";

/**
 * The <code>CreateBootstrap</code> command allows create a custom bootstrap
 * component.
 */
export class CreateBootstrap implements Command {
  
  //////////////////////////////////////////////////////////////////////////////
  // Constructor function
  //////////////////////////////////////////////////////////////////////////////

  /**
   * Creates a new <code>CreateBootstrap</code> instance.
   */
  constructor() {}

  //////////////////////////////////////////////////////////////////////////////
  // Public methods
  //////////////////////////////////////////////////////////////////////////////

  /**
   * @inheritDoc
   */
  public run(argv:any):void {
    const writer:FileWriter = new FileWriter();
    const logger:CliLogger= ConsoleCliLogger.getInstance();
    writer.write(BootstrapTemplateGenerator,
                 argv, (err:NodeJS.ErrnoException | null) => {
      err ? logger.error(err) :
            logger.log(
     `Bootstrap file with name '${argv.name}.ts' created in '${process.cwd()}'.`
            );
      });
  }
}