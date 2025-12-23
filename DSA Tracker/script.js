// Using Module Type for Firebase Imports
// --- 0. FIREBASE SETUP ---
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.6.0/firebase-app.js";
import {
  getDatabase,
  ref,
  get,
  set,
  update,
  onValue,
} from "https://www.gstatic.com/firebasejs/12.6.0/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyAx_cwOhFJibeaqXmh9NPJZf9x6R7LzTF0",
  authDomain: "dsatracker951.firebaseapp.com",
  projectId: "dsatracker951",
  storageBucket: "dsatracker951.firebasestorage.app",
  messagingSenderId: "724452945514",
  appId: "1:724452945514:web:e6e6e1a04dab66678ae413",
  measurementId: "G-GMJ1S2R008",
  databaseURL:
    "https://dsatracker951-default-rtdb.europe-west1.firebasedatabase.app",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

// Database references
const dbRef = ref(db, "DSATracker/data");

// --- 1. DATA CONFIGURATION ---
const syllabusData = [
  {
    title: "Level 3: Array Problems",
    id: "arrays",
    columns: [
      {
        title: "Learn",
        icon: "fa-book-open",
        color: "text-blue-600 dark:text-blue-400",
        bgColor: "bg-blue-50 dark:bg-blue-900/20",
        groups: [
          {
            name: "Introduction",
            items: [
              { name: "What is an array?", link: "#" },
              {
                name: "Basic characteristics: contiguous memory, fixed size, indexed elements",
                link: "#",
              },
            ],
          },
          {
            name: "Array Declaration and Initialization",
            items: [
              {
                name: "Syntax for declaring arrays in various programming languages",
                link: "#",
              },
              {
                name: "Initializing arrays with default or specific values",
                link: "#",
              },
            ],
          },
          {
            name: "Accessing Elements",
            items: [
              {
                name: "Indexing: accessing elements using their position",
                link: "#",
              },
              {
                name: "Address calculation for element access",
                link: "#",
              },
            ],
          },
          {
            name: "Operations",
            items: [
              {
                name: "Basic operations like insertion, deletion, updating",
                link: "#",
              },
              { name: "Swapping elements", link: "#" },
            ],
          },
          {
            name: "Multi-dimensional",
            items: [
              { name: "Understanding 2D arrays (matrices)", link: "#" },
              {
                name: "Accessing elements in multi-dimensional arrays",
                link: "#",
              },
            ],
          },
          {
            name: "Manipulation",
            items: [
              { name: "Reversing an array", link: "#" },
              {
                name: "Finding the maximum or minimum element",
                link: "#",
              },
              {
                name: "Finding the sum or average of elements",
                link: "#",
              },
            ],
          },
          {
            name: "Traversal",
            items: [
              { name: "Iterating through all elements", link: "#" },
              {
                name: "Different approaches (e.g., for loop, while loop)",
                link: "#",
              },
            ],
          },
          {
            name: "Subarrays",
            items: [
              {
                name: "Creating subarrays from existing arrays",
                link: "#",
              },
              {
                name: "Understanding slicing for specific ranges",
                link: "#",
              },
            ],
          },
        ],
      },
      {
        title: "Practice",
        icon: "fa-code",
        color: "text-emerald-600 dark:text-emerald-400",
        bgColor: "bg-emerald-50 dark:bg-emerald-900/20",
        groups: [
          {
            name: "Easy",
            badge:
              "bg-green-100 text-green-700 dark:bg-green-900/40 dark:text-green-300",
            items: [
              { name: "Find largest element in an array", link: "#" },
              { name: "Second largest element in an array", link: "#" },
              {
                name: "Count the frequency of an element in an array",
                link: "#",
              },
              {
                name: "Find the minimum (or maximum) element of an array",
                link: "#",
              },
              { name: "Rotate an array by K", link: "#" },
              { name: "2 sum", link: "#" },
              { name: "Longest subarray with sum", link: "#" },
              {
                name: "Find if a given element is in a sorted array (binary search)",
                link: "#",
              },
            ],
          },
          {
            name: "Medium",
            badge:
              "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/40 dark:text-yellow-300",
            items: [
              { name: "Move zeros", link: "#" },
              {
                name: "Best Time to Buy and Sell Stock (Sliding Window)",
                link: "#",
              },
              { name: "3 sum", link: "#" },
              { name: "Next Permutation", link: "#" },
              { name: "Top K frequent element", link: "#" },
              { name: "Maximum Subarray", link: "#" },
              { name: "Container With Most Water", link: "#" },
              { name: "Find all subsets", link: "#" },
              { name: "Set Matrix Zero", link: "#" },
            ],
          },
          {
            name: "Hard",
            badge:
              "bg-red-100 text-red-700 dark:bg-red-900/40 dark:text-red-300",
            items: [
              { name: "Find missing positive", link: "#" },
              { name: "4 sum", link: "#" },
              { name: "Best Time to Buy and Sell Stock III", link: "#" },
              { name: "Reverse pairs", link: "#" },
            ],
          },
        ],
      },
    ],
  },
  {
    title: "Level 4: Strings (Coming Soon)",
    id: "strings",
    items: [{ name: "Example Item", link: "#" }],
  },
];

