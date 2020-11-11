declare type tCatchHandler<T, W = void> = (err: Error, item: T, idx: number) => W;
declare type tDefaultValueOrCatchHandler<T, W> = W | tCatchHandler<T, W>;
interface Array<T> {
    mapAsync<W>(cback: (item: T, idx: number) => Promise<W>, defaultValueOrCatchHandler?: tDefaultValueOrCatchHandler<T, W>): Promise<W[]>;
    forEachAsync(cback: (item: T, idx: number) => Promise<void>, catchHandler?: tCatchHandler<T>): Promise<void>;
    filterAsync(cback: (item: T, idx: number) => Promise<boolean>, defaultValueOrCatchHandler?: tDefaultValueOrCatchHandler<T, boolean>): Promise<T[]>;
}
declare function NOOP(): void;
declare function isCatchHandler<T, W>(value: any): value is tCatchHandler<T, W>;
