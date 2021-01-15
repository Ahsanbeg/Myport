
function aboutMe() {
  document.getElementById('aboutme').style.display = 'block';
  document.getElementById('port').style.display = 'none';
  document.getElementById('contacts').style.display = 'none';

}

function port(id) {
  document.getElementById('port').style.display = 'block';
  document.getElementById('aboutme').style.display = 'none';
  document.getElementById('contacts').style.display = 'none';

}

function contact() {
document.getElementById('aboutme').style.display = 'none';
  document.getElementById('port').style.display = 'none';
  document.getElementById('contacts').style.display = 'block';
}
