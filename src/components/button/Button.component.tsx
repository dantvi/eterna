import './Button.styles.scss';

const BUTTON_TYPE_CLASSES = {
  primary: 'primary-button',
  inverted: 'inverted-button',
  google: 'google-sign-in',
};

interface ButtonProps {
  children: React.ReactNode;
  buttonType?: 'primary' | 'inverted';
  type?: 'button' | 'submit' | 'reset';
  onClick?: () => void;
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  children,
  buttonType = 'primary',
  ...otherProps
}) => {
  return (
    <button
      className={`button-container ${BUTTON_TYPE_CLASSES[buttonType]}`}
      {...otherProps}
    >
      {children}
    </button>
  );
};

export default Button;
