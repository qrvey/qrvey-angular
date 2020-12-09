export interface IScriptItem {
    url: string;
    namespace?: string | Function;
    dependencies?: IScriptItem[];
    noModule?: boolean;
    type?: string;
}

export type TScriptItem = string | IScriptItem;

export type TScriptType = 'text/javascript' | 'module' | string;

export function importScripts(scripts: TScriptItem[]) {
    const promiseList:any = scripts.map(script => {
        if (typeof script === 'string') {
            return loadScript(script);
        } else {
            if (script.namespace) {
                const exist = typeof script.namespace === 'function'
                    ? script.namespace() : (window as any)[script.namespace];
                if (exist) {
                    return script.dependencies && importScripts(script.dependencies);
                } else {
                    return loadScript(script.url, script.type, script.noModule)
                        .then(() => script.dependencies && importScripts(script.dependencies));
                }
            } else {
                return loadScript(script.url, script.type, script.noModule)
                    .then(() => script.dependencies && importScripts(script.dependencies));
            }
        }
    });
    return Promise.all(promiseList);
}

export function loadScript(url: string, type: TScriptType = 'text/javascript', noModule = false) {
    return new Promise(resolve => {
        document.body.appendChild(Object.assign(document.createElement('script'), {
            type,
            noModule,
            defer: true,
            onload: resolve,
            src: url
        }));

        if (noModule && 'noModule' in HTMLScriptElement.prototype) {
            // this Browser support ES6 module.
            // so, this script is not going to call onload method. resolving manually ....
            resolve();
        }
    });
}

//USAGE


// 1) Simple script (paralell loading)

// importScripts(['http://myscript.js', 'http://another.js']);



// 2) Loading `.js` and `.esm.js` script (parallel loading)

// importScripts([
// 	{ url: 'http://myscript.esm.js', type: 'module' }, 
// 	{ url: 'http://myscript.js', noModule: true }
// ]);



// 3) import dependent scripts (cascade)

// importScripts([
// 	{ url: 'http://myscript.js', dependencies: ['http://myscript.plugin.js'] }  
// ]);



// 4) mix

// importScripts([
//    { url: 'http://myscript.js', dependencies: ['http://myscript.plugin.js'] },
//    { url: 'http://another.esm.js', type: 'module' }, 
//    { url: 'http://another.js', noModule: true },
//    'http://simplescript.js'
// ]);
