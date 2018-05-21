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

import {Command, CliLogger, ConsoleCliLogger} from "jec-tool-cli";
import * as fs from "fs";
import * as fsExtra from "fs-extra";
import * as path from "path";
import {TypescriptParser, File, MethodDeclaration, DeclarationVisibility,
        ClassDeclaration} from "typescript-parser";
import {TestSuiteTemplateGenerator, TemplateBuilder} from "jec-cli-template";
import {TestSuiteDto} from "../../utils/TestSuiteDto";

/**
 * The <code>CreateTestSuite</code> command allows create a test suite for the
 * specified class.
 */
export class CreateTestSuite implements Command {
  
  //////////////////////////////////////////////////////////////////////////////
  // Constructor function
  //////////////////////////////////////////////////////////////////////////////

  /**
   * Creates a new <code>CreateTestSuite</code> instance.
   */
  constructor() {}

  //////////////////////////////////////////////////////////////////////////////
  // Private properties
  //////////////////////////////////////////////////////////////////////////////

  /**
   * A reference to the dot (<code>.</code>) character.
   */
  private readonly DOT:string = ".";

  /**
   * A reference to the slash (<code>/</code>) character.
   */
  private readonly SLASH:string = "/";

  /**
   * A reference to the relative path pattern (<code>../</code>).
   */
  private readonly RELATIVE_PATH:string = "../";

  /**
   * A reference to the TypeScript (<code>.ts</code>) extension.
   */
  private readonly EXTENSION:string = ".ts";

  //////////////////////////////////////////////////////////////////////////////
  // Private methods
  //////////////////////////////////////////////////////////////////////////////

  /**
   * Creates and return a config DTO object for the specified user's inputs.
   * 
   * @param {any} argv the user's inputs for which to create the config DTO.
   * @return {TestSuiteDto} a config DTO object used to initialize the new test
   *                        suite.
   */
  private createDto(argv:any):TestSuiteDto {
    const result:TestSuiteDto = new TestSuiteDto();
    const classRef:string = argv.class;
    const lastDotId:number = classRef.lastIndexOf(this.DOT);
    result.className = classRef.substr(lastDotId + 1);
    result.name = result.className + "Test";
    result.classPath = classRef.substr(0, lastDotId)
                               .replace(this.DOT, this.SLASH);
    result.testPath = path.join("test", result.classPath);
    this.createRelativeClassPath(result);
    return result;
  }

  /**
   * A visitor function that creates the relative class path reference for the
   * specified config DTO.
   * 
   * @param {TestSuiteDto} dto the config object for which to create the
   *                           relative class path reference.
   */
  private createRelativeClassPath(dto:TestSuiteDto):void {
    const buffer:string[] = dto.testPath.split(this.SLASH);
    let pathFix: string = this.RELATIVE_PATH;
    let len:number = buffer.length;
    while(len--) {
      pathFix += this.RELATIVE_PATH;
    }
    dto.relativeClassPath = `${pathFix}src/${dto.classPath}/${dto.className}`;
  }

  /**
   * Loads the class for which to create the new test suite.
   * 
   * @param {TestSuiteDto} dto the config object associated with the class to
   *                           load.
   * @param {Function} onLoad the callback function called once the class has
   *                          been loaded.
   */
  private loadClass(dto:TestSuiteDto, onLoad:Function):void {
    const filePath:string = path.join(
      process.cwd(), "src", dto.classPath, dto.className + this.EXTENSION
    );
    fs.readFile(filePath, (err:NodeJS.ErrnoException, data:any) => {
      onLoad(err, data)
    });
  }

  /**
   * Extracts the methods for which to create test cases from the loaded class
   * file.
   * 
   * @param {string} data the class file from which to extract method names.
   * @param {Function} complete the callback method calld once the method names
   *                            have been extracted. 
   */
  private extractDeclarations(data:string, complete:Function):void {
    const result:string[] = new Array<string>();
    const parser:TypescriptParser = new TypescriptParser();
    const parsed:Promise<File> = parser.parseSource(data);
    let len:number = -1;
    let declarations:MethodDeclaration[] = null;
    let declaration:any = null;
    parsed.then(
      (file:File) => {
        declarations = (file.declarations[0] as ClassDeclaration).methods;
        len = declarations.length;
        while(len--) {
          declaration = declarations[len];
          if(declaration.visibility === DeclarationVisibility.Public) {
            result.push(declaration.name);
          }
        }
        complete(null, result);
      },
      (reason:any) => {
        complete(reason, null);
      }
    );
  }
  
  /**
   * Writes a JEC test suite in a new file, depending on the specified options.
   * 
   * @param {TestSuiteDto} config the config object used to customize the JEC
   *                              test suite.
   * @param {Function} callback the callback method called once the file is
   *                            written.
   */
  private write(config:TestSuiteDto, callback:Function):void {
    const builder:TemplateBuilder = new TemplateBuilder();
    const template:string = builder.build(TestSuiteTemplateGenerator, config);
    const name:string = config.name + this.EXTENSION;
    fsExtra.ensureDir(config.testPath, (err:Error) => {
      if(err) callback(err);
      else {
        fsExtra.writeFile(
          path.join(config.testPath, name), 
          template, (err:NodeJS.ErrnoException | null) => {
            callback(err);
          }
        );
      }
    });
  }

  //////////////////////////////////////////////////////////////////////////////
  // Public methods
  //////////////////////////////////////////////////////////////////////////////

  /**
   * @inheritDoc
   */
  public run(argv:any):void {
    const logger:CliLogger= ConsoleCliLogger.getInstance();
    let dto:TestSuiteDto = this.createDto(argv);
    this.loadClass(dto, (err:NodeJS.ErrnoException, data:any) => {
      if(err) logger.error(err);
      else {
        this.extractDeclarations(data.toString(), (error:any, data:any) => {
          if(err) logger.error(error);
          else {
            dto.methods = data;
            this.write(
              dto,
              (err:NodeJS.ErrnoException | null) => {
                err ? logger.error(err) :
                      logger.log(
           `Test suite with name '${dto.name}.ts' created in '${dto.testPath}'.`
                      );
              }
            );
          }
        });
      }
    });
  }
}