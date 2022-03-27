import mongoose, {Schema} from "mongoose";
import IProduct from "../interfaces/product.interface";

const ProductSchema: Schema = new Schema({
        name: {type: String, required: true},
        price: {type: Number, required: true},
        quantity: {type: Number, required: true}
    },
    {
        timestamps: true
    });

export default mongoose.model<IProduct>('Product',ProductSchema);
