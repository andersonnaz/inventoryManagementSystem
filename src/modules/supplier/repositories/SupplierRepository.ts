import { Deletable } from "../../../shared/database/Repository/Deletable";
import { Listable } from "../../../shared/database/Repository/Listable";
import { Updatable } from "../../../shared/database/Repository/Updatable";
import { Findable } from "../../../shared/database/Repository/Findable";
import { Saveable } from "../../../shared/database/Repository/Saveable";
import { Supplier } from "../entities/Supplier";

export interface SupplierRepository extends
    Saveable<Supplier>,
    Deletable,
    Findable<Supplier>,
    Listable<Supplier>,
    Saveable<Supplier>,
    Updatable<Supplier>
{}