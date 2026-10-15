import { getCampers } from '@/src/lib/api';
import CamperList from '@/components/CamperList/CamperList';

const Catalog = async () => {
  const campers = await getCampers();
  console.log(campers);

  return (
    <section>
      <h1>Camper List</h1>
      {campers?.campers?.length > 0 && <CamperList campers={campers.campers} />}
    </section>
  );
};

export default Catalog;
