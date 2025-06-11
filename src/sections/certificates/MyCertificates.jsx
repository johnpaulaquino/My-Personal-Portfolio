import { useState } from 'react';

const MyCertificates = () => {
  // This data is for temporary and for testing only
  const [getCertificate, setCertificate] = useState([
    [
      {
        id: 1,
        title: 'Full-Stack Web Development',
        issuer: 'Coursera (offered by Meta)',
        issueDate: '2024-02-15',
        expirationDate: null,
        credentialId: 'ABC123FULLSTACK',
        credentialUrl: 'https://www.coursera.org/verify/ABC123FULLSTACK',
      },
      {
        id: 2,
        title: 'AWS Certified Solutions Architect – Associate',
        issuer: 'Amazon Web Services',
        issueDate: '2023-09-10',
        expirationDate: '2026-09-10',
        credentialId: 'AWS-SA-23456',
        credentialUrl:
          'https://aws.amazon.com/certification/certified-solutions-architect-associate/',
      },
      {
        id: 3,
        title: 'Python for Everybody',
        issuer: 'Coursera (offered by University of Michigan)',
        issueDate: '2022-06-01',
        expirationDate: null,
        credentialId: 'PY4E-78910',
        credentialUrl: 'https://www.coursera.org/verify/PY4E-78910',
      },
      {
        id: 4,
        title: 'Introduction to Machine Learning',
        issuer: 'edX (offered by MIT)',
        issueDate: '2024-01-20',
        expirationDate: null,
        credentialId: 'MLMIT2024',
        credentialUrl: 'https://credentials.edx.org/verify/MLMIT2024',
      },
      {
        id: 5,
        title: 'Responsive Web Design',
        issuer: 'freeCodeCamp',
        issueDate: '2021-11-05',
        expirationDate: null,
        credentialId: 'FCC-RWD-56789',
        credentialUrl: 'https://freecodecamp.org/certification/username/responsive-web-design',
      },
    ],
  ]);

  return (
    <div className="max-w[1500px] mx-auto">
      <section className="mx-[90px] my-[30px] h-auto">
        <h1 className="text-[#F8B500] ">My Certificates</h1>
        <div className=""></div>
      </section>
    </div>
  );
};

export default MyCertificates;
