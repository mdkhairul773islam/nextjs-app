import bcrypt from 'bcrypt';
import prisma from '../../../lib/prisma';

export default async function handler(req, res) {
  const { email, password } = req.body;

  if (req.method === 'POST') {
    const salt = bcrypt.genSaltSync();
    const hashedPassword = bcrypt.hashSync(password, salt);
    try {
      const user = await prisma.user.create({
        data: {
          email,
          password: hashedPassword,
        },
      });
      res.status(200).json({ id: user.id, email: user.email });
    } catch (error) {
      res.status(500).json({ error: 'Error registering user' });
    }

  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
