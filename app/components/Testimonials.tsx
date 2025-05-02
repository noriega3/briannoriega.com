import { QuoteBlock } from "./ui/quote-block";
import Script from "next/script";
import { Product, WithContext } from "schema-dts";

const jsonLd: WithContext<Product> = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "Software Engineering Development",
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "5",
    reviewCount: "3",
  },
  review: [
    {
      "@type": "Review",
      author: {
        "@type": "Person",
        name: "Markus N",
      },
      name: "Need a Skilled, Reliable Developer? Lawrence is Your Guy!",
      reviewBody:
        "Lawrence is an absolute pro. He tackled a tricky fix on a complex website for my client, and the experience was seamless. His communication was spot on. His availability was flexible—even with my unpredictable deadlines. His skills were rock-solid and his work was well-documented. I even threw in an extra lead capture repair request, and he handled it with ease and expertise. If you need a sharp, responsive, and easy-to-work-with developer, look no further. I’ll definitely be hiring him again. I highly recommend him!",
      reviewRating: {
        "@type": "Rating",
        ratingValue: 5,
      },
    },
    {
      "@type": "Review",
      author: {
        "@type": "Organization",
        name: "Conversion Fanatics",
      },
      reviewBody: "Great developer, professional, and easy to work with!",
      reviewRating: {
        "@type": "Rating",
        ratingValue: 5,
      },
    },
    {
      "@type": "Review",
      author: {
        "@type": "Person",
        name: "Madeline N",
      },
      reviewBody: "Lawrence was great. Quick and professional!",
      reviewRating: {
        "@type": "Rating",
        ratingValue: 5,
      },
    },
  ],
};

const reviews = [
  {
    variant: "highlight",
    author: "Markus N.",
    icon: "/bnsite/testimonial1.png",
    authorTitle: "Client",
    title: "Need a Skilled, Reliable Developer? Lawrence is Your Guy!",
    quote:
      "Lawrence is an absolute pro. He tackled a tricky fix on a complex site for my client, and the experience was seamless. His communication was spot on. His availability was flexible even with my unpredictable deadlines. His skills were rock-solid and his work was well-documented. I even threw in an extra lead capture repair request, and he handled it with ease and expertise. If you need a sharp, responsive, and easy-to-work-with developer, look no further. I’ll definitely be hiring him again. I highly recommend him!",
  },
  {
    variant: "rating",
    author: "Manish P.",
    icon: "/bnsite/testimonial2.png",
    authorTitle: "Conversion Fanatics",
    quote: "Great developer, professional, and easy to work with!",
  },
  {
    variant: "simple",
    author: "Marcelle N.",
    authorTitle: "Client",
    quote: "Lawrence was great. Quick and professional!",
  },
];

export const Testimonials: React.FC = () => {
  return (
    <>
      <Script
        id="testimonials-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd),
        }}
      />

      <section id="testimonials" className="py-20 ">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 ">Testimonials</h2>
              <p className="text-lg text-gray-300 mx-auto">
                I specialize in delivering professional application software development services
                tailored to meet your needs.
              </p>
            </div>

            <div className="flex flex-col md:grid grid-flow-col grid-rows-2 gap-4">
              {reviews.map((reviewProps, i) => (
                <QuoteBlock key={i} {...reviewProps} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};