export default function handler(req: { method: string; body: any; }, res: { status: (arg0: number) => { (): any; new(): any; json: { (arg0: { ok: boolean; }): void; new(): any; }; end: { (): void; new(): any; }; }; }) {
  if (req.method === 'POST') {
    console.log('User Data:', req.body);
    res.status(200).json({ ok: true });
  } else {
    res.status(405).end();
  }
}
