import { NextRequest, NextResponse } from 'next/server';
import { getReviewById, updateReview, deleteReview } from '@/actions/review.action';
import { IReview } from '@/models/Review';

export async function GET(
  request: NextRequest,
  context: { params: Promise<{ id: string }> }
) {
  const { id } = await context.params; // <-- await here
  // In static mode, we'll accept any string as a valid ID
  if (!id || typeof id !== 'string') {
    return NextResponse.json({ error: 'Invalid ID' }, { status: 400 });
  }

  try {
    const review: IReview | null = await getReviewById(id);
    if (!review) {
      return NextResponse.json({ error: 'Review not found' }, { status: 404 });
    }
    return NextResponse.json(review);
  } catch (error) {
    console.error('Error fetching review:', error);
    return NextResponse.json({ error: 'Failed to fetch review' }, { status: 500 });
  }
}

export async function PUT(
  request: NextRequest,
  context: { params: Promise<{ id: string }> }
) {
  const { id } = await context.params;
  // In static mode, we'll accept any string as a valid ID
  if (!id || typeof id !== 'string') {
    return NextResponse.json({ error: 'Invalid ID' }, { status: 400 });
  }

  try {
    const { name, email, description, rating } = await request.json();
    const updatedReview: IReview | null = await updateReview(id, {
      name,
      email,
      description,
      rating: Number(rating),
    });

    if (!updatedReview) {
      return NextResponse.json({ error: 'Review not found' }, { status: 404 });
    }
    return NextResponse.json(updatedReview);
  } catch (error) {
    console.error('Error updating review:', error);
    return NextResponse.json({ error: 'Failed to update review' }, { status: 500 });
  }
}

export async function DELETE(
  request: NextRequest,
  context: { params: Promise<{ id: string }> }
) {
  const { id } = await context.params;
  // In static mode, we'll accept any string as a valid ID
  if (!id || typeof id !== 'string') {
    return NextResponse.json({ error: 'Invalid ID' }, { status: 400 });
  }

  try {
    const deleted = await deleteReview(id);
    if (!deleted) {
      return NextResponse.json({ error: 'Review not found' }, { status: 404 });
    }
    return new NextResponse(null, { status: 204 });
  } catch (error) {
    console.error('Error deleting review:', error);
    return NextResponse.json({ error: 'Failed to delete review' }, { status: 500 });
  }
}
