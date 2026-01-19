# ORA ESSENCE - Integration Requirements Checklist
## Technical Handoff for Production Launch

This document outlines everything needed from the business team to integrate this Next.js website with their existing e-commerce infrastructure.

---

## 🔐 Account Access & Credentials

### Shopify Store Access
- [ ] **Shopify Admin URL** (e.g., `oraessence.myshopify.com/admin`)
- [ ] **Admin Login Credentials** (email + password)
  - OR invite to store as Staff/Collaborator account
- [ ] **Shopify Plan Type** (Basic, Shopify, Advanced, or Plus)
- [ ] **Store ID** (found in Settings)

### Shopify API Access
- [ ] **Storefront API Access Token**
  - Go to: Shopify Admin → Apps → Develop apps → Create private app
  - Enable: Storefront API with read permissions for products, collections, checkouts
- [ ] **Admin API Access Token** (if needed for inventory sync)
- [ ] **API Version** being used (e.g., 2024-01)

### Shopify Buy SDK (Alternative)
- [ ] **Shopify Shop Domain** (e.g., `oraessence.myshopify.com`)
- [ ] **Storefront Access Token**

---

## 🌐 Domain & DNS

### Domain Information
- [ ] **Primary Domain** (e.g., `oraessence.com`)
- [ ] **Domain Registrar** (GoDaddy, Namecheap, Cloudflare, etc.)
- [ ] **Domain Registrar Login** OR access to modify DNS records
- [ ] **Nameserver Information** (current settings)

### Email Setup
- [ ] **Email Provider** (Google Workspace, Microsoft 365, etc.)
- [ ] **Email Addresses Needed:**
  - `hello@oraessence.com` (customer service)
  - `orders@oraessence.com` (order notifications)
  - `support@oraessence.com` (support tickets)
  - `no-reply@oraessence.com` (transactional emails)

---

## 💳 Payment Processing

### Shopify Payments (if used)
- [ ] **Already activated?** (yes/no)
- [ ] **Bank account connected?** (yes/no)
- [ ] **Business verification complete?** (yes/no)

### Third-Party Payment Gateway (if used instead)
- [ ] **Provider** (Stripe, PayPal, Authorize.net, etc.)
- [ ] **API Keys:**
  - Public/Publishable Key
  - Secret/Private Key
- [ ] **Webhook Secret** (for payment confirmations)
- [ ] **Account Login** (for accessing dashboard)

### Additional Payment Methods
- [ ] **Apple Pay** - Enabled? (yes/no)
- [ ] **Google Pay** - Enabled? (yes/no)
- [ ] **PayPal** - Enabled? (yes/no)
- [ ] **Afterpay/Klarna** - Enabled? (yes/no)

---

## 📦 Product & Inventory Data

### Product Catalog Export
- [ ] **CSV/JSON export** from Shopify with:
  - Product names, descriptions
  - SKUs and barcodes
  - Prices (MSRP, sale prices)
  - Inventory quantities
  - Product images (URLs or files)
  - Product variants (sizes, bundles)
  - Categories/collections
  - Product tags

### Product Images
- [ ] **Access to product photography** (if not in Shopify)
  - High-resolution images (min 2000px wide)
  - Multiple angles per product
  - Lifestyle/editorial shots
  - Ingredient close-ups

### Inventory Management
- [ ] **Inventory tracking enabled?** (yes/no)
- [ ] **Warehouse location(s)**
- [ ] **Fulfillment method:**
  - Self-fulfilled
  - 3PL provider (name: ____________)
  - Dropshipping
  - Amazon FBA

---

## 🚚 Shipping & Fulfillment

### Shipping Configuration
- [ ] **Shipping zones** (domestic, international)
- [ ] **Shipping rates:**
  - Free shipping threshold (e.g., $50+)
  - Standard shipping cost
  - Expedited shipping cost
  - International rates
- [ ] **Carrier accounts:**
  - USPS, UPS, FedEx, DHL
  - Tracking API access (if applicable)

### Shipping Integration
- [ ] **ShipStation Account** (if used)
  - API Key
  - API Secret
- [ ] **Alternative shipping software** (name: ____________)
  - API credentials

### Fulfillment Settings
- [ ] **Order processing time** (1-2 business days, etc.)
- [ ] **Shipping cutoff time** (orders placed before X:XX PM ship same day)
- [ ] **Warehouse address** (for calculated shipping)

---

## 📧 Email Marketing & Automation

### Email Service Provider
- [ ] **Platform** (Klaviyo, Mailchimp, Omnisend, etc.)
- [ ] **API Key**
- [ ] **List IDs** for:
  - Newsletter subscribers
  - Abandoned cart
  - Post-purchase
  - VIP customers
- [ ] **Account Login**

