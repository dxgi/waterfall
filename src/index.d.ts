export default function waterfall<T>(tasks: Array<Function>, callback: (err?: any, result?: T) => void): void;
