import Default from "../../components/dashboard/default";
import { Certify } from "../../components/dashboard/certify";

const Home = async () => {
  return (
    <>
      <Certify>
        <div className="fixed w-screen">
          <Default />
        </div>
      </Certify>
    </>
  );
};

export default Home;