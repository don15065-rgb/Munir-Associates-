# Muneer & Associates — Website Rebuild

A polished, accessible, responsive static law-firm website built from the firm's existing website and Noman Sohail's public professional profile (reviewed 10 November 2026).

## Open locally

Double-click `index.html` after unzipping the archive. Links use relative paths so the website works on a local computer or GitHub Pages. JavaScript is used only for mobile navigation and preparing enquiry drafts.

## Deploy on your existing GitHub Pages site

1. Back up the current repository `don15065-rgb/Munir-Associates-`.
2. Upload the **contents** of this folder (not the folder itself) to the published branch / root of the repository.
3. Confirm that GitHub Pages uses that branch and root folder. GitHub Pages should then serve `index.html` at `https://don15065-rgb.github.io/Munir-Associates-/`.
4. Test all links, mobile navigation, phone numbers and email/WhatsApp actions after deployment.
5. When you obtain a custom domain, change the base `DOMAIN` constant in `tools/build_site.py` and rebuild, then run `python tools/build_site.py` after installing `Jinja2` (`pip install -r tools/requirements.txt`), or replace the canonical, Open Graph and sitemap URLs directly. Update any repo CNAME and DNS settings separately.

## Important limitations and publication review

- **The form is intentionally serverless.** It prepares an email or WhatsApp message; there is no backend and no representation that a message was submitted to the firm automatically. Users must send the draft themselves.
- **Contact email:** The only publicly verified email from the supplied sources is `thenaumansuhail065@gmail.com`. Replace it with a firm-domain mailbox once provisioned. Phone numbers and office address were drawn from the existing sites; recheck before launch.
- **Professional conduct:** Pakistan Legal Practitioners and Bar Councils Rules, 1976, Rule 135 restrict advocates' solicitation/advertising. Have the published copy and any planned Google Ads reviewed for compliance with current Pakistan and Sindh Bar Council requirements before promotion.
- **Client names:** The older website names several representative clients. These names/logos have been deliberately excluded from this rebuild pending consent, confidentiality review and professional-conduct clearance.
- **Claims:** The site does not invent success rates, rankings, testimonials, case victories, awards, staff, affiliations or bar-accreditation claims.
- **Profile:** Muneer Ahmed's 16+ years and practice areas are taken from the existing firm site. Noman Sohail's degree qualifications and CAMS were cross-checked against his public profile. Confirm all biographical details with the relevant lawyer before launch.
- **Privacy:** This is static; it has no cookie analytics. Google Fonts are loaded from Google's CDN. Before adding analytics, forms or a CMS, update the privacy terms to reflect actual processing.
- **Articles:** The three short perspectives are general editorial content newly authored for this site; legal counsel should review them before publication.
- **No promises:** Professional advice depends on the facts and an agreed engagement; the site contains no guarantees or outcome representations.

## Contents

- Home, Firm, People (2 biographies), Expertise (9 individual practice pages), Perspectives (3 articles), Contact, Privacy, Legal notice and 404 pages.
- Semantic HTML, visible keyboard focus, skip link, mobile menu, responsive layout and reduced-motion support.
- Search basics: unique titles/meta descriptions, canonical URLs, Open Graph image, structured data, robots.txt, sitemap.xml, manifest and SVG favicon.
- Direct `tel:`, `mailto:`, WhatsApp, Google Maps, and profile links.

## Suggested next improvements

After approval, use a dedicated domain such as a firm-owned `.com`/`.pk`, commission real professional portraits, add a proper firm mailbox, and consider an accessible secure enquiry endpoint with privacy controls (not a generic unprotected contact form). Any search-engine marketing should first be cleared under the applicable bar rules.

## What would elevate the site further

- Replace the typographic initials on lawyer profile cards with photographs taken in the same professional lighting and crop; this is the single biggest visual improvement still possible with real source material.
- Buy and verify a domain and firm-address email, then update the `DOMAIN` and `EMAIL` constants in `tools/build_site.py` and rerun the generator.
- For genuinely direct enquiry submissions, choose a vetted form processing service, update the privacy terms, and add a configured server endpoint. No form endpoint or inbox credentials are invented in this release.
- Verify the principal lawyer’s name and spellings against bar registration before publishing; the branded spelling is **Muneer & Associates** as supplied.
