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

import {CommandConfig} from "./CommandConfig";

/**
 * The <code>CommandConfigBuilder</code> class creates new instances of the
 * <code>CommandConfig</code> class. 
 */
export class CommandConfigBuilder {
  
  //////////////////////////////////////////////////////////////////////////////
  // Constructor function
  //////////////////////////////////////////////////////////////////////////////

  /**
   * Creates a new <code>CommandConfigBuilder</code> instance.
   */
  constructor(){ }
    
  //////////////////////////////////////////////////////////////////////////////
  // Public properties
  //////////////////////////////////////////////////////////////////////////////
  
  /**
   * Builds and returns a new <code>CommandConfig</code> instance.
   * 
   * @param {any} config the config object from which to build the command.
   * @return {CommandConfig} a new <code>CommandConfig</code> instance.
   */
  public build(config:any):CommandConfig{
    let cmd:CommandConfig = new CommandConfig();
    cmd.command = config.command;
    cmd.action = config.action;
    cmd.alias = config.alias || null;
    cmd.description = config.description || null;
    return cmd;
  }
}