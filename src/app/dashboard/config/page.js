import Default from "../../components/dashboard/default";
import { Input } from "@/app/components/dashboard/config/inputData";
import { Certify } from "../../components/dashboard/certify";


const Home = async () => {
  return (
    <>
      <Certify>
        <Default />
        <Input />
      </Certify>
    </>
  );
};

export default Home;
