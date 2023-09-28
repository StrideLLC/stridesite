import Default from "../../components/dashboard/default";
import { Input } from "@/app/components/dashboard/config/inputData";
import { Certify } from "../../components/dashboard/certify";
import { getCurrentUser } from "@/lib/session";

const Home = async () => {
  const user = await getCurrentUser();
  return (
    <>
      <Certify>
        <div className="w-screen">
          <Default />
        </div>
          <Input currentUser={user}/>
      </Certify>
    </>
  );
};

export default Home;
