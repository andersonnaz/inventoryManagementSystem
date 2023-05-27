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

    public static create(name: string, cpf: string, address: string, phone: string): Customer {
        this.validate(name, cpf, address, phone);
        const customer = new Customer(name, cpf, address, phone);
        return customer;
    }

    private static validate(name: string, cpf: string, address: string, phone: string): boolean {
        if(!name){
            throw new Error('name invalid!');
        }
        if(!cpf){
            throw new Error('cpf invalid!');
        }
        if(!address){
            throw new Error('address invalid');
        }
        if(!phone){
            throw new Error('phone invalid');
        }
        return true;
    }

    get name(): string {
        return this._name;
    }

    get cpf(): string {
        return this._cpf;
    }
}