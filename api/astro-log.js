export default function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { name, dob, zodiac } = req.body;

  // 👀 THIS WILL APPEAR IN VERCEL DASHBOARD LOGS
  console.log('ASTRO SUBMISSION RECEIVED');
  console.log('Name:', name);
  console.log('DOB:', dob);
  console.log('Zodiac:', zodiac);
  console.log('-----------------------');

  return res.status(200).json({
    success: true,
    message: 'Astrology data logged successfully'
  });
}
