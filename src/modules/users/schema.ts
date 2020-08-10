import * as mongoose from 'mongoose';
import {ModificationNote} from '../common/model';

const Schema = mongoose.Schema;

const schema = new Schema({
    name: String,
    email: {
        type: String,
        unique : true
    },
    salt: String,
    hash: String,
    is_deleted: {
        type: Boolean,
        default: false
    },
    modification_notes: [ModificationNote]
});

export default mongoose.model('users', schema);