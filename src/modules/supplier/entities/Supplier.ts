export class Supplier {
    private readonly _name: string;
    private readonly _cnpj: string;
    private _address: string;
    private _phone: string;

    private constructor(name: string, cnpj: string, address: string, phone: string) {
        this._name = name;
        this._cnpj = cnpj;
        this._address = address;
        this._phone = phone;
    }

    public static create(name: string, cnpj: string, address: string, phone: string): Supplier {
        this.validate(name, cnpj, address, phone);
        const supplier = new Supplier(name, cnpj, address, phone);
        return supplier;
    }

    private static validate(name: string, cnpj: string, address: string, phone: string): boolean {
        if(!name){
            throw new Error('name invalid!');
        }
        if(!cnpj){
            throw new Error('cnpj invalid');
        }
        if(!address){
            throw new Error('address invalid');
        }
        if(!phone){
            throw new Error('phone invalid');
        }
        return true;
    }
}