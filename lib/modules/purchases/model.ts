import { ModificationNote } from "../common/model";

export interface IPurchases {
    _id?: String;
    name: String;
    user_id: String;
    is_deleted?: Boolean;
    modification_notes: ModificationNote[]
}