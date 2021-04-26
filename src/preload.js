window.addEventListener('DOMContentLoaded', () => {
  document.getElementById('chk-tab').addEventListener('click', () => {
    if(document.getElementById('chk-tab').checked) {
      document.getElementById('text-from').classList.add(['displaynone']);
      document.querySelector('.fa-toggle-off').style.display = 'none';
      document.querySelector('.fa-toggle-on').style.display = 'inline';
    } else {
      document.getElementById('text-from').classList.remove('displaynone');
      document.querySelector('.fa-toggle-off').style.display = 'inline';
      document.querySelector('.fa-toggle-on').style.display = 'none';
    }
  });

  document.getElementById('btn-clean').addEventListener('click', () => {
    document.getElementById('text-entry').value = '';
  });

  document.getElementById('btn-clean-all').addEventListener('click', () => {
    document.getElementById('text-entry').value = '';
    document.getElementById('text-from').value = '';
    document.getElementById('text-to').value = '';
  });

  document.getElementById('btn-replace').addEventListener('click', () => {
    if(document.getElementById('chk-tab').checked) {
      const entry = document.getElementById('text-entry').value;
      const to = document.getElementById('text-to').value;
      document.getElementById('text-entry').value = entry.replace(/\t/gi, to);
      return;
    }

    const entry = document.getElementById('text-entry').value;
    const from = document.getElementById('text-from').value.replace(/\r/g, '');
    const to = document.getElementById('text-to').value;
    const regex = new RegExp(from, 'g');
    document.getElementById('text-entry').value = entry.replace(regex, to);
  });

  document.getElementById('btn-copy').addEventListener('click', () => {
    const msg = document.getElementById('msg');
    document.getElementById('text-entry').select();

    if(document.execCommand('copy')) {
      msg.innerText('Copiado!');
      msg.classList.add(['success']);
      msg.classList.remove(['error', 'displaynone']);
    } else {
      msg.innerText('Erro ao tentar copiar o conteúdo!');
      msg.classList.add(['error']);
      msg.classList.remove(['success', 'displaynone']);
    }
    setTimeout(() => {
      msg.innerText = '';
      msg.classList.remove(['info', 'error']);
      msg.classList.add(['displaynone']);
    }, 2000);
  });
});
