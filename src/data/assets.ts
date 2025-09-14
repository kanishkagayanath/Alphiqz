// Your Asset Database
// Add your designs here by copying the template below

export interface Asset {
  id: number;
  title: string;
  description: string;
  category: 'illustrations' | 'gaming-assets' | 'patterns' | 'logos-and-branding';
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
  

  // 🎮 GAMING ASSETS
  {
    id: 3,
    title: "Game UI Elements Pack",
    description: "Complete set of crow fly 2d asset set. Perfect for 2D game development.",
    category: "gaming-assets",
    type: "ZIP",
    fileSize: "490 KB",
    dimensions: "Various",
    tags: ["Crow", "2D", "Crowfly"],
    featured: false,
    premium: false,
    downloadCount: "0",
    previewImage: "/assets/previews/Crowfly.png",
    downloadUrl: "/assets/gaming/Crow_Fly.zip",
    createdDate: "2025-01-12"
  },

   {
    id: 7,
    title: "Finish Arrow Board",
     description: "Complete finishing arrow board. Perfect for 2D game development.",
    category: "gaming-assets",
    type: "ZIP",
    fileSize: "239 KB",
    dimensions: "Various",
    tags: ["finisharrow", "2D", "2Dgame"],
    featured: false,
    premium: false,
    downloadCount: "0",
    previewImage: "/assets/previews/Finisharrow.png",
    downloadUrl: "/assets/gaming/FinishBoard.zip",
    createdDate: "2025-01-12"
  },

  {
    id: 8,
    title: "Spike Traps",
    description: "Complete spike traps set. Perfect for 2D game development.",
    category: "gaming-assets",
    type: "ZIP",
    fileSize: "364 KB",
    dimensions: "Various",
    tags: ["Spikes", "2D", "Traps"],
    featured: false,
    premium: false,
    downloadCount: "0",
    previewImage: "/assets/previews/Spikes.png",
    downloadUrl: "/assets/gaming/Traps.zip",
    createdDate: "2025-01-12"
  },

  {
    id: 9,
    title: "Male Bug Fly",
    description: "Complete male bug fly set. Perfect for 2D game development.",
    category: "gaming-assets",
    type: "ZIP",
    fileSize: "364 KB",
    dimensions: "Various",
    tags: ["Male Bug", "2D", "Fly"],
    featured: false,
    premium: false,
    downloadCount: "0",
    previewImage: "/assets/previews/Bug(M).png",
    downloadUrl: "/assets/gaming/Bug(M).zip",
    createdDate: "2025-01-12"
  },

  {
    id: 10,
    title: "Female Bug Fly",
    description: "Complete female bug fly set. Perfect for 2D game development.",
    category: "gaming-assets",
    type: "ZIP",
    fileSize: "599 KB",
    dimensions: "Various",
    tags: ["Female Bug", "2D", "Fly"],
    featured: false,
    premium: false,
    downloadCount: "0",
    previewImage: "/assets/previews/Bug(F).png",
    downloadUrl: "/assets/gaming/Bug(F).zip",
    createdDate: "2025-01-12"
  },

  {
    id: 11,
    title: "Axe",
    description: "Complete axe set. Perfect for 2D game development.",
    category: "gaming-assets",
    type: "ZIP",
    fileSize: "599 KB",
    dimensions: "Various",
    tags: ["Axe", "2D", "Weapon"],
    featured: false,
    premium: false,
    downloadCount: "0",
    previewImage: "/assets/previews/Axe.png",
    downloadUrl: "/assets/gaming/Axe.zip",
    createdDate: "2025-01-12"
  },

  {
    id: 12,
    title: "Dagger",
    description: "Complete dagger set. Perfect for 2D game development.",
    category: "gaming-assets",
    type: "ZIP",
    fileSize: "599 KB",
    dimensions: "Various",
    tags: ["Dagger", "2D", "Weapon"],
    featured: false,
    premium: false,
    downloadCount: "0",
    previewImage: "/assets/previews/Dagger.png",
    downloadUrl: "/assets/gaming/Dagger.zip",
    createdDate: "2025-01-12"
  },

  {
    id: 13,
    title: "Magic-Stick",
    description: "Complete magic stick set. Perfect for 2D game development.",
    category: "gaming-assets",
    type: "ZIP",
    fileSize: "599 KB",
    dimensions: "Various",
    tags: ["Magic Stick", "2D", "Weapon"],
    featured: false,
    premium: false,
    downloadCount: "0",
    previewImage: "/assets/previews/Magic-Stick.png",
    downloadUrl: "/assets/gaming/Magic-Stick.zip",
    createdDate: "2025-01-12"
  },

