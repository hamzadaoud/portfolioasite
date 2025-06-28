import React from "react";
import { BrowserRouter, Routes as RouterRoutes, Route } from "react-router-dom";
import ScrollToTop from "components/ScrollToTop";
import ErrorBoundary from "components/ErrorBoundary";

// Page imports
import PortfolioHomeDashboard from "pages/portfolio-home-dashboard";
import ProjectGallery from "pages/project-gallery";
import ProjectDetailCaseStudy from "pages/project-detail-case-study";
import SkillsTechnologyShowcase from "pages/skills-technology-showcase";
import ContactCollaborationHub from "pages/contact-collaboration-hub";
import DevelopmentBlog from "pages/development-blog";

const Routes = () => {
  return (
    <BrowserRouter>
      <ErrorBoundary>
        <ScrollToTop />
        <RouterRoutes>
          <Route path="/" element={<PortfolioHomeDashboard />} />
          <Route path="/portfolio-home-dashboard" element={<PortfolioHomeDashboard />} />
          <Route path="/project-gallery" element={<ProjectGallery />} />
          <Route path="/project-detail-case-study" element={<ProjectDetailCaseStudy />} />
          <Route path="/project-detail-case-study/:projectId" element={<ProjectDetailCaseStudy />} />
          <Route path="/skills-technology-showcase" element={<SkillsTechnologyShowcase />} />
          <Route path="/contact-collaboration-hub" element={<ContactCollaborationHub />} />
          <Route path="/development-blog" element={<DevelopmentBlog />} />
        </RouterRoutes>
      </ErrorBoundary>
    </BrowserRouter>
  );
};

export default Routes;