import './styled.css';

export function Input({ placeholder, icon: Icon, onChange, onSubmit }) {
  return(
    <div className='container-input'>
      <input type="text" placeholder={ placeholder } onChange={ onChange }/>
      { Icon && <Icon onClick={ onSubmit }/> }
    </div>
  );
}