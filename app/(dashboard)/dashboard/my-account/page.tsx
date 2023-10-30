import Container from "@/components/Container";
import Profile from "@/components/dashboard/Profile";
import Heading from "@/utils/Heading";

const MyAccount = () => {
  return (
    <div>
      <Heading
        title="MyAccount"
        description=" MyAccount description and description for the MyAccount component of the application"
        kyeword="web developer " // you can customize your key
      />
      <Container>
        <div className="grid py-7 xl:py-8 grid-cols-12 gap-y-10 xl:gap-x-10">
          <div className="col-span-12 xl:col-span-4">
            <Profile />
          </div>
          <div className="col-span-12 bg-white rounded-[20px] p-4  xl:col-span-8">
            2
          </div>
        </div>
      </Container>
    </div>
  );
};

export default MyAccount;
