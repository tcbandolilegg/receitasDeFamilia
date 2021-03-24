
function doFetch() {
  fetch('./backEnd/src/modal/users.json')
    .then(res => {
      res.json().then(data => {

        showData(data);
      });
    })
    .catch(error => {
      console.log('Erro na requisição');
    });
}