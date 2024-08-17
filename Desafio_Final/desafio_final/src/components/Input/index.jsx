import './styles.css';

export function Input({ title = null, icon: Icon, placeholder = null, type = "text" }) {
    return (
        <div className="input-container">
            {title && <label className="input-label" htmlFor={title}>{title}</label>}
            <div className="input-wrapper">
                {Icon && <Icon className="input-icon" />}
                <input 
                    id={title} 
                    type={type} 
                    placeholder={placeholder} 
                    className="input-field" 
                />
            </div>
        </div>
    );
}
