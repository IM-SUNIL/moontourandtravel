import fs from "fs";
import path from "path";

/**
 * Automatically discovers, deduplicates, and numerically sorts images
 * in a given public folder path.
 *
 * @param folderType "packages" | "hotels"
 * @param slug The unique slug of the package/hotel (e.g. "vaishno-devi-shiv-khori")
 * @returns Array of public URL strings ready for the client.
 */
export function discoverGalleryImages(folderType: "packages" | "hotels", slug: string): string[] {
  try {
    const publicImagesPath = path.join(process.cwd(), "public", "images", folderType, slug);
    
    // If the directory doesn't exist, return empty array gracefully
    if (!fs.existsSync(publicImagesPath)) {
      return [];
    }

    const files = fs.readdirSync(publicImagesPath);
    const validExts = [".jpg", ".jpeg", ".png", ".webp"];
    
    // Filter for valid image extensions
    const images = files.filter(file => {
      return validExts.includes(path.extname(file).toLowerCase());
    });

    // Map by number to handle duplicates (e.g. if 1.jpg and 1.webp both exist)
    const map = new Map<number, string>();
    for (const img of images) {
      const num = parseInt(path.parse(img).name, 10);
      if (!isNaN(num)) {
        // If it doesn't exist in map yet, add it.
        // This naturally prioritizes whatever fs.readdir returns first,
        // which is perfectly fine for deduplication.
        if (!map.has(num)) {
          map.set(num, img);
        }
      }
    }

    // Sort numerically and map back to full paths
    const sortedNumbers = Array.from(map.keys()).sort((a, b) => a - b);
    return sortedNumbers.map(num => `/images/${folderType}/${slug}/${map.get(num)}`);
  } catch (error) {
    console.error(`Error discovering images for ${folderType}/${slug}:`, error);
    return [];
  }
}
