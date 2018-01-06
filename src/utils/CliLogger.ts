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

import * as chalk from "chalk";

/**
 * The JEC-CLI logger.
 */
export class CliLogger {

  //////////////////////////////////////////////////////////////////////////////
  // Constructor function
  //////////////////////////////////////////////////////////////////////////////

  /**
   * Creates a new <code>CliLogger</code> instance.
   */
  constructor() {
    if(CliLogger._locked || CliLogger.INSTANCE) {
      throw new Error();
    }
    CliLogger._locked = true;
  }

  //////////////////////////////////////////////////////////////////////////////
  // Singleton managment
  //////////////////////////////////////////////////////////////////////////////

  /**
   * Prevents <code>CliLogger</code> illegal instanciations.
   */
  private static _locked:boolean = true;

  /**
   * The <code>CliLogger</code> singleton instance reference.
   */
  private static INSTANCE:CliLogger = null;

  /**
   * Returns a reference to the <code>CliLogger</code> singleton.
   *
   * @return {CliLogger} a reference to the <code>CliLogger</code> singleton.
   */
  public static getInstance():CliLogger {
    if(CliLogger.INSTANCE === null) {
      CliLogger._locked = false;
      CliLogger.INSTANCE = new CliLogger();
    }
    return CliLogger.INSTANCE;
  }

  //////////////////////////////////////////////////////////////////////////////
  // Private properties
  //////////////////////////////////////////////////////////////////////////////

  //////////////////////////////////////////////////////////////////////////////
  // Public methods
  //////////////////////////////////////////////////////////////////////////////

  /**
   * Displays a log message in the output.
   * 
   * @param {string} message the message to display in the output.
   */
  public log(message:string):void {
    console.log(message);
  }

  /**
   * Displays a message related to an action in the output.
   * 
   * @param {string} message the message to display in the output.
   */
  public action(message:string):void {
    console.log(chalk.green(message));
  }
  
  /**
   * Displays a message related to an verb in the output.
   * 
   * @param {string} verb the verb associated with the message to display.
   * @param {string} message the message to display in the output.
   */
  public verb(verb:string, message:string):void {
    console.log(chalk.green(`  ${verb} `) + message);
  }
  
  /**
   * Displays an error message in the output.
   * 
   * @param {any} reason the error message to display in the output.
   */
  public error(reason:any):void {
    console.log(chalk.red("An error occured:\n"));
    console.error(reason);
  }
  
  /**
   * Displays a warning message in the output.
   * 
   * @param {any} reason the warning message to display in the output.
   */
  public warn(reason:any):void {
    console.log(chalk.magenta("WARN:\n"));
    console.warn(reason);
  }
};
