import bcrypt from 'bcrypt';
import prisma from '../../../lib/prisma';

export default async function handler(req, res) {
  const { name, email, password } = req.body;
  console.log(req.body);

  if (req.method === 'POST') {
    const salt = bcrypt.genSaltSync();
    const hashedPassword = bcrypt.hashSync(password, salt);
    try {
      const user = await prisma.user.create({
        data: {
          name, email,
          password: hashedPassword,
        },
      });
      res.status(200).json({ id: user.id, name: user.name, email: user.email });
    } catch (error) {
      res.status(500).json({ error: 'Error registering user' });
    }

  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
