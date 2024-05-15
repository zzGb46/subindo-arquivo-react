import React from 'react'

const TemplateExpressions = () => {

    //4 criando uma variável
    const nome = "ele"

    //5 objeto
    const dados={
      idade: 34,
      profissao: "Professora"
    }
  return (
    <div>
    <p>A soma é {4+9}</p>
    <h3>Boas Vinda {nome}</h3>
    <p>Vi aqui que você tem {dados.idade} anos é {dados.profissao}</p>
    </div>
  )
}

export default TemplateExpressions