import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import PropertyDetails from '@/components/PropertyDetails';
import BusinessSection from '@/components/BusinessSection';
import GallerySection from '@/components/GallerySection';
import DocumentsSection from '@/components/DocumentsSection';
import ContactsSection from '@/components/ContactsSection';
import Footer from '@/components/Footer';

export default function Index() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <HeroSection />
      <PropertyDetails />
      <BusinessSection />
      <GallerySection />
      <DocumentsSection />
      <ContactsSection />
      <Footer />
    </div>
  );
}