export default function handler(req: any, res: any) {
  if (req.method === 'POST') {
    console.log('User Data:', req.body);
    res.status(200).json({ ok: true });
  } else {
    res.status(405).end();
  }
}
