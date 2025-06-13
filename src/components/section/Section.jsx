const Section = ({ id, content }) => {
  return (
    <section id={id} className="max-w-[1500px] mx-auto my-[30px]">
      {content}
    </section>
  );
};
export default Section;
