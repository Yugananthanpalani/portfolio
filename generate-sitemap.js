import fs from "fs";
import path from "path";

const publicPath = path.resolve("./public");

// Ensure public folder exists
if (!fs.existsSync(publicPath)) {
  fs.mkdirSync(publicPath);
}

// Your website URL
const websiteUrl = "https://yugananthan.tech";

// Generate sitemap.xml
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>${websiteUrl}/</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <priority>1.0</priority>
  </url>
</urlset>
`;

fs.writeFileSync(path.join(publicPath, "sitemap.xml"), sitemap);
console.log("✅ sitemap.xml generated in public folder");

// Generate robots.txt
const robots = `User-agent: *
Allow: /
Sitemap: ${websiteUrl}/sitemap.xml
`;

fs.writeFileSync(path.join(publicPath, "robots.txt"), robots);
console.log("✅ robots.txt generated in public folder");
  