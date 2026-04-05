"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import FooterBaseCard from '@/components/sections/footer/FooterBaseCard';
import HeroBillboardRotatedCarousel from '@/components/sections/hero/HeroBillboardRotatedCarousel';
import NavbarStyleCentered from '@/components/navbar/NavbarStyleCentered/NavbarStyleCentered';
import ProductCardThree from '@/components/sections/product/ProductCardThree';

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

        <div id="archive" data-section="archive" className="py-20 bg-[#1A1412]">
          <ProductCardThree
            textboxLayout="default"
            gridVariant="four-items-2x2-equal-grid"
            animationType="blur-reveal"
            useInvertedBackground={false}
            products={[
              { id: "p1", name: "ARTIFACT 01", price: "", imageSrc: "http://img.b2bpic.net/free-photo/close-up-girl-with-vintage-backpack_23-2148752408.jpg" },
              { id: "p2", name: "ARTIFACT 02", price: "", imageSrc: "http://img.b2bpic.net/free-photo/side-view-woman-wearing-heels_23-2149741919.jpg" },
              { id: "p3", name: "ARTIFACT 03", price: "", imageSrc: "http://img.b2bpic.net/free-photo/button-warm-blue-shirt-macro-shot_169016-23219.jpg" },
              { id: "p4", name: "ARTIFACT 04", price: "", imageSrc: "http://img.b2bpic.net/free-photo/young-woman-portrait-with-overexposed-moving-style_23-2149495261.jpg" },
            ]}
            title="THE AUTHORIZED ARCHIVE."
            description="An curated collection of structural heritage."
            className="text-[#EAE7E1]"
            textBoxTitleClassName="font-['--font-unbounded'] font-bold text-6xl tracking-tighter uppercase"
            textBoxDescriptionClassName="text-sm uppercase tracking-[0.2em] opacity-60"
            imageClassName="filter grayscale contrast-[1.5] brightness-90 sepia-0 mix-blend-multiply opacity-90 contrast-more"
            cardNameClassName="text-[10px] font-['--font-montserrat'] uppercase tracking-[0.3em] text-[#EAE7E1]"
          />
        </div>

        <div id="footer" data-section="footer" className="py-20">
          <FooterBaseCard
            logoText="ESTATE FASHION HOUSE. 2026. FOUNDED BY THE GRISHA."
            columns={[
                { title: "NAVIGATE", items: [{ label: "LINKTREE", href: "https://linktr.ee/estate.fashion.house" }] }
            ]}
            className="tracking-[0.1em] text-center uppercase"
          />
        </div>
      </ReactLenis>
    </ThemeProvider>
  );
}