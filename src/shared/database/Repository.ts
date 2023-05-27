export interface Repository<T> {
    save(param: T): void;
    list(): T[];
    findOne(param: T): T | undefined;
    update(id: string, param: T): T;
    delete(id: string): void;
}