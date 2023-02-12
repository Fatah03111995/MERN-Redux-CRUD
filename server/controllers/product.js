import Product from '../modules/product.js';

export const getProduct = async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json(products);
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
};

export const getProductById = async (req, res) => {
  const { id } = req.params;
  try {
    const product = await Product.findById(id);
    res.status(200).json(product);
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
};

export const saveProduct = async (req, res) => {
  const { title, price } = req.body;
  try {
    const newProduct = new Product({ title, price });
    const saved = await newProduct.save();
    res.status(201).json(saved);
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
};
export const editProduct = async (req, res) => {
  const { id } = req.params;

  try {
    const update = await Product.updateOne({ _id: id }, { $set: req.body });
    res.status(201).json(update);
  } catch (e) {
    res.status(500).message(e.message);
  }
};
export const deleteProduct = async (req, res) => {
  const { id } = req.params;
  try {
    const del = await Product.deleteOne({ _id: id });
    res.status(200).json(del);
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
};
