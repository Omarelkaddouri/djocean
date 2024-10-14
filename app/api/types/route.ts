// app/api/types/route.ts

import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const response = await fetch('https://admin-djstage.vercel.app/api/types/list-types');
    const data = await response.json();

    if (!response.ok) {
      return NextResponse.json({ message: 'Failed to fetch data' }, { status: 500 });
    }

    return NextResponse.json(data);
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: 'Failed to load types' }, { status: 500 });
  }
}
