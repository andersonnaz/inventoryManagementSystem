export class Item {
    private readonly _id: string;
    private readonly _name: string;
    private readonly _category: string;
    private readonly _supplier: string;
    private  _price: number;
    private _quantity: number;
    private _validity: Date;

    constructor(name: string, category: string, supplier: string){
        this._name = name;
        this._category = category;
        this._supplier = supplier;
    };
}