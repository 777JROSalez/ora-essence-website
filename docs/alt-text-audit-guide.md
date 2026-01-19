# Alt Text Audit Guide

## Purpose
This guide helps you systematically audit and improve alt text for all images on the Ora Essence website to meet WCAG 2.1 AA accessibility standards.

## What is Alt Text?

Alt text (alternative text) is a written description of an image that:
- Helps screen reader users understand image content
- Displays when images fail to load
- Improves SEO
- Required for WCAG compliance

## Alt Text Best Practices

### DO:
✅ **Be descriptive and specific**: "Woman applying Ora Essence moisturizer to her face"  
✅ **Keep it concise**: Aim for 125 characters or less  
✅ **Describe the content and function**: What's in the image and why it matters  
✅ **Include key details**: Colors, textures, actions, emotions  
✅ **Use context-appropriate language**: Match your brand voice  

### DON'T:
❌ Start with "image of" or "picture of" (screen readers announce "image" automatically)  
❌ Use generic descriptions like "product photo"  
❌ Include redundant information already in surrounding text  
❌ Leave alt text empty for meaningful images  
❌ Stuff keywords for SEO  

## When to Use Empty Alt Text

Use `alt=""` (empty string, NOT missing attribute) for:
- Purely decorative images (patterns, dividers)
- Images whose content is fully described in adjacent text
- Spacer images

## Audit Checklist

### Product Images
Current locations:
- `/app/data/products.ts` - Product data with image paths
- Product card components
- Product detail pages

**For each product image:**
- [ ] Primary product photo: `alt="[Product Name] - [key visual element]"`
  - Example: `alt="Regenerating Cleanser - Pink clay texture in frosted glass bottle"`
- [ ] Lifestyle photos: `alt="[Action/usage scenario with product]"`
  - Example: `alt="Woman applying Regenerating Cleanser with gentle circular motions"`
- [ ] Ingredient close-ups: `alt="[Ingredient name] - [visual characteristic]"`
  - Example: `alt="Pink Clay - Smooth rose-tinted powder texture"`

### Hero/Banner Images
Locations:
- `/app/components/Hero.tsx`
- Landing pages
- Category pages

**For each hero image:**
- [ ] `alt="[Scene description that conveys brand mood + key visual elements]"`
  - Example: `alt="Serene botanical spa setting with Ora Essence products on natural stone"`

### Icon Images
Locations:
- Trust badges
- Certification logos
- Feature icons

**For icon images:**
- [ ] If decorative (text explains): `alt=""`
- [ ] If functional: `alt="[Function] - [certification/feature name]"`
  - Example: `alt="Ecocert Organic Certified"`

### Founder/Team Photos
Locations:
- `/app/components/FounderStory.tsx`
- About pages

**For people photos:**
- [ ] `alt="[Name, title/role] - [relevant context]"`
  - Example: `alt="Dr. Sarah Chen, Founder & Formulator, in Vermont herb garden"`

## Current Known Issues

Based on codebase review:

### High Priority
1. **Product images in `/app/data/products.ts`**
   - Status: Using basic product names only
   - Action: Add descriptive alt text to each product's image field

2. **Hero images**
   - Status: May need enhanced descriptions
   - Action: Audit all Hero components for descriptive alt text

3. **Generated badge images**
   - Status: Check certification badge components
   - Action: Ensure TrustBadges component has proper alt text

### Medium Priority
1. **Lifestyle/editorial images** in blog posts
2. **Ingredient graphics** in product pages
3. **Social proof images** (if any customer photos)

## Implementation Steps

### Step 1: Audit Product Data
```typescript
// Example of GOOD alt text in products.ts
{
  id: 1,
  name: "Regenerating Cleanser",
  image: "/images/products/regenerating-cleanser.jpg",
  imageAlt: "Regenerating Cleanser with pink clay in frosted glass bottle on marble surface", // ADD THIS
}
```

### Step 2: Update Product Interface
```typescript
// Add to Product interface in products.ts
export interface Product {
  // ... existing fields
  imageAlt?: string; // Product image alt text
  galleryAlts?: string[]; // Gallery image alt texts
}
```

### Step 3: Update Components
```tsx
// Update ProductCard.tsx to use imageAlt
<Image
  src={product.image}
  alt={product.imageAlt || product.name} // Fallback to name if no alt
  // ... other props
/>
```

### Step 4: Test with Screen Reader
- **Mac**: Press Cmd+F5 to enable VoiceOver
- **Windows**: Download NVDA (free)
- Navigate through product pages and verify alt text reads naturally

## Automated Testing Tools

### Browser Extensions
- **axe DevTools** - Catches missing/empty alt text
- **WAVE** - Highlights images and their alt text
- **Lighthouse** - Accessibility audit in Chrome DevTools

### Command to run Lighthouse
```bash
# Run from project root
npx lighthouse http://localhost:3000 --only-categories=accessibility --view
```

## Success Criteria

✅ All meaningful images have descriptive alt text  
✅ Decorative images use `alt=""`  
✅ Alt text passes automated testing (axe, WAVE, Lighthouse)  
✅ Alt text makes sense when read by screen reader  
✅ No images have missing `alt` attributes  

## Timeline Recommendation

- **Phase 1** (1-2 hours): Audit and update product images (highest impact)
- **Phase 2** (1 hour): Audit and update hero/banner images
- **Phase 3** (30 min): Audit and update icon/badge images
- **Phase 4** (30 min): Review and test with screen reader

Total estimated time: **3-4 hours**

## Resources

- [WebAIM Alt Text Guide](https://webaim.org/techniques/alttext/)
- [W3C Alt Decision Tree](https://www.w3.org/WAI/tutorials/images/decision-tree/)
- [WCAG 2.1 Guidelines 1.1.1](https://www.w3.org/WAI/WCAG21/Understanding/non-text-content.html)

---

**Status**: This is a **manual auditing task** that requires human review of each image's context and purpose. The guide above provides the framework to complete this work systematically.
