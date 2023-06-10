export interface Updatable<T> {
    update(id: string, param: Partial<T>): T;
}