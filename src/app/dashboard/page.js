import Default from "../components/dashboard/default";
import { Certify } from "../components/dashboard/certify";

const Home = async () => {
  return (
    <>
      <Certify>
        <Default />
      </Certify>
    </>
  );
};

export default Home;
