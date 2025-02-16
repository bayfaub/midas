const Logo: React.FC<{ image?: string }> = ({ image }) => {
  return (
    <div>
      {image ? (
        <img src={image} alt="Image" />
      ) : (
        <h1>Midas Property Management Solutions</h1>
      )}
    </div>
  );
};

export default Logo;