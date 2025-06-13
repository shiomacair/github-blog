function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function copyCode(button) {
  const codeBlock = button.nextElementSibling;
  const codeText = codeBlock.innerText;
  
  navigator.clipboard.writeText(codeText).then(() => {
    button.innerText = "Copied!";
    setTimeout(() => {
      button.innerText = "Copy";
    }, 1500);
  }).catch(err => {
    console.error("コピーに失敗しました:", err);
  });
}

