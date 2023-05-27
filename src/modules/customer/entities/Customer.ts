export class Customer {
    private readonly _name: string;
    private readonly _cpf: string;
    private  _address: string;
    private _phone: string;

    private constructor(name: string, cpf: string, address: string, phone: string){
        this._name = name;
        this._cpf = cpf;
        this._address = address;
        this._phone = phone;
    }
}