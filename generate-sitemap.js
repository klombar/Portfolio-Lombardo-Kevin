import { readFileSync, writeFileSync } from 'fs';

const BASE_URL = 'https://portfolio-lombardo-kevin.vercel.app';

// Chargement du contenu de carrouselData.json
const projects = JSON.parse(readFileSync('./public/carrouselData.json', 'utf8'));

const generateSitemap = () => {
  let sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n`;
  sitemap += `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
                     xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">\n`;

   // Boucle de generation d'image / titre / description
  projects.forEach(project => {
    sitemap += `
      <url>
        <loc>${BASE_URL}/project/${project.id}</loc>
        <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
        <priority>0.8</priority>
        <image:image>
          <image:loc>${project.image}</image:loc>
          <image:title>${project.alt}</image:title>
          <image:caption>${project.description}</image:caption>
        </image:image>
    `;

    // les images détaillées du projet
    if (project.projectDetailsImages) {
      Object.values(project.projectDetailsImages).forEach(imageUrl => {
        sitemap += `
          <image:image>
            <image:loc>${imageUrl}</image:loc>
            <image:title>Image détaillée de ${project.title}</image:title>
          </image:image>
        `;
      });
    }

    sitemap += `</url>\n`;
  });

  sitemap += `</urlset>`;

  // fichier sitemap.xml dans le dossier public
  writeFileSync('./public/sitemap.xml', sitemap, 'utf8');
  console.log('Sitemap avec images généré avec succès !');
};

generateSitemap();
