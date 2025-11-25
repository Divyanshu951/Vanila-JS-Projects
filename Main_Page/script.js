// Initialize Icons
lucide.createIcons();

// Data
const projects = [
  {
    day: "01",
    title: "Q & A Page",
    tags: ["HTML", "CSS"],
    link: "https://github.com/",
    liveLink: "https://google.com/",
  },
  {
    day: "02",
    title: "Portfolio Landing",
    tags: ["Flexbox"],
    link: "#",
    liveLink: "#",
  },

  {
    day: "03",
    title: "Random Color Generator",
    tags: ["DOM", "Math"],
    link: "#",
    liveLink: "#",
  },
  {
    day: "04",
    title: "Modal Popup",
    tags: ["Events"],
    link: "#",
    liveLink: "#",
  },
  {
    day: "05",
    title: "Palindrome Checker",
    tags: ["Algorithms"],
    link: "#",
    liveLink: "#",
  },
  {
    day: "06",
    title: "Vowel Counter",
    tags: ["Regex"],
    link: "#",
    liveLink: "#",
  },
  {
    day: "07",
    title: "Click to Copy",
    tags: ["Clipboard API"],
    link: "#",
    liveLink: "#",
  },
  {
    day: "08",
    title: "Google Input Field",
    tags: ["CSS Focus"],
    link: "#",
    liveLink: "#",
  },
  {
    day: "09",
    title: "Weather App",
    tags: ["API"],
    link: "#",
    liveLink: "#",
  },
];

const listContainer = document.getElementById("projectList");
const searchInput = document.getElementById("searchInput");

// Function to render the list
function renderProjects(filterText = "") {
  listContainer.innerHTML = ""; // Clear current list

  const filteredProjects = projects.filter(
    (project) =>
      project.title.toLowerCase().includes(filterText.toLowerCase()) ||
      project.day.includes(filterText) ||
      project.tags.some((tag) =>
        tag.toLowerCase().includes(filterText.toLowerCase())
      )
  );

  if (filteredProjects.length === 0) {
    listContainer.innerHTML = `
                    <div class="empty-state">
                        <i data-lucide="ghost" width="48" height="48" style="margin: 0 auto; opacity: 0.5;"></i>
                        <p>No projects found.</p>
                    </div>
                `;
    lucide.createIcons();
    return;
  }

  filteredProjects.forEach((project, index) => {
    const delay = index * 50;

    const card = document.createElement("div");
    card.className = "card";
    card.style.animation = `fadeIn 0.5s ease forwards ${delay}ms`;

    // Generate Tag HTML
    const tagsHtml = project.tags
      .map((tag) => `<span class="tag">${tag}</span>`)
      .join("");

    card.innerHTML = `
                    <div class="card-left">
                        <div class="day-number">
                            ${project.day}
                        </div>
                        <div class="project-info">
                            <h3>${project.title}</h3>
                            <div class="tags-container">
                                ${tagsHtml}
                            </div>
                        </div>
                    </div>
                    
                    <div class="links">
                    <a href="${project.link}" target="_blank" class="github-link" title="View Code on GitHub">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-github"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0 3 1.5-2.64-.5-5.36.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
                    </a>

                    <a href="${project.liveLink}" target="_blank" class="live-link" title="View live link">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-link-45deg" viewBox="0 0 16 16">
                        <path d="M4.715 6.542 3.343 7.914a3 3 0 1 0 4.243 4.243l1.828-1.829A3 3 0 0 0 8.586 5.5L8 6.086a1 1 0 0 0-.154.199 2 2 0 0 1 .861 3.337L6.88 11.45a2 2 0 1 1-2.83-2.83l.793-.792a4 4 0 0 1-.128-1.287z"/><path d="M6.586 4.672A3 3 0 0 0 7.414 9.5l.775-.776a2 2 0 0 1-.896-3.346L9.12 3.55a2 2 0 1 1 2.83 2.83l-.793.792c.112.42.155.855.128 1.287l1.372-1.372a3 3 0 1 0-4.243-4.243z"/></svg>
                    </a>
                    </div>
                `;

    listContainer.appendChild(card);
  });

  // Re-initialize icons
  lucide.createIcons();
}

// Event Listener for Search
searchInput.addEventListener("input", (e) => {
  renderProjects(e.target.value);
});

// Initial Render
renderProjects();
