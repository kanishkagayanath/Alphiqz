# 🎨 How to Add Your Assets to Alphiqz

## 📁 Folder Structure
```
public/
└── assets/
    ├── illustrations/     ← Put your illustration files here
    ├── icons/            ← Put your icon files here
    ├── patterns/         ← Put your pattern files here
    ├── logos/            ← Put your logo files here
    └── previews/         ← Put preview images here (JPG/PNG recommended)
```

## 📝 How to Add New Assets

### Step 1: Add Your Files
1. **Upload your design files** to the appropriate folder in `/public/assets/`:
   - Illustrations → `/public/assets/illustrations/`
   - Icons & UI → `/public/assets/icons/`
   - Patterns → `/public/assets/patterns/`
   - Logos → `/public/assets/logos/`

2. **Create preview images** (recommended 400x300px, JPG/PNG):
   - Save previews in `/public/assets/previews/`
   - Name them descriptively (e.g., `my-awesome-design-preview.jpg`)

### Step 2: Add Asset Data
Open `/src/data/assets.ts` and add your asset using this template:

```typescript
{
  id: 6, // ⚠️ Make sure this number is unique!
  title: "Your Amazing Design",
  description: "Detailed description of what this asset includes and how it can be used.",
  category: "illustrations", // Choose: illustrations | icons-and-ui | patterns | logos-and-branding
  type: "SVG", // File type: SVG, PNG, AI, PSD, JPG, etc.
  fileSize: "2.5 MB", // Approximate file size
  dimensions: "Vector", // Dimensions like "1920x1080" or "Vector" for scalable
  tags: ["modern", "colorful", "abstract"], // Relevant keywords for search
  featured: false, // Set to true to feature on homepage
  premium: false, // Set to true for premium content
  downloadCount: "0", // Starting download count
  previewImage: "/assets/previews/your-preview.jpg", // Path to preview image
  downloadUrl: "/assets/illustrations/your-file.svg", // Path to actual file
  createdDate: "2025-01-20" // Today's date
},
```

### Step 3: Test Your Asset
1. Save the file
2. Refresh your website
3. Navigate to Designs page
4. Check if your asset appears correctly
5. Test the download link

## 📸 Preview Image Tips
- **Size**: 400x300px or similar ratio
- **Format**: JPG or PNG
- **Quality**: High enough to show details, but optimized for web
- **Content**: Show the main design clearly

## 🏷️ Category Guidelines

### 🎨 Illustrations
- Vector artwork, drawings, characters
- Digital paintings, sketches
- Abstract art, landscapes

### 🔷 Icons & UI
- Icon sets, individual icons
- UI components, buttons
- Interface elements

### 🌟 Patterns
- Seamless patterns, textures
- Background designs
- Repeatable graphics

### ✨ Logos & Branding
- Logo designs, brand marks
- Typography, lettering
- Brand identity elements

## 🚀 Quick Start Example

1. **Add a file**: Put `my-logo.ai` in `/public/assets/logos/`
2. **Add preview**: Put `my-logo-preview.jpg` in `/public/assets/previews/`
3. **Add data**:
```typescript
{
  id: 10,
  title: "Modern Tech Logo",
  description: "Clean and modern logo perfect for tech companies.",
  category: "logos-and-branding",
  type: "AI",
  fileSize: "3.2 MB",
  dimensions: "Vector",
  tags: ["logo", "tech", "modern", "clean"],
  featured: true,
  premium: false,
  downloadCount: "0",
  previewImage: "/assets/previews/my-logo-preview.jpg",
  downloadUrl: "/assets/logos/my-logo.ai",
  createdDate: "2025-01-20"
}
```

## 💡 Tips
- **Unique IDs**: Always increment the ID number
- **Good descriptions**: Help users understand what they're downloading
- **Relevant tags**: Make your assets searchable
- **Optimize files**: Keep file sizes reasonable
- **Test downloads**: Make sure download links work

## 🔧 Advanced Features
- Set `featured: true` to show on homepage
- Use `premium: true` for special content
- Add multiple tags for better searchability
- Include file dimensions for user clarity

Happy designing! 🎨✨
