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

import {AbstractCommandManager} from "./AbstractCommandManager";
import {CommandManager} from "jec-tool-cli";
import {GlassCatCommandStrategy} from "./strategy/GlassCatCommandStrategy";

/**
 * The <code>GlassCatCommandManager</code> class runs specific GlassCat commands
 * depending on users inputs.
 */
export class GlassCatCommandManager extends AbstractCommandManager
                                    implements CommandManager {
  
  //////////////////////////////////////////////////////////////////////////////
  // Constructor function
  //////////////////////////////////////////////////////////////////////////////

  /**
   * Creates a new <code>GlassCatCommandManager</code> instance.
   * 
   * @param {string} processTitle the name of the  current process.
   */
  constructor(processTitle:string) {
    super(processTitle);
    this.initManager();
  }
  
  //////////////////////////////////////////////////////////////////////////////
  // Private methods
  //////////////////////////////////////////////////////////////////////////////

  /**
   * Initialises this object. This method is called by the constructor function.
   */
  private initManager():void {
    this.__strategy = new GlassCatCommandStrategy(this.__version);
  }
  
  //////////////////////////////////////////////////////////////////////////////
  // Public methods
  //////////////////////////////////////////////////////////////////////////////

  /**
   * @inheritDoc
   */
  public process():void {
    super.process();
  }
}