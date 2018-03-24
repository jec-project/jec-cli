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

/**
 * A helper class that lists all properties in a template and replaces them
 * by the corresponding predefined values.
 */
export class TemplatePropertiesProcessor {

  //////////////////////////////////////////////////////////////////////////////
  // Constructor function
  //////////////////////////////////////////////////////////////////////////////

  /**
   * Creates a new <code>TemplatePropertiesProcessor</code> instance.
   */
  constructor() {}

  /**
   * The reference to the pattern used to find custom properties in a template.
   */
  private static readonly PROP_PATTERN:RegExp = /<%\s*.*?%>/ig;

  //////////////////////////////////////////////////////////////////////////////
  // Public methods
  //////////////////////////////////////////////////////////////////////////////

  /**
   * Finds all properties defined in the specified template file and replaces 
   * them by the corresponding values defined in the config map.
   * 
   * @param {string} template the template file to process.
   */
  public resolve(template:string, config:Map<string, any>):string {
    let result:string = template;
    let found:Array<any> = null;
    let rawProp:string = null;
    let prop:string = null;
    let propLen:number = -1;
    let propVal:any = null;
    while(
      (found = TemplatePropertiesProcessor.PROP_PATTERN.exec(result)) !== null
    ) {
      
      rawProp = found[0];
      propLen = rawProp.length;
      prop = rawProp.substring(2, propLen - 2).trim();
      if(config.has(prop)) {
        propVal = config.get(prop);
        result = result.replace(rawProp, propVal);
      }
    }
    return result;
  }
};