import './styles.css';

export function ButtonIcon({ icon: Icon, onClick = () => {}, type = "button",}) {
    return (
      <button className='button-icon'
        type={type} 
        onClick={onClick} 
      >
        {Icon && <Icon style={{ marginRight: '8px' }} />} {/* Renderiza o ícone se for fornecido */}
      </button>
    );
  }
  