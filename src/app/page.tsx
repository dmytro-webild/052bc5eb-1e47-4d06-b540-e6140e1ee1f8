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
        borderRadius="pill"
        contentWidth="small"
        sizing="largeSmallSizeMediumTitles"
        background="none"
        cardStyle="outline"
        primaryButtonStyle="flat"
        secondaryButtonStyle="solid"
        headingFontWeight="semibold"
    >
      <ReactLenis root>
        <div id="nav" data-section="nav">
          <NavbarStyleCentered
            navItems={[
              { name: "The Evidence", id: "archive" },
              { name: "The Manifesto", id: "manifesto" },
            ]}
            brandName="ESTATE"
          />
        </div>

        <div id="hero" data-section="hero">
          <HeroBillboardRotatedCarousel
            background={{ variant: "plain" }}
            title="THE WINDOW TO EUROPE"
            description="Access granted to the authorized selection. ESTATE is the preservation of rock and couture."
            carouselItems={[
              { id: "1", imageSrc: "http://img.b2bpic.net/free-photo/woman-lifestyle-fashion-shoot_53876-24683.jpg", imageAlt: "Architectural detail" },
              { id: "2", imageSrc: "http://img.b2bpic.net/free-photo/young-woman-portrait-with-overexposed-moving-style_23-2149495261.jpg?_wi=1", imageAlt: "Grainy Grisha" },
              { id: "3", imageSrc: "http://img.b2bpic.net/free-photo/medium-shot-punk-model-posing-studio_23-2149267474.jpg", imageAlt: "Sepia archive" },
              { id: "4", imageSrc: "http://img.b2bpic.net/free-photo/view-vintage-camera_23-2150315163.jpg", imageAlt: "Architectural detail" },
              { id: "5", imageSrc: "http://img.b2bpic.net/free-photo/full-shot-woman-holding-old-mirror_23-2149640689.jpg", imageAlt: "Grainy Grisha" },
              { id: "6", imageSrc: "http://img.b2bpic.net/free-photo/rough-concrete-wall-surface_23-2148413267.jpg", imageAlt: "Sepia architectural" },
            ]}
          />
        </div>

        <div id="manifesto" data-section="manifesto">
          <TextAbout
            useInvertedBackground={false}
            tag="MANIFESTO"
            title="THE VISION OF THE GRISHA"
          />
        </div>

        <div id="archive" data-section="archive">
          <ProductCardOne
            textboxLayout="split-description"
            gridVariant="three-columns-all-equal-width"
            animationType="blur-reveal"
            useInvertedBackground={false}
            products={[
              { id: "001", name: "ITEM #001", price: "ARCHIVE", imageSrc: "http://img.b2bpic.net/free-photo/close-up-girl-with-vintage-backpack_23-2148752408.jpg" },
              { id: "002", name: "ITEM #002", price: "ARCHIVE", imageSrc: "http://img.b2bpic.net/free-photo/side-view-woman-wearing-heels_23-2149741919.jpg" },
              { id: "003", name: "ITEM #003", price: "ARCHIVE", imageSrc: "http://img.b2bpic.net/free-photo/button-warm-blue-shirt-macro-shot_169016-23219.jpg" },
            ]}
            title="THE EVIDENCE"
            description="Pieces from the private archive."
          />
        </div>

        <div id="faq" data-section="faq">
          <FaqSplitMedia
            textboxLayout="split-actions"
            useInvertedBackground={false}
            title="INQUIRIES"
            description="Standard protocol for new members."
            imageSrc="http://img.b2bpic.net/free-photo/young-woman-portrait-with-overexposed-moving-style_23-2149495261.jpg?_wi=2"
            mediaAnimation="blur-reveal"
            faqsAnimation="blur-reveal"
            buttons={[{ text: "Apply for Access", href: "/apply" }]}
            faqs={[
              { id: "q1", title: "How do I access the vault?", content: "Access is currently restricted to invite-only members." },
              { id: "q2", title: "Is the leather ethically sourced?", content: "Every hide is vetted for quality and environmental standards." },
              { id: "q3", title: "Do you ship internationally?", content: "Shipping is available only to select European hubs." },
              { id: "q4", title: "Are these pieces limited?", content: "Yes, every item in our archive is produced in strictly limited runs." },
              { id: "q5", title: "Can I visit the boutique?", content: "Boutique appointments are handled via private request." },
            ]}
          />
        </div>

        <div id="legal" data-section="legal" style={{ backgroundColor: '#2B231F', color: '#EAE7E1', border: '1px solid #8C5638' }}>
          <LegalSection
            layout="section"
            title="TERMS OF EXCLUSIVITY"
            sections={[
              { heading: "Privacy Policy", content: [{ type: "paragraph", text: "Your data is handled with the same reverence as our craft." }] },
              { heading: "Membership Terms", content: [{ type: "paragraph", text: "No sharing of credentials; strict adherence to the Grisha conduct." }] },
            ]}
          />
        </div>

        <div id="footer" data-section="footer" style={{ backgroundColor: '#2B231F', color: '#EAE7E1', borderTop: '1px solid #8C5638' }}>
          <FooterBaseCard
            logoText="ESTATE"
            columns={[
              {
                title: "ARCHIVE",                items: [
                  { label: "Instagram", href: "https://instagram.com" },
                  { label: "Vimeo", href: "#" },
                ],
              },
              {
                title: "IDENTITY",                items: [
                  { label: "Founded by THE GRISHA", href: "#" },
                  { label: "Philosophy", href: "#" },
                ],
              },
            ]}
          />
        </div>
      </ReactLenis>
    </ThemeProvider>
  );
}