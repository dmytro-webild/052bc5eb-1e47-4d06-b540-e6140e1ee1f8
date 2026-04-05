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
        borderRadius="none"
        contentWidth="small"
        sizing="largeSmallSizeMediumTitles"
        background="none"
        cardStyle="outline"
        primaryButtonStyle="flat"
        secondaryButtonStyle="solid"
        headingFontWeight="bold"
    >
      <ReactLenis root>
        <div id="nav" data-section="nav" className="py-10">
          <NavbarStyleCentered
            navItems={[
              { name: "THE ESTATE", id: "archive" },
              { name: "THE MANIFESTO", id: "manifesto" },
            ]}
            brandName="ESTATE"
            className="tracking-[0.05em] uppercase"
          />
        </div>

        <div id="hero" data-section="hero" className="py-10">
          <HeroBillboardRotatedCarousel
            background={{ variant: "plain" }}
            title="THE WINDOW TO EUROPE"
            description="Request Access to the authorized selection. ESTATE is the preservation of rock and couture."
            carouselItems={[
              { id: "1", imageSrc: "http://img.b2bpic.net/free-photo/woman-lifestyle-fashion-shoot_53876-24683.jpg?q=80&w=800&blur=5&filter=sepia", imageAlt: "Architectural detail" },
              { id: "2", imageSrc: "http://img.b2bpic.net/free-photo/young-woman-portrait-with-overexposed-moving-style_23-2149495261.jpg?_wi=1&q=80&w=800&blur=5&filter=grayscale", imageAlt: "Grainy Grisha" },
              { id: "3", imageSrc: "http://img.b2bpic.net/free-photo/medium-shot-punk-model-posing-studio_23-2149267474.jpg?q=80&w=800&blur=5&filter=sepia", imageAlt: "Sepia archive" },
              { id: "4", imageSrc: "http://img.b2bpic.net/free-photo/view-vintage-camera_23-2150315163.jpg?q=80&w=800&blur=5&filter=grayscale", imageAlt: "Architectural detail" },
              { id: "5", imageSrc: "http://img.b2bpic.net/free-photo/full-shot-woman-holding-old-mirror_23-2149640689.jpg?q=80&w=800&blur=5&filter=sepia", imageAlt: "Grainy Grisha" },
              { id: "6", imageSrc: "http://img.b2bpic.net/free-photo/rough-concrete-wall-surface_23-2148413267.jpg?q=80&w=800&blur=5&filter=grayscale", imageAlt: "Sepia architectural" },
            ]}
            titleClassName="tracking-[-0.02em]"
            carouselClassName="grayscale contrast-125"
          />
        </div>

        <div id="manifesto" data-section="manifesto" className="py-20">
          <TextAbout
            useInvertedBackground={false}
            tag="MANIFESTO"
            title="THE VISION OF THE GRISHA"
            titleClassName="tracking-[-0.02em]"
          />
        </div>

        <div id="archive" data-section="archive" className="py-20">
          <ProductCardOne
            textboxLayout="split-description"
            gridVariant="three-columns-all-equal-width"
            animationType="blur-reveal"
            useInvertedBackground={false}
            cardClassName="border border-[#8C5638] overflow-hidden"
            imageClassName="filter grayscale contrast-125 brightness-75 scale-110"
            products={[
              { id: "001", name: "ITEM #001", price: "THE ESTATE", imageSrc: "http://img.b2bpic.net/free-photo/close-up-girl-with-vintage-backpack_23-2148752408.jpg" },
              { id: "002", name: "ITEM #002", price: "THE ESTATE", imageSrc: "http://img.b2bpic.net/free-photo/side-view-woman-wearing-heels_23-2149741919.jpg" },
              { id: "003", name: "ITEM #003", price: "THE ESTATE", imageSrc: "http://img.b2bpic.net/free-photo/button-warm-blue-shirt-macro-shot_169016-23219.jpg" },
            ]}
            title="THE EVIDENCE"
            description="Pieces from the private archive."
            textBoxTitleClassName="tracking-[-0.02em]"
          />
        </div>

        <div id="faq" data-section="faq" className="py-20">
          <FaqSplitMedia
            textboxLayout="split-actions"
            useInvertedBackground={false}
            title="INQUIRIES"
            description="Standard protocol for new members."
            imageSrc="http://img.b2bpic.net/free-photo/young-woman-portrait-with-overexposed-moving-style_23-2149495261.jpg?_wi=2"
            mediaAnimation="blur-reveal"
            faqsAnimation="blur-reveal"
            buttons={[{ text: "Request Access", href: "/apply" }]}
            className="[&_a[href='/apply']]:underline [&_a[href='/apply']]:no-underline [&_a[href='/apply']]:text-inherit [&_a[href='/apply']]:font-normal [&_a[href='/apply']]:border [&_a[href='/apply']]:border-black [&_a[href='/apply']]:rounded-none"
            faqs={[
              { id: "q1", title: "How do I access the vault?", content: "Access is currently restricted to invite-only members." },
              { id: "q2", title: "Is the leather ethically sourced?", content: "Every hide is vetted for quality and environmental standards." },
              { id: "q3", title: "Do you ship internationally?", content: "Shipping is available only to select European hubs." },
              { id: "q4", title: "Are these pieces limited?", content: "Yes, every item in our archive is produced in strictly limited runs." },
              { id: "q5", title: "Can I visit the boutique?", content: "Boutique appointments are handled via private request." },
            ]}
            textBoxTitleClassName="tracking-[-0.02em]"
            mediaClassName="grayscale contrast-125"
          />
        </div>

        <div id="legal" data-section="legal" className="py-20" style={{ backgroundColor: '#2B231F', color: '#EAE7E1', borderTop: '1px solid #8C5638', borderBottom: '1px solid #8C5638' }}>
          <LegalSection
            layout="section"
            title="TERMS OF EXCLUSIVITY"
            sections={[
              { heading: "Privacy Policy", content: [{ type: "paragraph", text: "Your data is handled with the same reverence as our craft." }] },
              { heading: "Membership Terms", content: [{ type: "paragraph", text: "No sharing of credentials; strict adherence to the Grisha conduct." }] },
            ]}
            titleClassName="tracking-[-0.02em]"
          />
        </div>

        <div id="footer" data-section="footer" className="py-20" style={{ backgroundColor: '#2B231F', color: '#EAE7E1' }}>
          <FooterBaseCard
            logoText="ESTATE"
            copyrightText="© 2025 ESTATE. All rights reserved. ESTATE is a registered trademark."
            columns={[
              { title: "THE ESTATE", items: [{ label: "INSTAGRAM", href: "#" }, { label: "VIMEO", href: "#" }] },
              { title: "IDENTITY", items: [{ label: "FOUNDED BY THE GRISHA", href: "#" }, { label: "PHILOSOPHY", href: "#" }] },
            ]}
            columnTitleClassName="tracking-[0.05em] uppercase opacity-70"
            columnItemClassName="tracking-[0.05em] uppercase"
          />
        </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
