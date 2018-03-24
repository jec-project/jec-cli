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
 * An utility class that provides methods for working with maps. 
 */
export class MapUtils {
    
  //////////////////////////////////////////////////////////////////////////////
  // Public methods
  //////////////////////////////////////////////////////////////////////////////
  
  /**
   * Converts a plain object into a <code>Map</code> and returns the map.
   * 
   * @param {any} obj the object to convert into a <code>Map</code>.
   * @return {Map<string, any>} the specified object as a <code>Map</code>.
   */
  public static objectToMap(obj:any):Map<string, any> {
    let map:Map<string, any> = new Map<string, any>();
    Object.keys(obj).forEach(key => {
      map.set(key, obj[key]);
    });
    return map;
  }
}