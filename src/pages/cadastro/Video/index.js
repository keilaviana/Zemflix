import React from 'react'
import PageDafault from '../../../components/PageDefault'
import { Link } from 'react-router-dom'

function CadastroVideo(){
    return(
      <PageDafault>
        <h1>Página de Cadastro de Video </h1>

        <Link to='/cadastro/categoria'>
           Cadastro Categoria
        </Link>
      </PageDafault>
    )
  }

  export default CadastroVideo