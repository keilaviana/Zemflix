import React from 'react'
import PageDafault from '../../../components/PageDefault'
import { Link } from 'react-router-dom'

function CadastroCategoria(){
    return(
      <PageDafault>
        <h1>Página de Cadastro de Categoria </h1>




        <Link to='/'>
            Ir para home
        </Link>
      </PageDafault>
    )
  }

  export default CadastroCategoria