import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req, res) {
  if (req.method === 'GET') {
    const categories = await prisma.category.findMany({
      include: {
        subcategories: true,
      },
    });
    res.status(200).json(categories);
  } else if (req.method === 'POST') {
    // ... (same as before)
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}