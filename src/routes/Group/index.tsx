import { useParams } from "react-router-dom";

const Group = () => {
  const params = useParams();
  const { number } = params;

  return <div>Group: {number}</div>;
};

export default Group;
