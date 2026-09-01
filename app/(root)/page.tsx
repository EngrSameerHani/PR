import { Metadata } from "next";

import { PropertyRaabtaHero } from "@/components/home/PropertyRaabtaHero";
import StatsSection from "@/components/home/stats-section";
import AboutSection from "@/components/home/about-section";
import ServicesSection from "@/components/home/services-section";
import ProjectShowcaseSection from "@/components/home/projects-showcase-section";
import IslamabadProjectsSection from "@/components/home/islamabad-projects-section";
import TeamSection from "@/components/home/team-section";
import ReviewsSection from "@/components/home/reviews-section";
import EnquirySection from "@/components/home/enquiry-section";
import Footer from "@/components/home/footer";
import { ClientPageWrapper } from "@/components/common/client-page-wrapper";

export const metadata: Metadata = {
  title: "Property Raabta",
  description:
    "Your trusted real estate partner for buying, selling, and investing in properties across Rawalpindi and Islamabad.",
};

export default function IndexPage() {
  return (
    <ClientPageWrapper>
      {/* Property Raabta Hero */}
      <PropertyRaabtaHero />

      {/* About */}
      <AboutSection />

      {/* Statistics */}
      <StatsSection />

      {/* Services */}
      <ServicesSection />

      {/* Projects */}
      <ProjectShowcaseSection />

      {/* Islamabad Projects */}
      <IslamabadProjectsSection />

      {/* Team */}
      <TeamSection />

      {/* Reviews */}
      <ReviewsSection />

      {/* Enquiry */}
      <EnquirySection />

      
    </ClientPageWrapper>
  );
}