import './styles.css';

export function ButtonText({ icon: Icon, text = null, onClick = () => {}, type = "button",}) {
    return (
      <button className='button-text'
        type={type} 
        onClick={onClick} 
      >
        {Icon && <Icon style={{ marginRight: '8px' }} />} {/* Renderiza o ícone se for fornecido */}
        {text}
      </button>
    );
  }
  