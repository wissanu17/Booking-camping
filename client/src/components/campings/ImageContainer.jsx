// rafce
const ImageContainer = ({ image, name }) => {
  return (
    <section className="h-[300px] md:h-[600px] mt-4">
      <img
        alt={name}
        className="w-full h-full object-cover rounded-md"
        src={image}
      />
    </section>
  );
};
export default ImageContainer;