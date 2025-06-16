import certLogo from '/src/assets/certificate_logo.png';

const CertificateCards = ({ data }) => {
  return (
    <div className="my-[30px]">
      <section className="w-full h-auto flex flex-wrap flex-col">
        {/* a */}
        <div className="w-full h-auto flex">
          <div className="w-full h-auto relative rounded-[10px] p-[30px] border-2 border-[#2E2E2E] bg-[#2e2e2e49]">
            <div
              className="absolute right-0 top-0 w-[100px] m-[20px] 
            max-sm:w-[75px]"
            >
              <img src={`${certLogo}`} loading="lazy" alt="Certificate Logo" />
            </div>

            <div
              className="flex w-full h-auto mt-[90px] flex-col text-center
            max-sm:mt-[65px] "
            >
              <h1
                className="text-[42px] font-[600]
              max-sm:text-[1.3rem] "
              >
                {data.title}
              </h1>
              <p
                className="text-[32px] text-[#f8b600f5]
              max-sm:text-[1rem]"
              >
                {data.issuer}
              </p>
            </div>
            <div className="mt-[30px] flex justify-between">
              <p
                className="text-[18px] text-[#B0B0B0] 
              max-sm:text-[0.5rem]"
              >
                Date Issued: {data.issueDate}
              </p>
              <p
                className="text-[18px] text-[#B0B0B0]
              max-sm:text-[0.5rem]"
              >
                Credential ID: {data.credentialId}
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CertificateCards;
