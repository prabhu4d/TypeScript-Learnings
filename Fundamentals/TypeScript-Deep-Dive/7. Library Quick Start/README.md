# Library Setup

```powershell
package
├─ package.json
├─ tsconfig.json
├─ src
│  ├─ index.ts
│  ├─ foo.ts
│  └─ ...All your source files (Authored)
└─ lib
  ├─ index.d.ts.map
  ├─ index.d.ts
  ├─ index.js
  ├─ foo.d.ts.map
  ├─ foo.d.ts
  ├─ foo.js
  └─ ... All your compiled files (Generated)
```

* export everything in index.ts -> so it is available when
```javascript
import * from 'example'
```
* tsconfig.json
```json
{
  "compilerOptions":{
    "outDir" : "lib",
    "declaration" : true,
    "declarationMap" : true,
    "include" : "src"
  }
}
```
* package.json
```json
{
  "main":"lib/index",
  "types":"lib/index"
}
```
## Managing Dependencies
### devDependencies
### peerDependencies
### dependencies