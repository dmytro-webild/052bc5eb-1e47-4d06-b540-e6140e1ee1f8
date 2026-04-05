"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import FaqSplitMedia from '@/components/sections/faq/FaqSplitMedia';
import FooterBaseCard from '@/components/sections/footer/FooterBaseCard';
import HeroBillboardRotatedCarousel from '@/components/sections/hero/HeroBillboardRotatedCarousel';
import LegalSection from '@/components/legal/LegalSection';
import NavbarStyleCentered from '@/components/navbar/NavbarStyleCentered/NavbarStyleCentered';
import ProductCardOne from '@/components/sections/product/ProductCardOne';
import TextAbout from '@/components/sections/about/TextAbout';

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="expand-hover"
        defaultTextAnimation="entrance-slide"
        borderRadius="rounded"
        contentWidth="small"
        sizing="largeSmallSizeMediumTitles"
        background="noiseDiagonalGradient"
        cardStyle="outline"
        primaryButtonStyle="flat"
        secondaryButtonStyle="solid"
        headingFontWeight="bold"
    >
      <ReactLenis root>
        <div id="nav" data-section="nav" className="py-10">
          <NavbarStyleCentered
            navItems={[
              { name: "VERSION 1.0", id: "hero" },
              { name: "THE SHELL", id: "archive" },
              { name: "SYSTEM STATUS: ACTIVE", id: "faq" },
            ]}
            brandName="ESTATE"
            className="tracking-[0.05em] uppercase font-montserrat"
          />
        </div>

        <div id="hero" data-section="hero" className="py-10">
          <HeroBillboardRotatedCarousel
            background={{ variant: "radial-gradient" }}
            title="YOUR OLD LIFE IS DEAD."
            description="We don't sell clothing. We sell The Shell of Godhood. Your first step into authorized existence."
            buttons={[{ text: "BECOME. (ENTER VAULT)", href: "#" }]}
            carouselItems={[
              { id: "1", imageSrc: "http://img.b2bpic.net/free-photo/rough-concrete-wall-surface_23-2148413267.jpg", imageAlt: "Brutalist concrete" },
              { id: "2", imageSrc: "http://img.b2bpic.net/free-photo/woman-lifestyle-fashion-shoot_53876-24683.jpg", imageAlt: "Dark silhouette" },
              { id: "3", imageSrc: "http://img.b2bpic.net/free-photo/young-woman-portrait-with-overexposed-moving-style_23-2149495261.jpg", imageAlt: "Motion portrait" },
              { id: "4", imageSrc: "http://img.b2bpic.net/free-photo/rough-concrete-wall-surface_23-2148413267.jpg", imageAlt: "Brutalist concrete" },
              { id: "5", imageSrc: "http://img.b2bpic.net/free-photo/woman-lifestyle-fashion-shoot_53876-24683.jpg", imageAlt: "Dark silhouette" },
              { id: "6", imageSrc: "http://img.b2bpic.net/free-photo/young-woman-portrait-with-overexposed-moving-style_23-2149495261.jpg", imageAlt: "Motion portrait" },
            ]}
            titleClassName="tracking-[-0.04em] font-black uppercase text-[clamp(4rem,10vw,12rem)] leading-[0.9]"
            carouselClassName="grayscale contrast-[2] brightness-50"
          />
        </div>

        <div id="manifesto" data-section="manifesto" className="py-20">
          <TextAbout
            useInvertedBackground={false}
            tag="MANIFESTO"
            title="ROCK VISION & ARCHITECTURE"
            titleClassName="tracking-[0.05em] font-montserrat"
          />
        </div>

        <div id="archive" data-section="archive" className="py-20">
          <ProductCardOne
            textboxLayout="split-description"
            gridVariant="asymmetric-60-wide-40-narrow"
            animationType="blur-reveal"
            useInvertedBackground={false}
            cardClassName="overflow-hidden"
            imageClassName="filter grayscale contrast-125 brightness-75"
            products={[
              { id: "001", name: "ITEM #001", price: "AUTHORIZED ARCHIVES", imageSrc: "http://img.b2bpic.net/free-photo/close-up-girl-with-vintage-backpack_23-2148752408.jpg" },
              { id: "002", name: "ITEM #002", price: "AUTHORIZED ARCHIVES", imageSrc: "http://img.b2bpic.net/free-photo/side-view-woman-wearing-heels_23-2149741919.jpg" },
              { id: "003", name: "ITEM #003", price: "AUTHORIZED ARCHIVES", imageSrc: "http://img.b2bpic.net/free-photo/button-warm-blue-shirt-macro-shot_169016-23219.jpg" },
            ]}
            title="AUTHORIZED ARCHIVES"
            description="Pieces from the private archive."
            textBoxTitleClassName="tracking-[0.05em] font-montserrat"
          />
        </div>

        <div id="faq" data-section="faq" className="py-20">
          <FaqSplitMedia
            textboxLayout="split-actions"
            useInvertedBackground={false}
            title="SYSTEM STATUS: ACTIVE"
            description="Standard protocol for new members."
            imageSrc="http://img.b2bpic.net/free-photo/young-woman-portrait-with-overexposed-moving-style_23-2149495261.jpg?_wi=2&blur=10&filter=sepia"
            mediaAnimation="blur-reveal"
            faqsAnimation="blur-reveal"
            buttons={[{ text: "Request Access", href: "/apply" }]}
            faqs={[
              { id: "q1", title: "How do I access the vault?", content: "Access is currently restricted to invite-only members." },
              { id: "q2", title: "Is the leather ethically sourced?", content: "Every hide is vetted for quality and environmental standards." },
              { id: "q3", title: "Do you ship internationally?", content: "Shipping is available only to select European hubs." },
            ]}
            textBoxTitleClassName="tracking-[0.05em] font-montserrat"
            mediaClassName="grayscale contrast-125"
          />
        </div>

        <div id="legal" data-section="legal" className="py-20" style={{ backgroundColor: '#1A1412', color: '#EAE7E1' }}>
          <LegalSection
            layout="section"
            title="TERMS OF EXCLUSIVITY"
            sections={[
              { heading: "Privacy Policy", content: [{ type: "paragraph", text: "Your data is handled with the same reverence as our craft." }] },
              { heading: "Membership Terms", content: [{ type: "paragraph", text: "No sharing of credentials; strict adherence to the Grisha conduct." }] },
            ]}
            titleClassName="tracking-[0.05em] font-montserrat"
          />
        </div>

        <div id="footer" data-section="footer" className="py-20" style={{ backgroundColor: '#1A1412', color: '#EAE7E1' }}>
          <FooterBaseCard
            logoText="ESTATE"
            copyrightText="© 2025 ESTATE. All rights reserved."
            columns={[
              { title: "AUTHORIZED ARCHIVES", items: [{ label: "ARCHIVE I", href: "#" }, { label: "ARCHIVE II", href: "#" }] },
              { title: "ROCK VISION & ARCHITECTURE", items: [{ label: "GRISHA", href: "#" }, { label: "PHILOSOPHY", href: "#" }] },
            ]}
            columnTitleClassName="tracking-[0.05em] uppercase opacity-70 font-montserrat"
            columnItemClassName="tracking-[0.05em] uppercase font-montserrat"
          />
        </div>
      </ReactLenis>
    </ThemeProvider>
  );
}