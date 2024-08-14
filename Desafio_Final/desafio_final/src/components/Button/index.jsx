import './styles.css';

export function Button({ icon: Icon, text = null, onClick = () => {}, type = "button",}) {
    return (
      <button 
        type={type} 
        onClick={onClick} 
      >
        {Icon && <Icon style={{ marginRight: '8px' }} />} {/* Renderiza o ícone se for fornecido */}
        {text}
      </button>
    );
  }
  