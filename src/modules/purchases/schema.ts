import * as mongoose from 'mongoose';
import {ModificationNote} from '../common/model';

const Schema = mongoose.Schema;

const schema = new Schema({
    name: String,
    user_id: String,
    created_at: Date,
    is_deleted: {
        type: Boolean,
        default: false
    },
    modification_notes: [ModificationNote]
});

export default mongoose.model('purchases', schema);