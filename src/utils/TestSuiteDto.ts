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
 * A DTO used to create test suite files config.
 */
export class TestSuiteDto {

  //////////////////////////////////////////////////////////////////////////////
  // Constructor function
  //////////////////////////////////////////////////////////////////////////////

  /**
   * Creates a new <code>TestSuiteDto</code> instance.
   */
  constructor() {}

  //////////////////////////////////////////////////////////////////////////////
  // Public properties
  //////////////////////////////////////////////////////////////////////////////

  /**
   * The name of the new test suite.
   */
  public name:string = null;

  /**
   * The name of the class for which to create a test suite.
   */
  public className:string = null;
  
  /**
   * The path to the class for which to create a test suite.
   */
  public classPath:string = null;

  /**
   * The path to the generated test class.
   */
  public testPath:string = null;
  
  /**
   * The relative path to the class to test.
   */
  public relativeClassPath:string = null;
  
  /**
   * A collection of method names for which to create a test case.
   */
  public methods:string[] = null;
  
};
