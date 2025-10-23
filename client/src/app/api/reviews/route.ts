import { NextResponse } from 'next/server';
import { IReview } from '@/models/Review';
import { createReview, getReviews } from '@/actions/review.action';

export async function GET() {
  try {
    const reviews: IReview[] = await getReviews();
    return NextResponse.json(reviews);
  } catch (error) {
    console.error('Error fetching review:', error);
    console.error('Error details:', {
      message: error instanceof Error ? error.message : 'Unknown error',
      stack: error instanceof Error ? error.stack : undefined,
      name: error instanceof Error ? error.name : 'Unknown'
    });
    return NextResponse.json({ error: 'Failed to fetch reviews' }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const { name, email, description, rating } = await request.json();
    if (!name || !email || !description || !rating) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }
    const newReview: IReview = await createReview({ name, email, description, rating: Number(rating) });
    return NextResponse.json(newReview, { status: 201 });
  } catch (error) {
    console.error('Error creating review:', error);
    return NextResponse.json({ error: 'Failed to create review' }, { status: 500 });
  }
}