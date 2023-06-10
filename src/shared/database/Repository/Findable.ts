export interface Findable<T> {
    findOne(param: string): T | undefined;
}