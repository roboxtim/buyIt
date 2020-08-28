import { ModificationNote } from "../common/model";

export interface IPurchases {
    _id?: String;
    name: String;
    user_id: String;
    is_deleted?: Boolean;
    created_at: Date,
    modification_notes: ModificationNote[]
}