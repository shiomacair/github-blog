function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
  console.log("JavaScriptが正しく動作しました");
}

function copyCode(button) {
  const codeBlock = button.nextElementSibling; // <pre>タグ
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
