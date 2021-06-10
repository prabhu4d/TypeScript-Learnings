# NodeJS Project Setup

```nodejs
npm init -y
npm install typescript --save-dev
npm install @types/node --save-dev
npx tsc --init --rootDir src --outDir lib --esModuleInterop --resolveJsonModule --lib es6,dom  --module commonjs
```

## Bonus: Live compile + run

```nodejs
npm install ts-node --save-dev
npm install nodemon --save-dev
```

```json
"scripts": {
  "start": "npm run build:live",
  "build": "tsc -p .",
  "build:live": "nodemon --watch 'src/**/*.ts' --exec \"ts-node\" src/index.ts"
},
```
