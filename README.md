# JEC CLI Project

The CLI Project contains the command-line user interface for managing JEC projects.

[![][jec-logo]][jec-url]

## Requirements

The JEC CLI Project needs the following system parameters in order to work correctly:

- Node 6+
- npm 3+
- TypeScript 2+

## Installation

Set up the JEC CLI module with:

```bash
$ [sudo] npm install jec-cli -g
```

## Usage

**JEC commands:**

```bash
$ jec help
```

**GlassCat commands:**

```bash
$ glasscat help
```

### Installing a new GlassCat Application Server

```bash
$ cd <path/to/your/server>
$ jec glasscat-install
```

To start a GlassCat server instance, use:

```bash
$ <path/to/your/server> glasscat start
```

## Coming functionalities

JEC CLI is still under development. The final release will include a large set of tools for working with JEC components and all commands for setting GlassCat servers.

The following command list shows some of these functionalities. This list is not limited.

**JEC Commands:**

```bash
$ jec create-resource
$ jec create-test-suite
```

**GlassCat Commands:**

```bash
$ glasscat add-server
$ glasscat remove-server
$ glasscat add-http-listener
$ glasscat remove-http-listener
$ glasscat add-domain
$ glasscat remove-domain
$ glasscat set-error-page
$ glasscat set-log-level
$ glasscat add-logger
$ glasscat remove-logger
$ glasscat add-gmp
$ glasscat remove-gmp
```

## Update Release Notes

**Current stable release:** [0.1.2](CHANGELOG.md#jec-cli-0.1.2)
 
For a complete listing of release notes for all JEC CLI update releases, see the [CHANGELOG](CHANGELOG.md) file. 

## License
This JEC CLI Project is licensed under Apache 2.0. Full license text is available in [LICENSE](LICENSE).

```
Copyright 2016-2018 Pascal ECHEMANN.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
```

[jec-url]: https://jecproject.org
[jec-logo]: https://raw.githubusercontent.com/pechemann/JEC/master/assets/jec-logos/jec-logo.png