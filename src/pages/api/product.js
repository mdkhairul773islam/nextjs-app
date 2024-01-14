import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req, res) {
  if (req.method === 'GET') {
    const product = await prisma.product.findMany({
      include: {
        category: true,
        subcategory: true,
      },
    });

    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }

    res.status(200).json(product);
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}