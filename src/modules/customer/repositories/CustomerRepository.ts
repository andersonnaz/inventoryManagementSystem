import { Updatable } from "../../../shared/database/Repository/Updatable";
import { Deletable } from "../../../shared/database/Repository/Deletable";
import { Listable } from "../../../shared/database/Repository/Listable";
import { Findable } from "../../../shared/database/Repository/Findable";
import { Saveable } from "../../../shared/database/Repository/Saveable";
import { Customer } from "../entities/Customer";

export interface CustomerRepository extends
    Saveable<Customer>,
    Findable<Customer>,
    Listable<Customer>,
    Updatable<Customer>,
    Deletable
{}