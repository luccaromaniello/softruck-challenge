interface CardProps {
  children?: React.ReactNode;
}

const Card = ({ children }: CardProps) => {
  return <div className="card">{children}</div>;
};

export default Card;