// --- 2. STATE MANAGEMENT ---
let completedItems = new Set();

// Initialize App
function init() {
  renderSyllabus();
  loadProgress();
}

// Fetch from Firebase
function loadProgress() {
  const statusEl = document.getElementById("db-status");
  statusEl.textContent = "Syncing...";

  get(dbRef)
    .then((snapshot) => {
      if (snapshot.exists()) {
        const data = snapshot.val();
        const items = data.completed || [];
        completedItems = new Set(items);
        statusEl.textContent = "Online";
        statusEl.className =
          "text-xs bg-green-100 dark:bg-green-900/40 text-green-700 dark:text-green-300 px-2 py-0.5 rounded-full border dark:border-green-800";
      } else {
        statusEl.textContent = "New Data";
        statusEl.className =
          "text-xs bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300 px-2 py-0.5 rounded-full border dark:border-blue-800";
      }
      renderSyllabus();
      updateAllProgress();
    })
    .catch((error) => {
      console.error("Firebase Error:", error);
      statusEl.textContent = "Offline";
      statusEl.className =
        "text-xs bg-red-100 dark:bg-red-900/40 text-red-700 dark:text-red-300 px-2 py-0.5 rounded-full border dark:border-red-800";
    });
}

// Save to Firebase
function saveProgress() {
  const statusEl = document.getElementById("db-status");
  statusEl.textContent = "Saving...";

  const dataToSave = {
    completed: [...completedItems],
    lastUpdated: new Date().toISOString(),
  };

  update(dbRef, dataToSave)
    .then(() => {
      statusEl.textContent = "Saved";
      setTimeout(() => {
        // Check current theme to restore correct class
        const isDark = document.documentElement.classList.contains("dark");
        statusEl.textContent = "Online";
      }, 1000);
    })
    .catch((error) => {
      console.error("Save failed:", error);
      statusEl.textContent = "Error Saving";
    });

  updateAllProgress();
}

