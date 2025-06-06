// font change
function changeFont(fontFamily) {
  document.getElementById('para-font').style.fontFamily = fontFamily;
}


// dark mode
document.getElementById('dark-mode').addEventListener('click', function () {
  document.body.classList.toggle('dark-mode');
  localStorage.setItem('darkMode', document.body.classList.contains('dark-mode'));
});

// Initialize from localStorage
if (localStorage.getItem('darkMode') === 'true') {
  document.body.classList.add('dark-mode');
}

function openPreview(codeHTML) {
const previewModal = document.getElementById('previewModal');
const previewArea = document.getElementById('modalPreviewArea');
const codeArea = document.getElementById('modalCodeArea');

previewArea.innerHTML = codeHTML;
codeArea.textContent = codeHTML;

previewModal.classList.remove('hidden');
}

// CLOSE MODAL FUNCTION
function closeModal() {
document.getElementById('previewModal').classList.add('hidden');
}

// COPY CODE FROM MODAL
function copyModalCode() {
const code = document.getElementById('modalCodeArea').textContent;
navigator.clipboard.writeText(code)
.then(() => alert("Code copied!"))
.catch(() => alert("Failed to copy!"));
}
// Copy Code Function
function copyCode(codeId, copiedId) {
  const code = document.getElementById(codeId).innerText;
  navigator.clipboard.writeText(code).then(() => {
    const copiedMessage = document.getElementById(copiedId);
    copiedMessage.classList.add('visible');
    setTimeout(() => {
      copiedMessage.classList.remove('visible');
    }, 1500);
  }).catch(err => {
    console.error("Failed to copy:", err);
  });
}

// Toggle Preview Function
function togglePreview(previewId) {
  const previewBox = document.getElementById(previewId);
  previewBox.style.display = previewBox.style.display === 'block' ? 'none' : 'block';
}
let progress = 0;

function startProgress() {
  const progressBar = document.getElementById('progress-bar');

  const interval = setInterval(() => {
    progress += 5;

    if (progress >= 100) {
      progress = 100;
      clearInterval(interval);
    }

    progressBar.style.width = progress + '%';
    progressBar.textContent = progress + '%';
  }, 500);
}
