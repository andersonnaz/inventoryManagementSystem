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
}