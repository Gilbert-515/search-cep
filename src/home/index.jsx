import './styled.css';
import { useState } from 'react';
import { MdSearch } from 'react-icons/md';
import { Input } from '../components/Input';

export function Home() {
  const [cep, setCep] = useState();

  function sendForm(e) {
    e.preventDefault();
    console.log(cep);
  }

  return(
    <div className='container'>
      <h1 className='title'> Buscar CEP </h1>
      <form onSubmit={ sendForm }>
        <Input 
        placeholder='Informe o CEP' 
        icon={ MdSearch } 
        onChange={ e => setCep(e.target.value) } 
        onSubmit={ sendForm }
        />
      </form>
    </div>
  );
}