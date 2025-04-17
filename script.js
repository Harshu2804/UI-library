//here is for font chnage 
function changeFont(fontFamily) {
  document.getElementById('para-font').style.fontFamily = fontFamily;
}


//here is function for dark mode here
document.getElementById('dark-mode').addEventListener('click', function () {
  document.body.classList.toggle('dark-mode');
  localStorage.setItem('darkMode', document.body.classList.contains('dark-mode'));
});
 
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

//closing tghe MODAL FUNCTION
function closeModal() {
document.getElementById('previewModal').classList.add('hidden');
}
 
function copyModalCode() {
const code = document.getElementById('modalCodeArea').textContent;
navigator.clipboard.writeText(code)
.then(() => alert("Code copied!"))
.catch(() => alert("Failed to copy!"));
}
 
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

// Toggle Preview Function is written here
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
function copyCode(codeId, copiedId) {
  try {
      // Get the code element
      const codeElement = document.getElementById(codeId);
      if (!codeElement) {
          console.error(`Element with ID ${codeId} not found`);
          return;
      }

      // Extract text to copy
      const textToCopy = codeElement.innerText || codeElement.textContent;
      if (!textToCopy) {
          console.error(`No text found in element with ID ${codeId}`);
          return;
      }

      // Copy to clipboard
      navigator.clipboard.writeText(textToCopy).then(() => {
          // Show "Copied!" message
          const copiedMessage = document.getElementById(copiedId);
          if (copiedMessage) {
              copiedMessage.style.display = 'inline';
              setTimeout(() => {
                  copiedMessage.style.display = 'none';
              }, 2000); // Hide after 2 seconds
          }
      }).catch(err => {
          console.error('Failed to copy text: ', err);
      });
  } catch (err) {
      console.error('Error in copyCode: ', err);
  }
}