// --- 3. RENDERING ---
function renderSyllabus() {
  const container = document.getElementById("syllabus-container");
  container.innerHTML = "";

  syllabusData.forEach((section, sectionIndex) => {
    const sectionEl = document.createElement("div");
    sectionEl.className =
      "bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden transition-colors";

    // --- SECTION HEADER ---
    const header = document.createElement("div");
    header.className =
      "p-5 bg-white dark:bg-gray-800 cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-750 transition flex justify-between items-center select-none group";
    header.onclick = () => window.toggleMainAccordion(sectionIndex);

    header.innerHTML = `
                    <div class="flex items-center gap-4">
                        <div class="bg-indigo-600 dark:bg-indigo-500 text-white w-10 h-10 rounded-lg flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform">
                            <i class="fas fa-layer-group text-lg"></i>
                        </div>
                        <div>
                            <h2 class="font-bold text-lg text-gray-800 dark:text-white">${section.title}</h2>
                            <div class="text-xs text-gray-400 dark:text-gray-500 mt-1 progress-text-${sectionIndex}">0% Completed</div>
                        </div>
                    </div>
                    <div class="flex items-center gap-6">
                        <div class="hidden md:block w-32 h-2 bg-gray-100 dark:bg-gray-700 rounded-full overflow-hidden">
                            <div class="h-full bg-indigo-500 dark:bg-indigo-400 rounded-full transition-all duration-500 section-bar-${sectionIndex}" style="width: 0%"></div>
                        </div>
                        <i class="fas fa-chevron-down text-gray-400 dark:text-gray-500 transition-transform duration-300" id="arrow-${sectionIndex}"></i>
                    </div>
                `;

    // --- SECTION CONTENT ---
    const content = document.createElement("div");
    content.id = `content-${sectionIndex}`;
    content.className =
      "accordion-content border-t border-gray-100 dark:border-gray-700";

    const innerContent = document.createElement("div");
    innerContent.className =
      "accordion-inner bg-gray-50/30 dark:bg-gray-900/30";

    if (section.columns) {
      const grid = document.createElement("div");
      grid.className = "grid grid-cols-1 md:grid-cols-2 gap-6 p-6";

      section.columns.forEach((col, colIndex) => {
        const colDiv = document.createElement("div");
        colDiv.className = "flex flex-col gap-3";

        colDiv.innerHTML = `
                            <div class="flex items-center gap-2 mb-2 pb-2 border-b border-gray-200 dark:border-gray-700">
                                <div class="${col.bgColor} ${col.color} p-2 rounded-md">
                                    <i class="fas ${col.icon}"></i>
                                </div>
                                <h3 class="font-bold text-gray-700 dark:text-gray-200">${col.title}</h3>
                            </div>
                        `;

        col.groups.forEach((group, groupIndex) => {
          const groupEl = document.createElement("div");
          groupEl.className =
            "bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow";
          const uniqueGroupId = `${section.id}-${colIndex}-${groupIndex}`;

          const groupHeader = document.createElement("div");
          groupHeader.className =
            "p-3 flex justify-between items-center cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-700 transition select-none";
          groupHeader.onclick = () => window.toggleSubAccordion(uniqueGroupId);

          groupHeader.innerHTML = `
                                <div class="flex items-center gap-2">
                                    <span class="font-medium text-sm text-gray-700 dark:text-gray-200">${
                                      group.name
                                    }</span>
                                    ${
                                      group.badge
                                        ? `<span class="text-[10px] px-2 py-0.5 rounded-full font-bold ${group.badge} uppercase tracking-wider">Problem Set</span>`
                                        : ""
                                    }
                                </div>
                                <i class="fas fa-chevron-right text-xs text-gray-300 dark:text-gray-600 transition-transform duration-200" id="arrow-${uniqueGroupId}"></i>
                            `;

          const groupContent = document.createElement("div");
          groupContent.id = `content-${uniqueGroupId}`;
          groupContent.className =
            "accordion-content bg-gray-50 dark:bg-gray-900/50";

          const groupInner = document.createElement("div");
          groupInner.className = "accordion-inner p-2 space-y-1";

          group.items.forEach((item, itemIndex) => {
            const itemId = `${uniqueGroupId}-${itemIndex}`;
            const isChecked = completedItems.has(itemId);

            const itemRow = document.createElement("div");
            itemRow.className =
              "flex items-start p-2 hover:bg-white dark:hover:bg-gray-800/80 rounded transition group/item";
            itemRow.innerHTML = `
                                    <label class="checkbox-wrapper flex items-start cursor-pointer pt-0.5">
                                        <input type="checkbox" class="sr-only" 
                                            onchange="window.toggleItem('${itemId}')" 
                                            ${isChecked ? "checked" : ""}>
                                        <div class="w-4 h-4 border border-gray-300 dark:border-gray-600 rounded bg-white dark:bg-gray-700 flex items-center justify-center transition hover:border-indigo-400 dark:hover:border-indigo-400">
                                            <svg class="w-2.5 h-2.5 text-white hidden pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M5 13l4 4L19 7"></path></svg>
                                        </div>
                                    </label>
                                    <div class="ml-3 flex-grow min-w-0">
                                        <div class="text-sm text-gray-600 dark:text-gray-300 ${
                                          isChecked
                                            ? "line-through text-gray-400 dark:text-gray-500"
                                            : ""
                                        }" id="text-${itemId}">${
              item.name
            }</div>
                                    </div>
                                    <a href="${
                                      item.link
                                    }" target="_blank" class="ml-2 text-indigo-500 dark:text-indigo-400 opacity-0 group-hover/item:opacity-100 hover:text-indigo-700 dark:hover:text-indigo-300 transition" title="Go to resource">
                                        <i class="fas fa-external-link-alt text-xs"></i>
                                    </a>
                                `;
            groupInner.appendChild(itemRow);
          });

          groupContent.appendChild(groupInner);
          groupEl.appendChild(groupHeader);
          groupEl.appendChild(groupContent);
          colDiv.appendChild(groupEl);
        });

        grid.appendChild(colDiv);
      });
      innerContent.appendChild(grid);
    } else {
      const list = document.createElement("div");
      list.className = "p-4 space-y-2";
      section.items.forEach((item, idx) => {
        const itemId = `${section.id}-simple-${idx}`;
        const isChecked = completedItems.has(itemId);
        const div = document.createElement("div");
        div.className = "flex items-center gap-3";
        div.innerHTML = `
                            <label class="checkbox-wrapper flex items-center cursor-pointer">
                                <input type="checkbox" class="sr-only" ${
                                  isChecked ? "checked" : ""
                                } onchange="window.toggleItem('${itemId}')">
                                <div class="w-4 h-4 border border-gray-300 dark:border-gray-600 rounded bg-white dark:bg-gray-700 flex items-center justify-center transition hover:border-indigo-400">
                                    <svg class="w-2.5 h-2.5 text-white hidden pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M5 13l4 4L19 7"></path></svg>
                                </div>
                            </label>
                            <span class="text-sm text-gray-600 dark:text-gray-300 ${
                              isChecked
                                ? "line-through text-gray-400 dark:text-gray-500"
                                : ""
                            }" id="text-${itemId}">${item.name}</span>
                         `;
        list.appendChild(div);
      });
      innerContent.appendChild(list);
    }

    content.appendChild(innerContent);
    sectionEl.appendChild(header);
    sectionEl.appendChild(content);
    container.appendChild(sectionEl);
  });
}