### Transactional Email Templates
- [ ] **Order confirmation** template
- [ ] **Shipping notification** template
- [ ] **Delivery confirmation** template
- [ ] **Refund confirmation** template

---

## 📊 Analytics & Tracking

### Google Analytics
- [ ] **GA4 Measurement ID** (e.g., `G-XXXXXXXXXX`)
- [ ] **Google Tag Manager Container ID** (if used)
- [ ] **Google Search Console** access
  - Add as property owner/collaborator

### Facebook & Instagram
- [ ] **Facebook Pixel ID**
- [ ] **Meta Business Manager** access
- [ ] **Facebook Catalog ID** (for dynamic ads)
- [ ] **Instagram Shopping** enabled?

### TikTok
- [ ] **TikTok Pixel ID** (if advertising on TikTok)
- [ ] **TikTok Ads Manager** access

### Other Analytics
- [ ] **Hotjar Site ID** (if using heatmaps)
- [ ] **Microsoft Clarity Project ID** (alternative to Hotjar)

---

## ☁️ Hosting & Deployment

### Hosting Platform Choice
- [ ] **Platform decision:**
  - [ ] Vercel (recommended for Next.js)
  - [ ] Netlify
  - [ ] AWS Amplify
  - [ ] Custom (AWS, Google Cloud, Azure)

### Vercel Setup (if chosen)
- [ ] **Vercel Account** (Pro plan recommended)
- [ ] **Team Access** (add developer as collaborator)
- [ ] **Payment Method** (for overages)

### Environment Variables Needed
```bash
# Shopify
NEXT_PUBLIC_SHOPIFY_DOMAIN=
NEXT_PUBLIC_SHOPIFY_STOREFRONT_TOKEN=
SHOPIFY_ADMIN_API_TOKEN=

# Analytics
NEXT_PUBLIC_GA_MEASUREMENT_ID=
NEXT_PUBLIC_FB_PIXEL_ID=
NEXT_PUBLIC_TIKTOK_PIXEL_ID=

# Email
KLAVIYO_API_KEY=
KLAVIYO_LIST_ID=

# Other
NODE_ENV=production
```

---

## 🏢 Business & Legal Information

### Company Information
- [ ] **Legal business name**
- [ ] **Business registration number**
- [ ] **Tax ID / EIN**
- [ ] **Business address** (for footer, legal pages)
- [ ] **Customer service phone number**
- [ ] **Customer service hours**

### Legal Documents
- [ ] **Privacy Policy** (GDPR/CCPA compliant)
- [ ] **Terms & Conditions**
- [ ] **Shipping & Returns Policy**
- [ ] **Refund Policy**
- [ ] **Cookie Policy**
- [ ] **Accessibility Statement**

### Compliance Requirements
- [ ] **Operating regions** (US only, EU, global?)
- [ ] **Age restrictions** (13+, 18+, etc.)
- [ ] **FDA/regulatory compliance** (for skincare products)
- [ ] **Ingredient disclosure requirements**

---

## 🎨 Brand Assets & Content

### Design Assets
- [ ] **Logo files** (SVG, PNG with transparent background)
  - Primary logo
  - Secondary/icon logo
  - Favicon (32x32, 180x180, 512x512)
