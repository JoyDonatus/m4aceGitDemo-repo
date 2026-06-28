//Instructions
// Complex Queries - Implement advanced filtering, sorting, and search functionality with pagination
// Aggregation Pipeline - Build analytics dashboard using aggregation for statistics, grouping, and calculations
// Performance Optimization - Add indexes and analyze query performance with explain()
// Virtual Population - Implement virtual properties and reverse population for related data
// E-commerce Query System - Build a complete product search system with filters, price ranges, and ratings


const Product = require('../models/product');
const Review = require('../models/productReview'); 
const getProductWithReviews = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id).populate('reviews');
    
    res.status(200).json({ success: true, data: product });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};