import products from "@/utilities/product";
export default function handler(req, res) {
    try {
      const { pid } = req.query;
      const product = products.filter((item)=>item.product_id==pid);
      if (!product) {
        throw new Error('Post not found');
      }
  
      res.status(200).json(product);
    } catch (error) {
      console.error(error);
  
      const statusCode = error.message === 'Post not found' ? 404 : 500;
      res.status(statusCode).json({ error: error.message });
    }
  }
  