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

import {Command} from "jec-tool-cli";
import {Start} from "../../cmd/glasscat/Start";

/**
 * Creates a new instance of the <code>Start</code> command and invoke its
 * <code>run()</code> method.
 * 
 * @param {any} argv the user's input.
 */
export function run(argv:any):void {
  const cmd:Command = new Start();
  cmd.run(argv);
}