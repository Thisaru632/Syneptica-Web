// Static mode - no mongoose dependency
export interface IReview {
  _id: string;
  name: string;
  email: string;
  description: string;
  rating: number;
  createdAt: Date;
  updatedAt: Date;
}

// Mock Review model for static deployment
const Review = {
  // Mock methods that don't actually do anything
  find: () => Promise.resolve([]),
  findById: () => Promise.resolve(null),
  findByIdAndUpdate: () => Promise.resolve(null),
  findByIdAndDelete: () => Promise.resolve(null),
  save: function() { return Promise.resolve(this); },
  toObject: function() { return this; }
};

export default Review;