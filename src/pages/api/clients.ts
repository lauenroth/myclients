// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { NextApiRequest, NextApiResponse } from 'next';

type ClientData = {
  id: string;
  name: string;
  language: string;
  email?: string;
  phone?: string;
  address?: string;
  country?: string;
};

export default function handler(req: NextApiRequest, res: NextApiResponse<ClientData[]>) {
  res.status(200).json([
    { id: 'name', name: 'Daimler Chrysler', language: 'de', country: 'Germany' },
    { id: 'name', name: 'Ecode23', language: 'en', country: 'Belgium' },
    { id: 'name', name: 'Fujitsu Technology Solutions', language: 'en', country: 'Belgium' },
    { id: 'name', name: 'In The Pocket', language: 'en', country: 'Belgium' },
    { id: 'name', name: 'Init AG', language: 'de', country: 'Germany' },
    { id: 'name', name: 'Perackis Architekten', language: 'de', country: 'Germany' },
    { id: 'name', name: 'Steuerbüro Lauenroth', language: 'de', country: 'Germany' },
    { id: 'name', name: 'T-Systems', language: 'de', country: 'Germany' },
    { id: 'name', name: 'Unisys', language: 'en', country: 'Belgium' },
    { id: 'name', name: 'Worldia', language: 'en', country: 'France' },
  ]);
}
