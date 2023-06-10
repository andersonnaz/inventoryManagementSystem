export interface Saveable<T> {
    save(params: T): void;
}