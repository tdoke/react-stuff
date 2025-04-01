interface ButtonProps {
  label: string;
  onClick?: () => void;
}

export const Button = ({ label, onClick }: ButtonProps) => {
  return (
    <button onClick={onClick} className="button">
      {label}
    </button>
  );
}; 