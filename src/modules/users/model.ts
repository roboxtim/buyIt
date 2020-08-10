import { ModificationNote } from "../common/model";

export interface IUser {
    _id?: String;
    name: String;
    email: {
        type: String,
        unique : true,
        required: true,
    },
    salt: String;
    hash: String;
    is_deleted?: Boolean;
    modification_notes: ModificationNote[]
}