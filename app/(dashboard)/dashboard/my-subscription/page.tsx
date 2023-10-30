import Container from "@/components/Container";
import Profile from "@/components/dashboard/Profile";
import TransactionHistory from "@/components/dashboard/TransactionHistory";
import Heading from "@/utils/Heading";
import { RiFileListFill, RiPrinterFill } from "react-icons/ri";

const MySubscription = () => {
  return (
    <div>
      <Heading
        title="MySubscription"
        description=" MySubscription description and description for the MySubscription component of the application"
        kyeword="web developer " // you can customize your key
      />
      <Container>
        <div className="lg:grid py-7 xl:py-8 grid-cols-12  lg:space-y-0 space-y-8 lg:gap-x-8">
          <div className="col-span-12 lg:col-span-4">
            <Profile />
          </div>
          <div className="col-span-12 bg-white rounded-[20px]  lg:col-span-8">
            <div className="flex px-5 py-4  border-b border-skin-black-50 items-center justify-between">
              <h2 className="text-xl md:text-2xl font-inter text-skin-black-900 font-bold">
                My Subscription
              </h2>
              <div className=" px-1 inline-flex  gap-x-2 items-center h-[34px] rounded-[6px] border border-skin-black-50">
                <button>
                  <RiFileListFill className="text-2xl  b   text-skin-black-500" />
                </button>
                <div className=" w-[1px] bg-skin-black-50" />
                <button>
                  <RiPrinterFill className="text-2xl text-skin-black-500" />
                </button>
              </div>
            </div>
            <div className=" px-5 py-4">
              <div className="flex items-center justify-between">
                <div className=" max-w-[243px]">
                  <h3 className="inline-flex text-lg  font-inter text-skin-black-900 font-bold items-center">
                    John Doe
                    <span className="text-sm font-normal text-skin-black-900">
                      (DBDQ7V3C)
                    </span>
                  </h3>
                  <p className="text-sm font-medium text-skin-black-700">
                    4517 Washington Ave. Manchester, Kentucky 39495
                  </p>
                </div>
                <div>
                  <div className="flex justify-end">
                    <span className="bg-skin-green-600 rounded-[4px] text-white py-[2px] px-[8px] text-xs font-semibold font-inter">
                      Paid
                    </span>
                  </div>
                  <div className="pt-2">
                    <h2 className="text-sm font-inter text-right font-semibold text-skin-black-700">
                      2023/001540
                    </h2>
                    <h4 className="text-sm font-inter text-right text-skin-black-700 font-normal ">
                      22/10/2023
                    </h4>
                  </div>
                </div>
              </div>
            </div>
            {/* ============ products list ========== */}
            <div className=" px-5 py-4 w-full overflow-scroll sm:overflow-auto ">
              <table className="table-auto text-left min-w-max w-full">
                <thead>
                  <tr className=" h-[45px]">
                    <th className="border rounded-tl-[12px] w-8 text-center  border-skin-black-50">
                      <p className=" w-[55px] text-sm font-semibold text-skin-black-600 font-inter">
                        #
                      </p>
                    </th>
                    <th className="border border-skin-black-50">
                      <p className="pr-2   text-sm font-semibold text-skin-black-600 font-inter">
                        Item
                      </p>
                    </th>
                    <th className="border border-skin-black-50">
                      <p className="pl-2   text-sm font-semibold text-skin-black-600 font-inter">
                        Sub Total
                      </p>
                    </th>
                    <th className="border text-right border-skin-black-50">
                      <p className="pr-2  text-sm font-semibold text-skin-black-600 font-inter">
                        Tax
                      </p>
                    </th>
                    <th className="border text-right border-skin-black-50">
                      <p className="pr-2   text-sm font-semibold text-skin-black-600 font-inter">
                        Amount
                      </p>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {/* products */}
                  <tr>
                    <td className=" border text-center border-skin-black-50">
                      <p className="text-sm  pl-2 font-medium text-skin-black-900">
                        1
                      </p>
                    </td>
                    <td className=" border w-[300px] text-center border-skin-black-50">
                      <p className="text-sm text-left  py-4 pl-2 font-medium text-skin-black-900">
                        Fee - Alumni Membership (Lifetime) 30 Years: 16 Oct 2023
                        - 15 Oct 2053
                      </p>
                    </td>
                    <td className=" border text-center border-skin-black-50">
                      <p className="text-sm  pl-2 font-medium text-skin-black-900">
                        MYR 50.00
                      </p>
                    </td>
                    <td className=" border text-center border-skin-black-50">
                      <p className="text-sm  pl-2 font-medium text-skin-black-900">
                        MYR 3.00
                      </p>
                      <p className="text-sm  pl-2 font-medium text-skin-black-900">
                        6.00% (SST)
                      </p>
                    </td>
                    <td className=" border text-center border-skin-black-50">
                      <p className="text-sm  pl-2 font-medium text-skin-black-900">
                        MYR 53.00
                      </p>
                    </td>
                  </tr>
                  {/* sub total */}
                  <tr className=" h-[44px]">
                    <td className=" border text-center border-skin-black-50">
                      <p className="text-sm  pl-2 font-medium text-skin-black-900"></p>
                    </td>
                    <td className=" border text-center border-skin-black-50">
                      <p className="text-sm  pl-2 font-medium text-skin-black-900"></p>
                    </td>
                    <td className=" border text-center border-skin-black-50">
                      <p className="text-sm  pl-2 font-medium text-skin-black-900"></p>
                    </td>
                    <td className=" border text-center border-skin-black-50">
                      <p className="text-sm  pl-2 font-medium text-skin-black-900">
                        Sub Total
                      </p>
                    </td>
                    <td className=" border text-center border-skin-black-50">
                      <p className="text-sm  pl-2 font-medium text-skin-black-900">
                        MYR 50.00
                      </p>
                    </td>
                  </tr>
                  {/* tax */}
                  <tr className=" h-[44px]">
                    <td className=" border text-center border-skin-black-50">
                      <p className="text-sm  pl-2 font-medium text-skin-black-900"></p>
                    </td>
                    <td className=" border text-center border-skin-black-50">
                      <p className="text-sm  pl-2 font-medium text-skin-black-900"></p>
                    </td>
                    <td className=" border text-center border-skin-black-50">
                      <p className="text-sm  pl-2 font-medium text-skin-black-900"></p>
                    </td>
                    <td className=" border text-center border-skin-black-50">
                      <p className="text-sm  pl-2 font-medium text-skin-black-900">
                        Tax
                      </p>
                    </td>
                    <td className=" border text-center border-skin-black-50">
                      <p className="text-sm  pl-2 font-medium text-skin-black-900">
                        MYR 3.00
                      </p>
                    </td>
                  </tr>
                  {/* total */}
                  <tr className=" h-[44px]">
                    <td className=" border text-center border-skin-black-50">
                      <p className="text-sm  pl-2 font-medium text-skin-black-900"></p>
                    </td>
                    <td className=" border text-center border-skin-black-50">
                      <p className="text-sm  pl-2 font-medium text-skin-black-900"></p>
                    </td>
                    <td className=" border text-center border-skin-black-50">
                      <p className="text-sm  pl-2 font-medium text-skin-black-900"></p>
                    </td>
                    <td className=" border text-center border-skin-black-50">
                      <p className="text-sm  pl-2 font-medium text-skin-black-900">
                        Total
                      </p>
                    </td>
                    <td className=" border text-center border-skin-black-50">
                      <p className="text-sm  pl-2 font-medium text-skin-black-900">
                        MYR 53.00
                      </p>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <TransactionHistory />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default MySubscription;
