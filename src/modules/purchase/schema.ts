import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;

const schema = new Schema({
    name: String,
    list_id: String,
    created_at: Date,
});

export default mongoose.model('list_purchase', schema);