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

import {Command} from "../Command";
import {GlassCatLoader} from "./tools/install/GlassCatLoader";
import {GlassCatExtractor} from "./tools/install/GlassCatExtractor";
import {GlassCatNpmInstaller} from "./tools/install/GlassCatNpmInstaller";
import {GlassCatInstallCleaner} from "./tools/install/GlassCatInstallCleaner";
import {CliLogger} from "../../utils/CliLogger";

// Config file:
const CFG:any = require("../../../config/glasscat-install-config.json");

/**
 * The <code>GlassCatInstall</code> command allows to install a new GlassCat
 * server instance.
 */
export class GlassCatInstall implements Command {
  
  //////////////////////////////////////////////////////////////////////////////
  // Constructor function
  //////////////////////////////////////////////////////////////////////////////

  /**
   * Creates a new <code>GlassCatInstall</code> instance.
   */
  constructor() {}

  //////////////////////////////////////////////////////////////////////////////
  // Public methods
  //////////////////////////////////////////////////////////////////////////////

  /**
   * @inheritDoc
   */
  public run(argv:any):void {
    const loader:GlassCatLoader = new GlassCatLoader();
    const logger:CliLogger = CliLogger.getInstance();
    const version:string = CFG.version;
    let extractor:GlassCatExtractor = null;
    let installer:GlassCatNpmInstaller = null;
    let cleaner:GlassCatInstallCleaner = null;
    logger.action(`Installing GlassCat ${version}.`);
    loader.download(
      version,
      ()=> {
        extractor = new GlassCatExtractor();
        extractor.move(
          ()=> {
            installer = new GlassCatNpmInstaller();
            installer.install(
              ()=> {
                cleaner = new GlassCatInstallCleaner();
                cleaner.clean(
                  ()=> {
                    logger.action("Server successfully installed.");
                  }
                );
              }
            );
          }
        );
      }
    );
  }
}