// --- 4. INTERACTIVITY LOGIC ---

function toggleMainAccordion(index) {
  const content = document.getElementById(`content-${index}`);
  const arrow = document.getElementById(`arrow-${index}`);

  if (content.classList.contains("active")) {
    content.classList.remove("active");
    arrow.style.transform = "rotate(0deg)";
  } else {
    content.classList.add("active");
    arrow.style.transform = "rotate(180deg)";
  }
}

function toggleSubAccordion(id) {
  const content = document.getElementById(`content-${id}`);
  const arrow = document.getElementById(`arrow-${id}`);

  if (content.classList.contains("active")) {
    content.classList.remove("active");
    arrow.style.transform = "rotate(0deg)";
  } else {
    content.classList.add("active");
    arrow.style.transform = "rotate(90deg)";
  }
}

function toggleItem(id) {
  if (completedItems.has(id)) {
    completedItems.delete(id);
    const el = document.getElementById(`text-${id}`);
    if (el)
      el.classList.remove(
        "line-through",
        "text-gray-400",
        "dark:text-gray-500"
      );
  } else {
    completedItems.add(id);
    const el = document.getElementById(`text-${id}`);
    if (el)
      el.classList.add("line-through", "text-gray-400", "dark:text-gray-500");
  }
  saveProgress();
}

function updateAllProgress() {
  let totalGlobal = 0;
  let completedGlobal = 0;

  syllabusData.forEach((section, index) => {
    let sectionTotal = 0;
    let sectionCompleted = 0;

    if (section.columns) {
      section.columns.forEach((col, colIdx) => {
        col.groups.forEach((group, groupIdx) => {
          group.items.forEach((item, itemIdx) => {
            sectionTotal++;
            const id = `${section.id}-${colIdx}-${groupIdx}-${itemIdx}`;
            if (completedItems.has(id)) sectionCompleted++;
          });
        });
      });
    } else if (section.items) {
      section.items.forEach((item, idx) => {
        sectionTotal++;
        if (completedItems.has(`${section.id}-simple-${idx}`))
          sectionCompleted++;
      });
    }

    const secPercent =
      sectionTotal === 0
        ? 0
        : Math.round((sectionCompleted / sectionTotal) * 100);

    const bar = document.querySelector(`.section-bar-${index}`);
    if (bar) bar.style.width = `${secPercent}%`;

    const text = document.querySelector(`.progress-text-${index}`);
    if (text)
      text.textContent = `${sectionCompleted}/${sectionTotal} Done (${secPercent}%)`;

    totalGlobal += sectionTotal;
    completedGlobal += sectionCompleted;
  });

  const globalPercent =
    totalGlobal === 0 ? 0 : Math.round((completedGlobal / totalGlobal) * 100);
  document.getElementById("global-percent").textContent = `${globalPercent}%`;
  document.getElementById(
    "global-progress-bar"
  ).style.width = `${globalPercent}%`;
  document.getElementById(
    "global-count"
  ).textContent = `${completedGlobal} / ${totalGlobal} Tasks`;
}

function resetProgress() {
  if (confirm("Reset all progress? This will update the database.")) {
    completedItems.clear();
    saveProgress();
    renderSyllabus();
    updateAllProgress();
  }
}

function toggleTheme() {
  if (document.documentElement.classList.contains("dark")) {
    document.documentElement.classList.remove("dark");
    localStorage.theme = "light";
  } else {
    document.documentElement.classList.add("dark");
    localStorage.theme = "dark";
  }
}

// --- EXPORT GLOBAL FUNCTIONS ---
window.toggleMainAccordion = toggleMainAccordion;
window.toggleSubAccordion = toggleSubAccordion;
window.toggleItem = toggleItem;
window.resetProgress = resetProgress;
window.toggleTheme = toggleTheme;

// Boot
init();
