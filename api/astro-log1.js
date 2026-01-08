export default function handler(req, res) {
  if (req.method === 'POST') {
    const data = req.body; // { name, dob, zodiac }
    console.log("Received data for partner:", data);

    // You can store in a database here (optional)
    res.status(200).json({ message: 'Data received successfully!' });
  } else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
}
