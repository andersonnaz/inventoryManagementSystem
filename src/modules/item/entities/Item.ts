export class Item {
    private readonly _id: string;
    private readonly _name: string;
    private readonly _category: string;
    private readonly _supplier: string;
    private  _price: number;
    private _quantity: number;
    private _validity: Date;

    private constructor(name: string, category: string, supplier: string){
        this._name = name;
        this._category = category;
        this._supplier = supplier;
    };

    public static create(name: string, category: string, supplier: string): Item {
        this.validate(name, category, supplier);
        const item = new Item(name, category, supplier);
        return item;
    }

    private static validate(name: string, category: string, supplier: string): boolean {
        if(!name){
            throw new Error('name invalid!');
        }
        if(!category){
            throw new Error('category invalid!');
        }
        if(!supplier){
            throw new Error('supplier invalid!');
        }
        return true;
    }

    get id(): string {
        return this._id;
    }

    get name(): string {
        return this._name;
    }

    get category(): string {
        return this._category;
    }

    get supplier(): string {
        return this._supplier;
    }

    get price(): number {
        return this._price;
    }

    get quantity(): number {
        return this._quantity;
    }

    get validity(): Date {
        return this._validity;
    }

    set price(price: number) {
        this._price = price;
    }

    set quantity(quantity: number) {
        this._quantity = quantity;
    }

    set validity(date: Date) {
        this._validity = date;
    }
}