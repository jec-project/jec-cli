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

const download:any = require("download-package-tarball");

/**
 * The <code>TarballUtil</code> class provides utilities for working with
 * tarball archives.
 */
export class TarballUtil {
  
  //////////////////////////////////////////////////////////////////////////////
  // Constructor function
  //////////////////////////////////////////////////////////////////////////////

  /**
   * Creates a new <code>TarballUtil</code> instance.
   */
  constructor() {}

  //////////////////////////////////////////////////////////////////////////////
  // Public methods
  //////////////////////////////////////////////////////////////////////////////

  /**
   * Download the tarball archive at the specified <code>url</code> and extract
   * that file into the <code>output</code> directory.
   * 
   * @param {string} url the URL of the tarball archive to download.
   * @param {string} output the directory where to extract the archive.
   * @param {Function} callback the callback function called when the archive
   *                            is downloaded and extracted.
   */
  public download(url:string, output:string, callback:(err?:any)=>void):void {
    download( { url: url, dir: output }).then(() => {
      callback(null);
    }).catch(err => {
      callback(err);
    });
  }
}