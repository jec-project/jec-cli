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

/// <reference path="../../../typings/typings.d.ts"/>
import {AbstractCommandStrategy} from "./AbstractCommandStrategy";
import {CommandStrategy} from "./CommandStrategy";

// Config file:
const CFG:any = require("../../../config/glasscat-config.json");

/**
 * The <code>GlassCatCommandStrategy</code> class invokes specific GlassCat 
 * commands depending on users inputs.
 */
export class GlassCatCommandStrategy extends AbstractCommandStrategy
                                     implements CommandStrategy {
  
  //////////////////////////////////////////////////////////////////////////////
  // Constructor function
  //////////////////////////////////////////////////////////////////////////////

  /**
   * Creates a new <code>GlassCatCommandStrategy</code> instance.
   * 
   * @param {string} version the version of the current process.
   */
  constructor(version:string) {
    super(version);
    this.initCommands(CFG);
  }
  
  //////////////////////////////////////////////////////////////////////////////
  // Private methods
  //////////////////////////////////////////////////////////////////////////////

  //////////////////////////////////////////////////////////////////////////////
  // Public methods
  //////////////////////////////////////////////////////////////////////////////

  /**
   * @inheritDoc
   */
  public invokeCommand():void {
    super.invokeCommand();
  }
}