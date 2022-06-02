import async from 'async';

const bind = async (fn: Function, cb: Function, args: any) => {
    let result: any = null;

    try { result = await fn(args); }
    catch (err) { return cb(err); }

    cb(null, result);
}

export function waterfall<T>(tasks: Array<Function>, callback: (err?: any, result?: T) => void) {
    const wrapped = tasks.map(fn => {
        return (args: any, cb: Function) => {
            if (typeof args === 'function')
                cb = args;

            bind(fn, cb, args);
        }
    });

    async.waterfall<T>(wrapped, callback);
}