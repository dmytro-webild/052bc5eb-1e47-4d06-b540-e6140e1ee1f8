"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import FaqSplitMedia from '@/components/sections/faq/FaqSplitMedia';
import FooterBaseCard from '@/components/sections/footer/FooterBaseCard';
import HeroBillboardRotatedCarousel from '@/components/sections/hero/HeroBillboardRotatedCarousel';
import LegalSection from '@/components/legal/LegalSection';
import NavbarStyleCentered from '@/components/navbar/NavbarStyleCentered/NavbarStyleCentered';
import ProductCardThree from '@/components/sections/product/ProductCardThree';
import TextAbout from '@/components/sections/about/TextAbout';
import ButtonTextUnderline from '@/components/button/ButtonTextUnderline';

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="hover-magnetic"
        defaultTextAnimation="reveal-blur"
        borderRadius="soft"
        contentWidth="mediumSmall"
        sizing="largeSizeMediumTitles"
        background="noise"
        cardStyle="outline"
        primaryButtonStyle="flat"
        secondaryButtonStyle="glass"
        headingFontWeight="bold"
    >
      <ReactLenis root>
        <div id="nav" data-section="nav" className="py-10">
          <NavbarStyleCentered
            navItems={[
              { name: "ARCHIVE", id: "archive" },
              { name: "SYSTEM", id: "faq" },
            ]}
            brandName="ESTATE"
            className="tracking-[0.2em] uppercase"
          />
        </div>

        <div id="hero" data-section="hero" className="py-10">
          <HeroBillboardRotatedCarousel
            background={{ variant: "plain" }}
            title="ESTATE: THE NEW STANDARD."
            description="Curated rock-vision. Architectural silhouettes. A new archival approach to fashion."
            buttons={[{ text: "EXPLORE THE COLLECTION", href: "#archive" }]}
            carouselItems={[
              { id: "1", imageSrc: "http://img.b2bpic.net/free-photo/woman-lifestyle-fashion-shoot_53876-24683.jpg?_wi=1", imageAlt: "Fashion portrait" },
              { id: "2", imageSrc: "http://img.b2bpic.net/free-photo/rough-concrete-wall-surface_23-2148413267.jpg?_wi=1", imageAlt: "Architectural detail" },
              { id: "3", imageSrc: "http://img.b2bpic.net/free-photo/young-woman-portrait-with-overexposed-moving-style_23-2149495261.jpg?_wi=1", imageAlt: "Portrait" },
              { id: "4", imageSrc: "http://img.b2bpic.net/free-photo/woman-lifestyle-fashion-shoot_53876-24683.jpg?_wi=2", imageAlt: "Fashion portrait" },
              { id: "5", imageSrc: "http://img.b2bpic.net/free-photo/rough-concrete-wall-surface_23-2148413267.jpg?_wi=2", imageAlt: "Architectural detail" },
              { id: "6", imageSrc: "http://img.b2bpic.net/free-photo/young-woman-portrait-with-overexposed-moving-style_23-2149495261.jpg?_wi=2", imageAlt: "Portrait" },
            ]}
            titleClassName="font-bold tracking-[-0.02em] uppercase text-[clamp(3rem,8vw,8rem)] leading-[0.9]"
            carouselClassName="opacity-80"
          />
        </div>

        <div id="archive" data-section="archive" className="py-20">
          <ProductCardThree
            textboxLayout="split-description"
            gridVariant="four-items-2x2-equal-grid"
            animationType="blur-reveal"
            products={[
              { id: "p1", name: "ARCHIVE-01", price: "00.00", imageSrc: "http://img.b2bpic.net/free-photo/close-up-girl-with-vintage-backpack_23-2148752408.jpg" },
              { id: "p2", name: "ARCHIVE-02", price: "00.00", imageSrc: "http://img.b2bpic.net/free-photo/side-view-woman-wearing-heels_23-2149741919.jpg" },
              { id: "p3", name: "ARCHIVE-03", price: "00.00", imageSrc: "http://img.b2bpic.net/free-photo/button-warm-blue-shirt-macro-shot_169016-23219.jpg" },
              { id: "p4", name: "ARCHIVE-04", price: "00.00", imageSrc: "http://img.b2bpic.net/free-photo/young-woman-portrait-with-overexposed-moving-style_23-2149495261.jpg" },
            ]}
            title="ARCHIVAL GALLERY"
            description="High-fashion portraits meet structural forms in grain-filmed detail."
          />
        </div>

        <div id="footer" data-section="footer" className="py-20">
          <FooterBaseCard
            logoText="ESTATE FASHION HOUSE. 2026. FOUNDED BY THE GRISHA."
            columns={[
                { title: "NAVIGATE", items: [{ label: "LINKTREE", href: "https://linktr.ee/estate" }] }
            ]}
            className="tracking-[0.1em] text-center uppercase"
          />
        </div>
      </ReactLenis>
    </ThemeProvider>
  );
}