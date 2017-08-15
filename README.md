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
$ npm install jec-cli -g
```

## Usage

```bash
$ jec help
```

### Installing a new GlassCat Application Server

```bash
$ jec glasscat-install
```

Navigate to `http://localhost:9990/admin`. The server automatically starts after its installation.

To prevent automatic start of the server, use:

```bash
$ jec glasscat-install --mute
```

To start a GlassCat server instance, use:

```bash
$ cd path/to/your/server
$ glasscat start-server
```

## Update Release Notes

**Current stable release:** [1.0.0](CHANGELOG.md#jec-cli-1.0.0)
 
For a complete listing of release notes for all JEC CLI update releases, see the [CHANGELOG](CHANGELOG.md) file. 

## License
This JEC CLI Project is licensed under Apache 2.0. Full license text is available in [LICENSE](LICENSE).

```
Copyright 2016-2017 Pascal ECHEMANN.

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

[jec-url]: https://github.com/pechemann/JEC
[jec-logo]: https://raw.githubusercontent.com/pechemann/JEC/master/assets/jec-logos/jec-logo.png