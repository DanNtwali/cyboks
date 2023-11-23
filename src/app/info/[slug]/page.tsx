import Sidebar from '@/components/Dashboard/sidebar';
import  data  from '../../../data/data.json'
import Navbar from '@/components/Dashboard/navbar';


export default async function Blogservice({params}: any) {
  const sservice = data
  const service = sservice.services && sservice.services.length > 0
  ? sservice.services.find((serv: any) => serv.slug === params.slug)
  : null;
  
  return (
    <main className="sm:flex sm:flex-row w-full h-screen bg-fixed bg-center bg-cover bg-[url('../assets/images/signup_bg.png')]">
          <div>
          <Sidebar/>
          <Navbar/>
          </div>
        <div className="p-4 sm:ml-64 p-2 mt-16 ">
    <div className="container mx-auto py-8 h-fit bg-white rounded-lg sm:rounded-lg px-8">
      <h1 className="text-3xl text-violet-400 font-bold mb-4">{service?.title}</h1>
      <div className="grid grid-cols-2 gap-4">
        <div className="font-bold">DPO Name:</div>
        <div>{service?.dpoName}</div>
        <div className="font-bold">DPO Phone:</div>
        <div>{service?.dpoPhone}</div>
        <div className="font-bold">DPO Email:</div>
        <div>{service?.dpoEmail}</div>
        <div className="font-bold">Document Status:</div>
        <div>{service?.docStatus}</div>
        <div className="font-bold">Document 1:</div>
        <div>{service?.doc1}</div>
        <div className="font-bold">Document 2:</div>
        <div>{service?.doc2}</div>
        <div className="font-bold">Document 3:</div>
        <div>{service?.doc3}</div>
        <div className="font-bold">Document 4:</div>
        <div>{service?.doc4}</div>
      </div>
    </div>
    </div>
       </main>
  );
}

export async function getStaticPaths() {
  const paths = [
    { params: { slug: 'chuk' } },
    { params: { slug: 'norrsken' } },
    { params: { slug: 'skol_Ltd' } },
    { params: { slug: 'service4' } },
  ];
  return { paths, fallback: false };
}
