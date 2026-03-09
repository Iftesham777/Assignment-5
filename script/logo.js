loadIssues();

const allBtn = document.getElementById("allBtn");
const openBtn = document.getElementById("openBtn");
const closedBtn = document.getElementById("closedBtn");

const issueCount = document.getElementById("issueCount");
const grid = document.querySelector(".grid");

let issues = [];

// API 
async function loadIssues() {
  const res = await fetch("https://phi-lab-server.vercel.app/api/v1/lab/issues");
  const data = await res.json();

  issues = data.data;
  showIssues(issues);
}

function showIssues(issueList) {
  grid.innerHTML = "";

  issueCount.innerText = issueList.length + " Issues";

  issueList.forEach(issue => {

    const border =
      issue.status === "open"
        ? "border-green-500"
        : "border-purple-500";

    const card = `
    <div class="bg-white p-4 rounded-lg shadow-sm border-t-4 ${border}">
      
      <span class="text-xs bg-red-100 text-red-500 px-2 py-1 rounded">
        ${issue.priority}
      </span>

      <h3 class="font-semibold mt-2">
        ${issue.title}
      </h3>

      <p class="text-gray-500 text-sm mt-1">
        ${issue.description.slice(0,80)}...
      </p>

      <div class="flex gap-2 mt-3">
        <span class="text-xs bg-red-100 text-red-500 px-2 py-1 rounded">
          ${issue.type}
        </span>
      </div>

      <p class="text-xs text-gray-400 mt-4">
        #${issue.id} by ${issue.author} <br> ${issue.date}
      </p>

    </div>
    `;

    grid.innerHTML += card;
  });
}

// All button
allBtn.addEventListener("click", () => {
  showIssues(issues);
});

// Open button
openBtn.addEventListener("click", () => {
  const openIssues = issues.filter(issue => issue.status === "open");
  showIssues(openIssues);
});

// Closed button
closedBtn.addEventListener("click", () => {
  const closedIssues = issues.filter(issue => issue.status === "closed");
  showIssues(closedIssues)
});

loadIssues();


