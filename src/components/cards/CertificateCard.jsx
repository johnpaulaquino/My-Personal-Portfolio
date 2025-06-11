const CertificateCards = ({ data }) => {
  return (
    <div className="my-[30px]">
      <section className="w-full h-auto flex flex-wrap flex-col">
        {/* a */}
        <div className="w-full h-auto flex">
          <div className="w-full h-auto relative  rounded-[10px] p-[30px] border-2 border-[#2E2E2E] bg-[#2e2e2e49]">
            <div className="absolute right-0 top-0 w-[100px] m-[20px]">
              <img src="/src//assets/certificate_logo.png" alt="Certificate Logo" />
            </div>

            <div className="flex w-full h-auto mt-[90px] flex-col items-center justify-center">
              <h1 className="text-[42px] font-[600] ">{data.title}</h1>
              <p className="text-[32px] text-[#f8b600f5]">{data.issuer}</p>
            </div>
            <div className="mt-[90px] flex justify-between">
              <p className="text-[18px] text-[#B0B0B0]">Issue Date: {data.issueDate}</p>
              <p className="text-[18px] text-[#B0B0B0]">credential Id: {data.credentialId}</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CertificateCards;
