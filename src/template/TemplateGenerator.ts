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

import {JecTemplate} from "./JecTemplate";

/**
 * The <code>TemplateGenerator</code> interface provides the basic set of APIs
 * that you must implement to create JEC components from predefined templates.
 */
export interface TemplateGenerator {

  /**
   * Generates and returns a string that represents a custom JEC component
   * created from the JEC template associated with this generator.
   * 
   * @param {any} config the configuration for the new component.
   * @return {string} a string that represents a custom JEC component  
   *                  initialized with data fetched from the specified config.
   */
  generate(config:any):string;
}