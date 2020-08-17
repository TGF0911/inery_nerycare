import React from 'react';
import { RiErrorWarningLine } from 'react-icons/ri'

import Input from '../../components/Input/index';
import './styles.css'
import SideBar from '../../components/SideBar';
import PageHeader from '../../components/PageHeader';
import pacientImg from '../../assets/pacient-img.svg'
//Colcoar um campo para foto do médico.
//Especialidade podia ser um Select
//Genero é uma checkbox
function DoctorForm() {
  return (

    
    <div id="page-doctorform" className="container">
       <PageHeader 
      src= {pacientImg}
      alt= "Paciente"
      title="Cadastro de Paciente"
      />
    
  
      <main>
        <form>
          <fieldset>
            <legend>Dados do Médico</legend>
            <span>Hospital Albert Einstein</span>
            <Input
              name="name"
              label="Nome Completo:"
            />
            <Input
              name="crm"
              label="CRM:"
            />
            <Input
              name="email"
              label="Email:"
            />
            <Input
              name="fone"
              label="Telefone:"
            />
            <Input
              name="especialidade"
              label="Especialidade:"
            />

          </fieldset>
          <footer>
            <p>
              <RiErrorWarningLine size={40} />
          Importante!<br />
          Preencha todos os dados.
          </p>
            <button  type="submit" >Cadastrar</button>
          </footer>

        </form>
      </main>
    </div>
  )
}

export default DoctorForm;