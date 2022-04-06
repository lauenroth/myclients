import { NextApiRequest, NextApiResponse } from 'next';

export interface ClientResponse {
  id: string;
  name: string;
  language?: string;
}

export default function clientHandler(req: NextApiRequest, res: NextApiResponse<ClientResponse>) {
  const { method } = req;
  const id = req.query.id as string;
  const name = req.query.name as string;

  switch (method) {
    case 'GET':
      // Get data from your database
      res.status(200).json({ id, name: `Client ${id}` });
      break;
    case 'PUT':
      // Update or create data in your database
      res.status(200).json({ id, name: name || `Client ${id}` });
      break;
    default:
      res.setHeader('Allow', ['GET', 'PUT']);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}
