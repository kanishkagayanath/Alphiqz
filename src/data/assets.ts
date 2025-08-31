// Your Asset Database
// Add your designs here by copying the template below

export interface Asset {
  id: number;
  title: string;
  description: string;
  category: 'illustrations' | 'icons-and-ui' | 'patterns' | 'logos-and-branding';
  type: string; // e.g., 'SVG', 'PNG', 'AI', 'PSD', 'JPG'
  fileSize: string; // e.g., '2.5 MB'
  dimensions?: string; // e.g., '1920x1080' or 'Vector'
  tags: string[]; // e.g., ['abstract', 'colorful', 'modern']
  featured: boolean;
  premium: boolean;
  downloadCount: string; // e.g., '1.2k'
  previewImage: string; // Path to preview image in /public/assets/previews/
  downloadUrl: string; // Path to actual file in /public/assets/
  createdDate: string; // e.g., '2025-01-15'
}

export const assets: Asset[] = [
  // 🎨 ILLUSTRATIONS
  {
    id: 1,
    title: "Abstract Geometric Art",
    description: "Modern abstract illustration with vibrant colors and geometric shapes perfect for web designs and presentations.",
    category: "illustrations",
    type: "SVG",
    fileSize: "1.2 MB",
    dimensions: "Vector",
    tags: ["abstract", "geometric", "colorful", "modern", "web"],
    featured: true,
    premium: false,
    downloadCount: "2.1k",
    previewImage: "/assets/previews/abstract-geometric-preview.jpg",
    downloadUrl: "/assets/illustrations/abstract-geometric.svg",
    createdDate: "2025-01-15"
  },
  
  {
    id: 2,
    title: "Nature Landscape Pack",
    description: "Beautiful hand-drawn nature illustrations including mountains, trees, and scenic landscapes.",
    category: "illustrations",
    type: "AI",
    fileSize: "5.8 MB",
    dimensions: "Vector",
    tags: ["nature", "landscape", "mountains", "trees", "handdrawn"],
    featured: false,
    premium: false,
    downloadCount: "890",
    previewImage: "/assets/previews/nature-landscape-preview.jpg",
    downloadUrl: "/assets/illustrations/nature-landscape-pack.ai",
    createdDate: "2025-01-10"
  },

  // 🔷 ICONS & UI
  {
    id: 3,
    title: "Modern UI Icon Set",
    description: "Clean and modern icon set with 50+ icons perfect for web and mobile applications.",
    category: "icons-and-ui",
    type: "SVG",
    fileSize: "3.2 MB",
    dimensions: "24x24, 48x48",
    tags: ["ui", "icons", "modern", "clean", "web", "mobile"],
    featured: true,
    premium: false,
    downloadCount: "3.4k",
    previewImage: "/assets/previews/modern-ui-icons-preview.jpg",
    downloadUrl: "/assets/icons/modern-ui-icon-set.zip",
    createdDate: "2025-01-12"
  },

  // 🌟 PATTERNS
  {
    id: 4,
    title: "Seamless Geometric Patterns",
    description: "Collection of seamless geometric patterns perfect for backgrounds and textures.",
    category: "patterns",
    type: "PNG",
    fileSize: "8.1 MB",
    dimensions: "2048x2048",
    tags: ["patterns", "geometric", "seamless", "background", "texture"],
    featured: false,
    premium: false,
    downloadCount: "1.3k",
    previewImage: "/assets/previews/geometric-patterns-preview.jpg",
    downloadUrl: "/assets/patterns/geometric-patterns-pack.zip",
    createdDate: "2025-01-08"
  },

  // ✨ LOGOS & BRANDING
  {
    id: 5,
    title: "Tech Startup Logo Pack",
    description: "Modern logo designs perfect for tech startups and digital companies.",
    category: "logos-and-branding",
    type: "AI",
    fileSize: "12.5 MB",
    dimensions: "Vector",
    tags: ["logo", "tech", "startup", "modern", "branding"],
    featured: true,
    premium: false,
    downloadCount: "2.2k",
    previewImage: "/assets/previews/tech-logos-preview.jpg",
    downloadUrl: "/assets/logos/tech-startup-logos.zip",
    createdDate: "2025-01-05"
  },

  // 🚗 YOUR CAR LOGO COLLECTION
  {
    id: 6,
    title: "Car Logo Collection",
    description: "Premium collection of car logos and automotive branding designs. Perfect for car dealerships, automotive companies, and vehicle-related businesses.",
    category: "logos-and-branding",
    type: "ZIP",
    fileSize: "5.2 MB",
    dimensions: "Vector",
    tags: ["car", "logo", "automotive", "vehicle", "branding", "transport"],
    featured: false,
    premium: false,
    downloadCount: "0",
    previewImage: "/assets/previews/CarLogo.png",
    downloadUrl: "/assets/logos/CarLogo.zip",
    createdDate: "2025-08-31"
  },

  // 🎨 YOUR BACKGROUND COLLECTION
  {
    id: 7,
    title: "Background Collection v1",
    description: "Beautiful collection of background illustrations perfect for web designs, presentations, and creative projects. High-quality designs with modern aesthetics.",
    category: "illustrations",
    type: "ZIP",
    fileSize: "3.8 MB",
    dimensions: "Vector",
    tags: ["background", "illustration", "design", "web", "modern", "creative"],
    featured: true,
    premium: false,
    downloadCount: "0",
    previewImage: "/assets/previews/Background.v1.png",
    downloadUrl: "/assets/illustrations/Background.v1.zip",
    createdDate: "2025-08-31"
  },

  /* 
  ============================================
  📝 TEMPLATE - Copy this to add new assets:
  ============================================
  
  {
    id: 6, // Increment this number
    title: "Your Asset Title",
    description: "Detailed description of your asset and what it includes.",
    category: "illustrations", // Choose: illustrations | icons-and-ui | patterns | logos-and-branding
    type: "AI", // File type: SVG, PNG, AI, PSD, JPG, etc.
    fileSize: "2.5 MB", // Approximate file size
    dimensions: "Vector", // Dimensions or "Vector" for scalable
    tags: ["tag1", "tag2", "tag3"], // Relevant keywords
    featured: true, // true for featured items
    premium: false, // true for premium items
    downloadCount: "0", // Download count
    previewImage: "C:\\Users\\Kanishka\\Documents\\Alphiq\\public\\assets\\previews\\CarLogo.png", // Preview image path
    downloadUrl: "C:\\Users\\Kanishka\\Documents\\Alphiq\\public\\assets\\illustrations\\CarLogo", // Download file path
    createdDate: "2025-01-20" // Creation date
  },
  */
  
];

// Helper function to get assets by category
export const getAssetsByCategory = (category: string) => {
  if (category === 'all') return assets;
  return assets.filter(asset => asset.category === category);
};

// Helper function to get featured assets
export const getFeaturedAssets = () => {
  return assets.filter(asset => asset.featured);
};

// Helper function to search assets
export const searchAssets = (query: string) => {
  const lowercaseQuery = query.toLowerCase();
  return assets.filter(asset => 
    asset.title.toLowerCase().includes(lowercaseQuery) ||
    asset.description.toLowerCase().includes(lowercaseQuery) ||
    asset.tags.some(tag => tag.toLowerCase().includes(lowercaseQuery))
  );
};
