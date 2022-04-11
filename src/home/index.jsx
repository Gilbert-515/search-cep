import './styled.css';
import { useState } from 'react';
import { MdSearch } from 'react-icons/md';
import { Input } from '../components/Input';
import { api } from '../config/api';

export function Home() {
  const [cep, setCep] = useState();
  const [data, setData] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);

  async function sendForm(e) {
    e.preventDefault();
    setData(null);
    setErrorMsg(null);
    try {
      const { data } = await api.get(`/${ cep }/json`);
      data.cep !== undefined ? setData(data) : setErrorMsg('CEP invalido!');
    }
    catch {
      setErrorMsg('CEP invalido!');
    }
  }

  return(
    <div className='container'>
      <h1 className='title'> Buscar CEP </h1>
      <form onSubmit={ sendForm }>
        <Input 
        placeholder='Informe o CEP' 
        icon={ MdSearch } 
        type='tel'
        onChange={ e => setCep(e.target.value) } 
        onSubmit={ sendForm }
        required
        />
      </form>

      { data && <div className='container-result'>
            <h3>{ data.cep }</h3>
            <h4>{ data.localidade +'-'+ data.uf }</h4>
            <h4>{ data.bairro }</h4>
            <h4>{ data.logradouro }</h4>
        </div> 
      }
      { errorMsg && <div className='container-result'>
          <h2>{ errorMsg }</h2> 
        </div>
      }
    </div>
  );
}