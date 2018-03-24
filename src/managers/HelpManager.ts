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

/// <reference path="../../typings/typings.d.ts"/>
import {CliLogger} from "../utils/CliLogger";
import {CommandConfig} from "../utils/CommandConfig";

/**
 * <code>HelpManager</code> provides utility methods for managing JEC CLI help.
 */
export class HelpManager {
  
  //////////////////////////////////////////////////////////////////////////////
  // Constructor function
  //////////////////////////////////////////////////////////////////////////////

  /**
   * Creates a new <code>HelpManager</code> instance.
   */
  constructor() {}
  
  //////////////////////////////////////////////////////////////////////////////
  // Private properties
  //////////////////////////////////////////////////////////////////////////////

  /**
   * Represents an empty string.
   */
  private readonly EMPTY_STRING:string = "";

  /**
   * Represents a whitespace character.
   */
  private readonly WHITESPACE:string = " ";

  /**
   * Represents a new line character.
   */
  private readonly NEW_LINE:string = "\n\r";

  //////////////////////////////////////////////////////////////////////////////
  // Private methods
  //////////////////////////////////////////////////////////////////////////////

  /**
   * Returns a string that contains whitespaces used to set the correct gutter
   * size.
   * 
   * @param {number} size the size of the gutter, in number of total
   *                      whitespaces.
   * @return {string} a string that contains whitespaces used to set the correct 
   *                  gutter size.
   */
  private getGutter(size:number):string {
    let gutter:string = this.EMPTY_STRING;
    while(size--) gutter += this.WHITESPACE;
    return gutter;
  }

  /**
   * Displays information on the specified command.
   * 
   * @param {CommandConfig} command the command for which to show information.
   */
  private outputHelpInfo(command:CommandConfig):void {
    const logger:CliLogger = CliLogger.getInstance();
    const commandName:string = command.command.toUpperCase();
    let nextValue:string = null;
    logger.log(`-> ${commandName}${this.NEW_LINE}`);
    logger.log(command.description + this.NEW_LINE);
    nextValue = command.alias;
    if(nextValue) {
      logger.log(`    alias: ${nextValue}${this.NEW_LINE}`);
    }
    nextValue = command.signature || this.EMPTY_STRING;
    logger.log(`    usage: ${commandName} ${nextValue}${this.NEW_LINE}`);
  }

  //////////////////////////////////////////////////////////////////////////////
  // Public methods
  //////////////////////////////////////////////////////////////////////////////

  /**
   * Creates and returns a new <code>HelpManager</code> instance.
   * 
   * @return {HelpManager} a new <code>HelpManager</code> instance.
   */
  public static build():HelpManager {
    const helpManager:HelpManager = new HelpManager();
    return helpManager;
  }
  
  /**
   * Displays information on available commands in the specified
   * <code>commands</code> map.
   * 
   * @param {Map<string, CommandConfig>} commandList the list of command for
   *                                                 which to show information.
   */
  public showSummary(commandList:Map<string, CommandConfig>):void {
    const it:IterableIterator<[string, CommandConfig]> =
                                                 commandList[Symbol.iterator]();
    const logger:CliLogger = CliLogger.getInstance();
    const COLSPACE:number = 25;
    let gutterSize:number = 0;
    let cmd:CommandConfig = null;
    let cusor:number = 0;
    let commandName:string = null;
    logger.log(
      "For more information on a specific command, type HELP command-name:\n\r"
    );
    for (let item of it) {
      cusor++;
      if(cusor % 2) {
        cmd = item[1];
        commandName = cmd.command.toUpperCase();
        gutterSize = COLSPACE - commandName.length;
        logger.log(
          `${commandName}${this.getGutter(gutterSize)}${cmd.description}`
        );
      }
    }
  }

  /**
   * Displays information on command parameter associated with the specified
   * user's inputs.
   * 
   * @param {any>} argv a collection that contains user's inputs.
   * @param {Map<string, CommandConfig>} commandList the list of command that
   *                                                 contains the command for
   *                                                 which to show information.
   */
  public showHelp(argv:any, commandList:Map<string, CommandConfig>):void {
    const commands:string[] = argv._;
    if(commands.length === 1) {
      this.showSummary(commandList);
    } else {
      this.outputHelpInfo(commandList.get(commands[1]));
    }                  
  }
}