import async from 'async';

export declare function waterfall<T = any, E = Error>(tasks: Array<Function>, callback: async.AsyncResultCallback<T, E> | undefined): void;