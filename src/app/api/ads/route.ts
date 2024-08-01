import fs from 'fs';
import path from 'path';

export async function GET() {
  const filePath = path.join(process.cwd(), 'public', 'ads.json');
  try {
    const jsonData = fs.readFileSync(filePath, 'utf-8');
    const ads = JSON.parse(jsonData);
    return new Response(JSON.stringify(ads), {
      headers: {
        'Content-Type': 'application/json',
      },
    });
  } catch (error) {
    return new Response(JSON.stringify({ message: 'Failed to read file' }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }
}
