const Product = require('../models/product');
const ProductReview = require('../models/productReview');

const getProducts = async (req, res) => {
  try {
    const queryObj = {};

    if (req.query.search) {
      queryObj.name = { $regex: req.query.search, $options: 'i' }; 
    }

    if (req.query.category) {
      queryObj.category = req.query.category;
    }

    if (req.query.price) {

      queryObj.price = {};

      if (req.query.price.gte) queryObj.price.$gte = Number(req.query.price.gte);

      if (req.query.price.lte) queryObj.price.$lte = Number(req.query.price.lte);
    }

    let sortBy = '-createdAt'; 
    if (req.query.sort) {
      sortBy = req.query.sort.split(',').join(' ');
    }

    
    const page = Number(req.query.page) || 1;
    const limit = Number(req.query.limit) || 10;
    const skip = (page - 1) * limit;


    const products = await Product.find(queryObj)
      .sort(sortBy)
      .skip(skip)
      .limit(limit)
      .populate('reviews'); 

    const total = await Product.countDocuments(queryObj);

    res.status(200).json({
      success: true,
      pagination: {
        totalDocs: total,
        totalPages: Math.ceil(total / limit),
        currentPage: page,
        limit
      },
      data: products
    });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

module.exports = {
  getAdvancedProducts
};