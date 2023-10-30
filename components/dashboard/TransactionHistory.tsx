const TransactionHistory = () => {
  return (
    <div className="w-full  px-5 overflow-hidden py-10 lg:pt-24">
      <table className="w-full  min-w-fit table-auto text-left">
        <thead>
          <tr className="h-[51px]">
            <th className=" bg-skin-blue-50 pl-2 rounded-tl-[12px] border-b border-skin-black-50">
              <p className="text-base  w-[172px] text-skin-blue-300 font-semibold font-inter">
                Transaction History
              </p>
            </th>
            <th className=" bg-skin-blue-50 w-full rounded-tr-[12px] border-b border-skin-black-50"></th>
          </tr>
        </thead>
        <tbody>
          <tr className=" h-[49px]">
            <td className="border border-skin-black-50">
              <p className="text-sm pl-2 font-semibold font-inter text-skin-black-600">
                Transaction No.
              </p>
            </td>
            <td className="border border-skin-black-50">
              <p className="text-sm pl-2 font-semibold font-inter text-skin-black-600">
                BY9PKZ
              </p>
            </td>
          </tr>
          <tr className=" h-[49px]">
            <td className="border border-skin-black-50">
              <p className="text-sm pl-2 font-semibold font-inter text-skin-black-600">
                Message
              </p>
            </td>
            <td className="border border-skin-black-50">
              <p className="text-sm pl-2 font-semibold font-inter text-skin-black-600"></p>
            </td>
          </tr>
          <tr className=" h-[49px]">
            <td className="border rounded-br-[12px] border-skin-black-50">
              <p className="text-sm pl-2 font-semibold font-inter text-skin-black-600">
                Status
              </p>
            </td>
            <td className="border border-skin-black-50">
              <p className="text-sm pl-2 font-medium font-inter text-skin-green-600">
                Success
              </p>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default TransactionHistory;
