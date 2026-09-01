import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Destinations from "@/components/Destinations";
import LocalTour from "@/components/LocalTour";
import WhyChooseUs from "@/components/WhyChooseUs";
import Footer from "@/components/Footer";
import { packages } from "@/data/packages.data";
import { discoverGalleryImages } from "@/lib/image-discovery";

export default function Home() {
  // Dynamically inject filesystem images for the featured packages
  const enrichedPackages = packages.map((pkg) => {
    const discoveredPhotos = discoverGalleryImages("packages", pkg.slug);
    return {
      ...pkg,
      photos: discoveredPhotos.length > 0 ? discoveredPhotos : pkg.photos,
      coverImage: discoveredPhotos.length > 0 ? discoveredPhotos[0] : pkg.coverImage,
    };
  });

  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <Services />
      <Destinations packages={enrichedPackages} />
      <LocalTour />
      <WhyChooseUs />
      <Footer />
    </main>
  );
}
