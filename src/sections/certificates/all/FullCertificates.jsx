import { useState } from 'react';
import CertificateCards from '../../components/cards/CertificateCard';
import DataNotFound from '../../components/data_not_found/DataNotFound';
import Pagination from '../../../components/pagination/Pagination';
const MyCertificates = () => {
  // This data is for temporary and for testing only
  const [getCertificate, setCertificate] = useState([
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
  ]);
  const [sectionTitle] = useState('My Certificates');

  if (getCertificate.length > 0)
    return (
      <div className="mx-[90px] my-[30px] h-auto">
        <h1 className="text-[#F8B500] text-[3rem] font-[600] my-[30px]">{sectionTitle}</h1>
        <div className="my-[30px]">
          {getCertificate.map((element) => (
            <CertificateCards key={element.id} data={element} />
          ))}
          <Pagination />
        </div>
      </div>
    );

  return <DataNotFound title={sectionTitle} message={'No Certificates'} />;
};

export default MyCertificates;