- [ ] **Brand Guidelines** (if available)
  - Color codes (current: #1B4332 green, #D4AF37 gold)
  - Font licenses (Cormorant Garamond, Inter)
  - Photography style guide

### Content
- [ ] **Brand Story** (for About page)
- [ ] **Founder Information** (names, photos, bios)
- [ ] **Ingredient Descriptions**
- [ ] **FAQ Content**
- [ ] **Blog/Journal Articles** (if beyond current 6)

---

## 🔒 Security & Monitoring

### SSL Certificate
- [ ] **Handled by hosting?** (Vercel auto-provisions)
- [ ] **Custom SSL?** (if enterprise requirement)

### Security Tools
- [ ] **Cloudflare Account** (optional but recommended)
  - For DDoS protection
  - CDN acceleration
- [ ] **Uptime Monitoring**
  - Pingdom, UptimeRobot, or similar
  - Alert phone number/email

### Error Tracking
- [ ] **Sentry Account** (for error monitoring)
  - DSN key
- [ ] **Alternative error tracking** (Rollbar, Bugsnag)

---

## 👥 Customer Service

### Help Desk Software
- [ ] **Platform** (Zendesk, Gorgias, Freshdesk, etc.)
- [ ] **API Keys** (for integration)
- [ ] **Widget Installation Code**

### Live Chat (Optional)
- [ ] **Platform** (Intercom, Drift, Tidio)
- [ ] **Installation Code**
- [ ] **Connected to customer service team?**

---

## 📱 Social Media Integration

### Social Accounts
- [ ] **Instagram handle**
- [ ] **Facebook page URL**
- [ ] **TikTok handle**
- [ ] **Pinterest profile**
- [ ] **YouTube channel**

### Social Shopping
- [ ] **Instagram Shopping** catalog linked?
- [ ] **Facebook Shop** catalog linked?
- [ ] **Pinterest Shopping** enabled?

---

## 🧪 Testing & Staging

### Test Accounts
- [ ] **Test Shopify orders** (can they process test orders?)
- [ ] **Test customer accounts**
- [ ] **Test payment credentials** (Stripe test mode keys)

### Staging Environment
- [ ] **Separate staging Shopify store?** (best practice)
- [ ] **Staging domain** (e.g., `staging.oraessence.com`)

---

## 📋 Pre-Launch Checklist

### Technical
- [ ] All API keys working in production
- [ ] Domain pointed to hosting
- [ ] SSL certificate active
- [ ] Analytics tracking verified
- [ ] Payment processing tested
- [ ] Email notifications sending
- [ ] Shipping calculations accurate

### Business
- [ ] All products loaded with correct prices
- [ ] Inventory quantities accurate
- [ ] Payment account verified and funded
- [ ] Legal pages published
- [ ] Customer service team trained
- [ ] Order fulfillment process documented

### Marketing
- [ ] Social media accounts ready
- [ ] Email marketing setup complete
- [ ] Launch announcement drafted
- [ ] Influencer/PR outreach planned (if applicable)

---

## 📞 Contact Points

For the integration, we'll need regular contact with:

- [ ] **Technical Lead/CTO** (for API decisions)
- [ ] **E-commerce Manager** (for Shopify/product setup)
- [ ] **Marketing Director** (for analytics/tracking)
- [ ] **Legal/Compliance** (for policy approval)
- [ ] **Customer Service Lead** (for support tools)

---

## ⏱️ Timeline Dependencies

| Item | Required By | Blocker? |
|------|------------|----------|
| Shopify API access | Week 1 | YES - Can't build cart |
| Domain access | Week 2 | YES - Can't deploy |
| Product data | Week 1 | YES - Need for testing |
| Payment keys | Week 2 | YES - Can't process orders |
| Legal docs | Week 2 | YES - Compliance requirement |
| Analytics IDs | Week 3 | NO - Can add post-launch |
| Email marketing | Week 3 | NO - Can add post-launch |
| Live chat | Week 4 | NO - Nice to have |

---

## 💡 Questions for the Demo

1. **Current State**: Do they already have a Shopify store with products, or starting from scratch?
2. **Timeline**: What's their target launch date?
3. **Budget**: Are they approved for the estimated $2,500-5,000/mo operational costs?
4. **Team**: Who will manage day-to-day operations (inventory, orders, customer service)?
5. **Integrations**: Any existing tools they're committed to (specific email provider, CRM, etc.)?
6. **Scale**: Expected traffic and order volume for first 6 months?
7. **International**: Will they ship internationally from day one?

---

## 📄 Deliverables to Request

After the demo, request they provide:

1. **Immediate (within 24 hours)**:
   - Shopify admin access
   - Domain registrar access
   - Decision on hosting platform

2. **Week 1**:
   - Complete product export from Shopify
   - All API keys for payment, analytics, email
   - Legal documents (privacy policy, terms)

3. **Week 2**:
   - Brand assets (logos, fonts, colors)
   - Content for any missing pages
   - Shipping and fulfillment details

---

## 🚀 Next Steps Post-Demo

If they approve:

1. **Grant Access**: Provide all credentials via secure method (1Password, LastPass shared vault)
2. **Kickoff Call**: Schedule 1-hour technical planning call
3. **Integration Sprint**: 2-week sprint to connect everything
4. **Staging Review**: Deploy to staging for their review
5. **Production Launch**: Go live with their approval

**Estimated Timeline**: 3-4 weeks from access to launch (if all materials ready)

---

## 💰 Cost Summary to Present

### One-Time Costs
- Domain registration: $15-50/year
- Legal document templates: $0-500 (if not using lawyer)
- Initial setup: Included in demo

### Monthly Recurring (Year 1)
- Shopify: $300-2,000/mo (depends on plan)
- Hosting (Vercel): $20-100/mo
- Email marketing (Klaviyo): $150-500/mo
- Analytics suite: $0-200/mo
- Customer service: $0-500/mo

**Total Monthly**: $470-3,300/mo depending on scale and plan choices

### Recommended Starting Stack (Lean)
- Shopify Basic: $39/mo
- Vercel: $20/mo  
- Klaviyo: $20/mo (starter)
- Free tier analytics

**Lean Monthly**: ~$80/mo (scales up as they grow)

---

*This checklist ensures zero surprises during integration. Print this and use it as your agenda for the demo meeting.*
