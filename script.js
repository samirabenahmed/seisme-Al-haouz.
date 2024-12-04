document.addEventListener("DOMContentLoaded", () => {
  const menuItems = document.querySelectorAll("header nav ul li a");
  const dynamicSection = document.querySelector(".dynamic-section");
  const sidebar = document.querySelector(".sidebar");
  const acquisitions = document.querySelector(".nouvelles-acquisitions");

  // Contenus dynamiques pour chaque section
  const sectionContent = {
    accueil: `
      <div class="infos">
        <h2>Le séisme d'Al Haouz, le plus puissant jamais enregistré au Maroc</h2>
          <p>Le séisme de 2023 au Maroc ou séisme d'Al Haouz est le plus important tremblement de terre enregistré ar  des stations sismiques de l'histoire du pays.</p>
          <p style="margin-bottom: 20px;">Le séisme d'Al Haouz, survenu le 8 septembre 2023 à 22 h 11 min.</p>
          <p>D’une magnitude de 7, faisant 1.037 morts et 1.204 blessés</p>
          <p>dont 721 grièvement.</p>

      </div>
      <div class="photo-link">
        <a href="https://www.exemple.com" target="_blank">
          <img src="Seisme-Al-Haouz.jpg" alt="Séisme d'Al Haouz" class="seisme-image">
        </a>
      </div>
    `,
    carte: `
      <iframe 
        src="https://samirabenahmed.github.io/interactive/" 
        style="position: absolute; top: 50px; left: 0; width: 100%; height: calc(100vh - 50px); border: none;">
      </iframe>
    `,

    analyse:  `
    <iframe 
      src="https://samirabenahmed.github.io/raster/" 
      style="position: absolute; top: 50px; left: 0; width: 100%; height: calc(100vh - 50px); border: none;">
    </iframe>
  `,
    dossier:  `
    <iframe 
      src="https://samirabenahmed.github.io/Requette./" 
      style="position: absolute; top: 50px; left: 0; width: 100%; height: calc(100vh - 50px); border: none;">
    </iframe>
  `,
    tableau:   `
    <iframe 
      src="https://samirabenahmed.github.io/graphe/" 
      style="position: absolute; top: 50px; left: 0; width: 100%; height: calc(100vh - 50px); border: none;">
    </iframe>
  `,
  };

  // Fonction pour changer de contenu
  const updateContent = (section) => {
    // Cache la barre latérale et les acquisitions sauf pour Accueil
    if (section === "accueil") {
      sidebar.style.display = "block";
      acquisitions.style.display = "block";
    } else {
      sidebar.style.display = "none";
      acquisitions.style.display = "none";
    }

    // Met à jour le contenu principal
    dynamicSection.innerHTML = sectionContent[section] || "<p>Section non définie</p>";
  };

  // Écoute les clics sur les éléments du menu
  menuItems.forEach((item) => {
    item.addEventListener("click", (e) => {
      e.preventDefault();
      const section = item.getAttribute("data-section");
      updateContent(section);
    });
  });

  // Initialisation : affiche le contenu d'accueil
  updateContent("accueil");
});



