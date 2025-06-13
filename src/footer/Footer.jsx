const Footer = () => {
  return (
    <section className="flex items-center justify-center w-full bg-[#2e2e2e49] border-t-2 border-[#2E2E2E] h-[100px]">
      <p className="text-[#B0B0B0] text-[1.2rem]">
        Copyright
        <span className="text-[#f8b600f5]"> © </span> {new Date().getFullYear()}{' '}
        <span className="text-[#f8b600f5]">John Paul Aquino</span>
      </p>
    </section>
  );
};
export default Footer;
