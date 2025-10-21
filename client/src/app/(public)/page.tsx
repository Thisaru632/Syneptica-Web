import { getReviews } from "@/actions/review.action";
import HeroSection from "@/components/home/HeroSection";
import ProductCarousel from "@/components/home/ProductCarousel";
import Testimonial from "@/components/home/TestimonialCarousel";
import VisionValuesProcess from "@/components/home/VisionValuesProcess";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import BackgroundPattern from "@/components/ui/common/BackgroundPattern";
import { TestimonialItem } from "@/constants/testimonials";

export default async function Home() {
  const reviews = await getReviews();

  const testimonials: TestimonialItem[] = reviews.map((item) => ({
    name: item.name,
    comment: item.description,
    rating: item.rating,
  }));

  return (
    <div>
      <BackgroundPattern>
        <HeroSection />
        <VisionValuesProcess />
        <ProductCarousel />
        <WhyChooseUs />
        <Testimonial testimonials={testimonials} />
      </BackgroundPattern>
    </div>
  );
}
