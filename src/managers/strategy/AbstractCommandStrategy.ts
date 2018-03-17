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

import {CommandStrategy} from "./CommandStrategy";
import {ConfigParser} from "../../utils/ConfigParser";
import {CommandConfig} from "../../utils/CommandConfig";
import * as minimist from "minimist";
import * as path from "path";

/**
 * <code>AbstractCommandStrategy</code> is the abstract class for the 
 * <code>CommandStrategy</code> interface.
 */
export abstract class AbstractCommandStrategy implements CommandStrategy {
  
  //////////////////////////////////////////////////////////////////////////////
  // Constructor function
  //////////////////////////////////////////////////////////////////////////////

  /**
   * Creates a new <code>AbstractCommandStrategy</code> instance.
   * 
   * @param {string} version the version of the current process.
   */
  constructor(version:string) {
    this.initObj(version);
  }
  
  //////////////////////////////////////////////////////////////////////////////
  // Protected properties
  //////////////////////////////////////////////////////////////////////////////

  /**
   * A collection that contains of user's inputs.
   */
  protected __argv:any = null;

  /**
   * The version of the current process.
   */
  protected __version:string = null;

  /**
   * A map that contains all the references of the available commands  for this
   * object.
   */
  protected __commands:Map<string, CommandConfig> = null;

  /**
   * The command config parser for this object.
   */
  protected __parser:ConfigParser = null;
  
  //////////////////////////////////////////////////////////////////////////////
  // Private methods
  //////////////////////////////////////////////////////////////////////////////

  /**
   * Initialises this object. This method is called by the constructor function.
   * 
   * @param {string} version the version of the current process.
   */
  private initObj(version:string):void {
    this.__version = version;
    this.__commands = new Map<string, CommandConfig>();
    this.__argv = minimist(process.argv.slice(2));
    this.__parser = new ConfigParser();
  }
  
  //////////////////////////////////////////////////////////////////////////////
  // Protected methods
  //////////////////////////////////////////////////////////////////////////////

  /**
   * Initialises the commands for this object.
   * 
   * @param {any} config the config for this object.
   */
  protected initCommands(config:any):void {
    const cfg:CommandConfig[] = this.__parser.parse(config);
    let len:number = cfg.length;
    let cmd:CommandConfig = null;
    while(len--) {
      cmd = cfg[len];
      this.__commands.set(cmd.command, cmd);
    }
  }
  
  //////////////////////////////////////////////////////////////////////////////
  // Public methods
  //////////////////////////////////////////////////////////////////////////////

  /**
   * @inheritDoc
   */
  public invokeCommand():void {
    const commandName:string = this.__argv._[0];
    const cmd:CommandConfig = this.__commands.get(commandName);
    //console.log(this.__argv);
    if(cmd) {      
      const module:any = require(
        path.join("../../scripts", cmd.action)
      );
      module.run(this.__argv);
    } else {
      console.log("show help");
    }
  }
}