   {
    id: 14,
    title: "Spear",
    description: "Complete spear set. Perfect for 2D game development.",
    category: "gaming-assets",
    type: "ZIP",
    fileSize: "599 KB",
    dimensions: "Various",
    tags: ["Spear", "2D", "Weapon"],
    featured: false,
    premium: false,
    downloadCount: "0",
    previewImage: "/assets/previews/Spear.png",
    downloadUrl: "/assets/gaming/Spear.zip",
    createdDate: "2025-01-12"
  },

   {
    id: 15,
    title: "Sword",
    description: "Complete sword set. Perfect for 2D game development.",
    category: "gaming-assets",
    type: "ZIP",
    fileSize: "599 KB",
    dimensions: "Various",
    tags: ["Sword", "2D", "Weapon"],
    featured: false,
    premium: false,
    downloadCount: "0",
    previewImage: "/assets/previews/Sword.png",
    downloadUrl: "/assets/gaming/Sword.zip",
    createdDate: "2025-01-12"
  },

   {
    id: 16,
    title: "Warrior-Male",
    description: "Complete warrior male set. Perfect for 2D game development.",
    category: "gaming-assets",
    type: "ZIP",
    fileSize: "599 KB",
    dimensions: "Various",
    tags: ["Warrior", "2D", "Character"],
    featured: false,
    premium: false,
    downloadCount: "0",
    previewImage: "/assets/previews/Warrior-Male.png",
    downloadUrl: "/assets/gaming/Warrior_Male.zip",
    createdDate: "2025-01-12"
  },

  

  // 🌟 PATTERNS
  {
    id: 4,
    title: "Vector Pattern 1",
    description: "Collection of seamless geometric patterns perfect for backgrounds and textures.",
    category: "patterns",
    type: "Zip",
    fileSize: "8.1 MB",
    dimensions: "Various",
    tags: ["patterns", "geometric", "background", "texture"],
    featured: false,
    premium: false,
    downloadCount: "0",
    previewImage: "/assets/previews/Pattern_1.png",
    downloadUrl: "/assets/patterns/Pattern_1.zip",
    createdDate: "2025-01-08"
  },

  {
    id: 17,
    title: "Vector Pattern 2",
    description: "Collection of seamless geometric patterns perfect for backgrounds and textures.",
    category: "patterns",
    type: "png",
    fileSize: "8.1 MB",
    dimensions: "Various",
    tags: ["patterns", "geometric", "background", "texture"],
    featured: false,
    premium: false,
    downloadCount: "0",
    previewImage: "/assets/previews/Pattern_2.png",
    downloadUrl: "/assets/patterns/Pattern_2.png",
    createdDate: "2025-01-08"
  },

  {
    id: 18,
    title: "Vector Pattern 3",
    description: "Collection of seamless geometric patterns perfect for backgrounds and textures.",
    category: "patterns",
    type: "png",
    fileSize: "8.1 MB",
    dimensions: "Various",
    tags: ["patterns", "geometric", "background", "texture"],
    featured: false,
    premium: false,
    downloadCount: "0",
    previewImage: "/assets/previews/Pattern_3.png",
    downloadUrl: "/assets/patterns/Pattern_3.png",
    createdDate: "2025-01-08"
  },

  {
    id: 18,
    title: "Vector Pattern 4",
    description: "Collection of seamless geometric patterns perfect for backgrounds and textures.",
    category: "patterns",
    type: "png",
    fileSize: "8.1 MB",
    dimensions: "Various",
    tags: ["patterns", "geometric", "background", "texture"],
    featured: false,
    premium: false,
    downloadCount: "0",
    previewImage: "/assets/previews/Pattern_4.png",
    downloadUrl: "/assets/patterns/Pattern_4.png",
    createdDate: "2025-01-08"
  },

  // ✨ LOGOS & BRANDING

  // 🚗 YOUR CAR LOGO COLLECTION
  {
    id: 5,
    title: "Car Logo",
    description: "Premium car logo design.",
    category: "logos-and-branding",
    type: "ZIP",
    fileSize: "197 KB",
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
    id: 6,
    title: "Background Version_1",
    description: "High-quality design with modern aesthetics.",
    category: "illustrations",
    type: "ZIP",
    fileSize: "555 KB",
    dimensions: "Vector",
    tags: ["background", "illustration", "design", "web", "modern", "creative"],
    featured: false,
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
