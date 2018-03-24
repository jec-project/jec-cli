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

import {OptionConfig} from "./OptionConfig";

/**
 * The <code>CommandConfig</code> class represents a command specified in the
 * configuration file. 
 */
export class CommandConfig {
  
  //////////////////////////////////////////////////////////////////////////////
  // Constructor function
  //////////////////////////////////////////////////////////////////////////////

  /**
   * Creates a new <code>CommandConfig</code> instance.
   */
  constructor(){ }
    
  //////////////////////////////////////////////////////////////////////////////
  // Public properties
  //////////////////////////////////////////////////////////////////////////////
  
  /**
   * The name of the command.
   */
  public command:string = null;

  /**
   * The reference to the script that contains actions to perform for executing
   * this command.
   */
  public action:string = null;

  /**
   * The command name alias, or <code>null</code>.
   */
  public alias:string = null;
  
  /**
   * The command description, or <code>null</code>.
   */
  public description:string = null;
  
  /**
   * The command sample usage, or <code>null</code>.
   */
  public usage:string = null;

  /**
   * The command signature, or <code>null</code>.
   */
  public signature:string = null;

  /**
   * The list of options for this command, or <code>null</code>.
   */
  public options:OptionConfig[] = null;
}