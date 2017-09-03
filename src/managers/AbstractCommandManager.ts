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

/// <reference path="../../typings/typings.d.ts"/>
import {CommandManager} from "./CommandManager";
import {CommandStrategy} from "./strategy/CommandStrategy";
import * as updateNotifier from "update-notifier";

// Package file:
const PKG:any = require("../../package.json");

/**
 * <code>AbstractCommandManager</code> is the abstract class for the 
 * <code>CommandManager</code> interface.
 */
export abstract class AbstractCommandManager implements CommandManager{
  
  //////////////////////////////////////////////////////////////////////////////
  // Constructor function
  //////////////////////////////////////////////////////////////////////////////

  /**
   * Creates a new <code>AbstractCommandManager</code> instance.
   * 
   * @param {string} processTitle the name of the current process.
   */
  constructor(processTitle:string) {
    this.initObj(processTitle);
  }
  
  //////////////////////////////////////////////////////////////////////////////
  // Private properties
  //////////////////////////////////////////////////////////////////////////////

  /**
   * The strategy object used by this manager to invoke commands depending on
   * the user's input.
   */
  protected __strategy:CommandStrategy = null;

  /**
   * The version of the current CLI API.
   */
  protected __version:string = null;

  //////////////////////////////////////////////////////////////////////////////
  // Private methods
  //////////////////////////////////////////////////////////////////////////////

  /**
   * Initialises this object. This method is called by the constructor function.
   * 
   * @param {string} processTitle the name of the current process.
   */
  private initObj(processTitle:string):void {
    updateNotifier({ pkg:PKG }).notify();
    process.title = processTitle;
    this.__version = PKG.version;
  }
  
  //////////////////////////////////////////////////////////////////////////////
  // Public methods
  //////////////////////////////////////////////////////////////////////////////

  /**
   * @inheritDoc
   */
  public process():void {
    this.__strategy.invokeCommand();
  }
}