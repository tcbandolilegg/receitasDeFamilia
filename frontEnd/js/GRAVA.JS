
function mergeCidadesEstados() {
  console.log(
    '\npesquisando a UF de estados e montando o array Cidades com UF dos estados'
  );
  globalCidades.forEach((tempRegister3) => {
    const findEstado = globalEstados.find(
      (findEstado) => findEstado.ID === tempRegister3.Estado
    );
    globalCidadesEstados.push({
      ID: tempRegister3.ID,
      Nome: tempRegister3.Nome,
      UF: findEstado.Sigla,
    });
  });

  jsonEstates(tamEstados);
}

function jsonEstates(tamEstados) {
  console.log('montando JSON estado');
  globalEstados.forEach((tempEstado) => {
    let writeEstado = globalCidadesEstados.filter(
      (cidades) => cidades.UF === tempEstado.Sigla
    );

    fs.writeFile(
      `${tempEstado.Sigla}.json`,
      JSON.stringify(writeEstado, null, 2)
    );

    globalEstadosQTDCidades.push({
      UF: tempEstado.Sigla,
      NumCities: writeEstado.length,
    });
  });
}

