import './styled.css';

export function Input({ placeholder, type, required, icon: Icon, onChange, onSubmit }) {
  return(
    <div className='container-input'>
      <input type={ type } placeholder={ placeholder } onChange={ onChange } required={ required }/>
      { Icon && <Icon onClick={ onSubmit }/> }
    </div>
  );
}