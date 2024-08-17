import { NextResponse } from 'next/server';
import fs from 'node:fs';
import path from 'node:path';
import { v4 as uuidv4 } from 'uuid';

export async function GET() {
  const NUM_UUIDS = 1_000_000;
  const uuids = [];

  // Gera UUIDs
  for (let i = 0; i < NUM_UUIDS; i++) {
    uuids.push(uuidv4());
  }

  // Caminho do arquivo
  const filePath = path.join(process.cwd(), 'public', 'uuids.txt');

  // Salva os UUIDs no arquivo
  fs.writeFile(filePath, uuids.join('\n'), (err) => {
    if (err) {
      console.error('An error occurred:', err.message);
      return new NextResponse(`Failed to write UUIDs to file.`, {
        status: 500,
      });
    }

    return NextResponse.json(`Successfully generated ${NUM_UUIDS} UUIDs.`, {
      status: 200,
    });
  });

  return NextResponse.json(`Successfully`, {
    status: 200,
  });
}
