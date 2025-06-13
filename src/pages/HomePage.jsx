const HomePage = () => {
  return (
    <>
      <Section id="hero" content={<Hero />} />

      <Section id="about" content={<About />} />

      <Section id="featureprojects" content={<FeaturedProjects />} />

      <Section id="tech" content={<TechStack />} />

      <Section id="certificates" content={<MyCertificates />} />

      <Section id="testimonials" content={<Reviews />} />

      <Section id="getintouch" content={<GetInTouch />} />
    </>
  );
};
export default HomePage;
