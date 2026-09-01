import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Destinations from "@/components/Destinations";
import LocalTour from "@/components/LocalTour";
import WhyChooseUs from "@/components/WhyChooseUs";
import Footer from "@/components/Footer";
import { packages } from "@/data/packages.data";
import { discoverGalleryImages } from "@/lib/image-discovery";

interface PageProps {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}

export default async function Home(props: PageProps) {
  const searchParams = await props.searchParams;
  const locationQuery = typeof searchParams.location === "string" ? searchParams.location.toLowerCase() : "";

  // Dynamically inject filesystem images for the featured packages
  const enrichedPackages = packages.map((pkg) => {
    const discoveredPhotos = discoverGalleryImages("packages", pkg.slug);
    return {
      ...pkg,
      photos: discoveredPhotos.length > 0 ? discoveredPhotos : pkg.photos,
      coverImage: discoveredPhotos.length > 0 ? discoveredPhotos[0] : pkg.coverImage,
    };
  });

  // Filter based on location (case insensitive match on title, location, highlights)
  const filteredPackages = enrichedPackages.filter((pkg) => {
    if (!locationQuery) return true; // No search query, show all
    const searchString = `
      ${pkg.title} 
      ${pkg.location} 
      ${pkg.highlights?.join(" ")}
    `.toLowerCase();
    
    return searchString.includes(locationQuery);
  });

  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <Services />
      <Destinations packages={filteredPackages} isSearch={!!locationQuery} searchParams={searchParams} />
      <LocalTour />
      <WhyChooseUs />
      <Footer />
    </main>
  );
}
