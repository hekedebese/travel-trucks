import { Camper } from '@/types/camper';

type Props = {
  item: Camper;
};

const CamperItem = ({ item }: Props) => {
  return (
    <li>
      <p>{item.name}</p>
    </li>
  );
};

export default CamperItem;
