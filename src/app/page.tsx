"use client"

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleMinimal from '@/components/navbar/NavbarStyleMinimal';
import HeroBillboardCarouselSplit from '@/components/sections/hero/HeroBillboardCarouselSplit';
import AboutMetric from '@/components/sections/about/AboutMetric';
import FeatureCardFourteen from '@/components/sections/feature/FeatureCardFourteen';
import TestimonialCardTwelve from '@/components/sections/testimonial/TestimonialCardTwelve';
import ContactSplitForm from '@/components/sections/contact/ContactSplitForm';
import FooterBaseCard from '@/components/sections/footer/FooterBaseCard';
import { Clock, Users, ChefHat, Award } from 'lucide-react';

export default function LandingPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="text-shift"
      defaultTextAnimation="background-highlight"
      borderRadius="soft"
      contentWidth="small"
      sizing="smallSizeLargeTitles"
      background="plain"
      cardStyle="solid-accent"
      primaryButtonStyle="shadow"
      secondaryButtonStyle="outline"
      headingFontWeight="bold"
    >
      <div id="nav" data-section="nav">
        <NavbarStyleMinimal
          logoSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1765884238266-q34u6kn2.jpg"
          logoAlt="Ebash Restaurant Logo"
          brandName="Ebash"
          button={{
            text: "Reserve a Table",
            href: "contact"
          }}
          className="bg-background border-b border-accent/20"
          buttonClassName="bg-primary-cta text-background hover:bg-primary-cta/90"
          buttonTextClassName="font-bold"
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroBillboardCarouselSplit
          title="Culinary Excellence Awaits"
          mediaItems={[
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1765884239384-dzfwk69e.jpg",
              imageAlt: "Gourmet plated restaurant dish"
            },
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1765884240409-tuv8dj5d.jpg",
              imageAlt: "Fine dining food presentation"
            },
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1765884241485-yrfc3f2y.jpg",
              imageAlt: "Luxury restaurant meal"
            },
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1765884242651-aogl247o.jpg",
              imageAlt: "Elegant main course"
            },
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1765884243914-4hr2kc6v.jpg",
              imageAlt: "Beautiful dessert presentation"
            }
          ]}
          buttons={[
            {
              text: "View Menu",
              href: "#"
            },
            {
              text: "Reserve Now",
              href: "contact"
            }
          ]}
          className="bg-background"
          titleClassName="text-4xl md:text-6xl font-bold text-foreground"
        />
      </div>

      <div id="about" data-section="about">
        <AboutMetric
          title="Crafting Unforgettable Dining Experiences Since 2008"
          metrics={[
            {
              icon: Clock,
              label: "Years of Excellence",
              value: "16+"
            },
            {
              icon: Users,
              label: "Happy Guests",
              value: "50K+"
            },
            {
              icon: ChefHat,
              label: "Signature Dishes",
              value: "32"
            },
            {
              icon: Award,
              label: "Chef Recognitions",
              value: "12"
            }
          ]}
          useInvertedBackground="noInvert"
          className="bg-background py-20"
          titleClassName="text-3xl md:text-5xl font-bold text-foreground mb-16"
        />
      </div>

      <div id="features" data-section="features">
        <FeatureCardFourteen
          title="Our Signature Collection"
          description="Discover the culinary masterpieces that define Ebash. Each dish is crafted with premium ingredients and artistic precision."
          features={[
            {
              id: "1",
              title: "Wagyu Ribeye",
              description: "Premium Japanese Wagyu grilled to perfection with seasonal vegetables and truffle reduction",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1765884244848-ofh4jshb.jpg",
              imageAlt: "Wagyu Ribeye"
            },
            {
              id: "2",
              title: "Handmade Pasta",
              description: "Fresh daily pasta with imported Italian ingredients and house-made sauces",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1765884245984-d67trire.jpg",
              imageAlt: "Signature Pasta Dish"
            }
          ]}
          textboxLayout="default"
          useInvertedBackground="noInvert"
          className="bg-background py-20"
          titleClassName="text-3xl md:text-5xl font-bold text-foreground mb-4"
          descriptionClassName="text-lg text-foreground/80 mb-12"
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardTwelve
          testimonials={[
            {
              id: "1",
              name: "Michael Chen",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1765884247089-3rhlfivj.jpg",
              imageAlt: "Michael Chen"
            },
            {
              id: "2",
              name: "Sarah Anderson",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1765884248238-63bjveac.jpg",
              imageAlt: "Sarah Anderson"
            },
            {
              id: "3",
              name: "James Wilson",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1765884249046-wendajiz.jpg",
              imageAlt: "James Wilson"
            },
            {
              id: "4",
              name: "Emma Rodriguez",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1765884250158-m4vgvjn5.jpg",
              imageAlt: "Emma Rodriguez"
            }
          ]}
          cardTitle="Trusted by thousands of guests seeking exceptional dining experiences"
          cardTag="Guest Reviews"
          useInvertedBackground="noInvert"
          className="bg-background py-20"
          cardTitleClassName="text-2xl md:text-4xl font-bold text-foreground"
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactSplitForm
          title="Reserve Your Table"
          description="Join us for an unforgettable culinary journey. Book your reservation today and experience the finest dining at Ebash."
          inputs={[
            {
              name: "fullName",
              type: "text",
              placeholder: "Full Name",
              required: true
            },
            {
              name: "email",
              type: "email",
              placeholder: "Email Address",
              required: true
            },
            {
              name: "phone",
              type: "tel",
              placeholder: "Phone Number",
              required: true
            },
            {
              name: "date",
              type: "date",
              placeholder: "Preferred Date",
              required: true
            }
          ]}
          textarea={{
            name: "specialRequests",
            placeholder: "Special requests or dietary preferences",
            rows: 5,
            required: false
          }}
          buttonText="Confirm Reservation"
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1765884251450-0qr178ut.jpg"
          imageAlt="Ebash Restaurant Interior"
          useInvertedBackground="noInvert"
          mediaPosition="right"
          className="bg-background py-20"
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterBaseCard
          logoText="Ebash"
          columns={[
            {
              title: "Dining",
              items: [
                {
                  label: "Menu",
                  href: "#"
                },
                {
                  label: "Reservations",
                  href: "#contact"
                },
                {
                  label: "Private Events",
                  href: "#"
                },
                {
                  label: "Wine Selection",
                  href: "#"
                }
              ]
            },
            {
              title: "Company",
              items: [
                {
                  label: "About Us",
                  href: "#about"
                },
                {
                  label: "Chef Biography",
                  href: "#"
                },
                {
                  label: "Careers",
                  href: "#"
                },
                {
                  label: "Contact",
                  href: "#contact"
                }
              ]
            },
            {
              title: "Information",
              items: [
                {
                  label: "Hours",
                  href: "#"
                },
                {
                  label: "Location",
                  href: "#"
                },
                {
                  label: "Delivery",
                  href: "#"
                },
                {
                  label: "Gift Cards",
                  href: "#"
                }
              ]
            }
          ]}
          copyrightText="© 2024 Ebash Restaurant. All rights reserved."
          className="bg-background py-20"
          logoTextClassName="text-3xl font-bold text-primary-cta"
        />
      </div>
    </ThemeProvider>
  );
}