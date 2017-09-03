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

import {CommandConfig} from "./CommandConfig";
import {CommandConfigBuilder} from "./CommandConfigBuilder";

/**
 * Parses command configuration files. 
 */
export class ConfigParser {
  
  //////////////////////////////////////////////////////////////////////////////
  // Constructor function
  //////////////////////////////////////////////////////////////////////////////

  /**
   * Creates a new <code>ConfigParser</code> instance.
   */
  constructor(){ }

  //////////////////////////////////////////////////////////////////////////////
  // Public methods
  //////////////////////////////////////////////////////////////////////////////

  /**
   * Parses the specified config and returns an array of
   * <code>CommandConfig</code> objects.
   * 
   * @param {any} config the config object to parse.
   * @return {CommandConfig} an array of <code>CommandConfig</code> objects.
   */
  public parse(config:any):CommandConfig[] {
    let cmdCfg:CommandConfig[] = new Array<CommandConfig>();
    let len:number = config.length;
    let builder:CommandConfigBuilder = new CommandConfigBuilder();
    let cmd:CommandConfig = null;
    while(len--) {
      cmd = builder.build(config[0]);
      cmdCfg.push(cmd);
    }
    return cmdCfg;
  }
}