import mongoose, { Schema } from 'mongoose';
const productSchema = new Schema({
  title: {
    require: true,
    type: String,
  },
  price: {
    require: true,
    type: String,
  },
});

const productModel = mongoose.model('product', productSchema);
export default productModel;
