export default async function handler(req, res) {
  try {
    const response = await fetch('http://192.223.31.225:30120/nolosha_webmap/list.json');
    const data = await response.json();
    res.status(200).json(data);
  } catch (error) {
    console.error('Error fetching list.json:', error);
    res.status(500).json({ error: 'Failed to fetch list.json' });
  }
}
