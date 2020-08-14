import React from 'react';
import { RiErrorWarningLine } from 'react-icons/ri';
import Input from '../../components/Input';
import PageHeader from '../../components/PageHeader';
import pacientImg from '../../assets/pacient-img.svg'

import './styles.css'

//Genero - checkbox
//Select - Orgão
//Hospital vem com o id da pessoa que está cadastrando.
//Colocar idade e data de nascimento um do lado do outro
//Campo de upload de fotos

function PacientForm() {
  return (
    <div id="page-pacient-form" className="container">
      <PageHeader 
      src= {pacientImg}
      alt= "Paciente"
      title="Cadastro de Paciente"
      />
      <form>
        <main>
          <fieldset>
            <legend>Dados do Paciente</legend>
          <Input
            name='name'
            label='Nome Completo:'
            />
          <Input
            name='age'
            label='Idade:'
            />
          <Input
            name='adress'
            label='Endereço:'
            />
          <Input
            name='email'
            label='Email:'
            type="email"
            />
          <Input
            name='fone'
            label='Telefone:'
            />
          <Input
            name='date'
            label='Data de Nascimento:'
            type='date'
            />
            </fieldset>
          <footer>
            <p>
              <RiErrorWarningLine size={40} />
          Importante!<br />
          Preencha todos os dados.
          </p>
            <button type="submit" >Cadastrar</button>
          </footer>
        </main>
      </form>
    </div>
  )
}

export default PacientForm;