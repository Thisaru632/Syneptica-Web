"use server";

import { IReview } from '@/models/Review';

// Mock data for static site deployment
const mockReviews: IReview[] = [
  {
    _id: "1",
    name: "Sarah Johnson",
    email: "sarah@example.com",
    description: "Amazing quality and fast delivery! The products exceeded my expectations.",
    rating: 5,
    createdAt: new Date("2024-01-15"),
    updatedAt: new Date("2024-01-15")
  },
  {
    _id: "2", 
    name: "Mike Chen",
    email: "mike@example.com",
    description: "Great customer service and excellent product quality. Highly recommended!",
    rating: 5,
    createdAt: new Date("2024-01-10"),
    updatedAt: new Date("2024-01-10")
  },
  {
    _id: "3",
    name: "Emily Davis",
    email: "emily@example.com", 
    description: "Love the design and comfort. Will definitely order again!",
    rating: 4,
    createdAt: new Date("2024-01-05"),
    updatedAt: new Date("2024-01-05")
  }
];

// CREATE - Mock function for static deployment
export async function createReview(data: { name: string; email: string; description: string; rating: number }): Promise<IReview> {
  // In static mode, we just return the data without saving to database
  const newReview: IReview = {
    _id: Date.now().toString(),
    ...data,
    createdAt: new Date(),
    updatedAt: new Date()
  };
  
  console.log("Review creation disabled in static mode:", newReview);
  return newReview;
}

// READ all - Return mock data
export async function getReviews(): Promise<IReview[]> {
  return mockReviews;
}

// READ one - Mock function
export async function getReviewById(id: string): Promise<IReview | null> {
  return mockReviews.find(review => review._id === id) || null;
}

// UPDATE - Mock function
export async function updateReview(id: string, data: Partial<{ name: string; email: string; description: string; rating: number }>): Promise<IReview | null> {
  const review = mockReviews.find(r => r._id === id);
  if (!review) return null;
  
  const updatedReview = { ...review, ...data, updatedAt: new Date() };
  console.log("Review update disabled in static mode:", updatedReview);
  return updatedReview;
}

// DELETE - Mock function
export async function deleteReview(id: string): Promise<boolean> {
  const index = mockReviews.findIndex(r => r._id === id);
  if (index === -1) return false;
  
  console.log("Review deletion disabled in static mode for ID:", id);
  return true;
}