export default function DisplayContact(props:{data:inputType[]})
{
    return(
        
<>
  <div className="min-h-screen bg-gray-800 py-9 flex flex-col justify-center sm:py-12">
    <div className="relative py-3 sm:max-w-4xl mx-auto">
      <div className="absolute inset-0 bg-gradient-to-r from-indigo-700 to-purple-500 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
      <div className="text-white relative px-4 py-10 bg-indigo-400 shadow-lg sm:rounded-3xl sm:p-20">

        <table className="mx-auto w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 bg-white shadow-md rounded-md">
          <thead className="bg-indigo-700 text-white">
            <tr>
              <th className="py-2 px-4">First Name</th>
              <th className="py-2 px-4">Last Name</th>
              <th className="py-2 px-4">Gender</th>
              <th className="py-2 px-4">Father Name</th>
              <th className="py-2 px-4">Message</th>
              <th className="py-2 px-4">Country</th>
              <th className="py-2 px-4">Address</th>
              <th className="py-2 px-4">Phone</th>
              <th className="py-2 px-4">Subject</th>
            </tr>
          </thead>
          <tbody>
            {props.data.map((item, index) => (
              <tr key={index}>
                <td className="py-2 px-4 text-center">{item.firstname}</td>
                <td className="py-2 px-4 text-center">{item.lastname}</td>
                <td className="py-2 px-4 text-center">{item.gender}</td>
                <td className="py-2 px-4 text-center">{item.fname}</td>
                <td className="py-2 px-4 text-center">{item.message}</td>
                <td className="py-2 px-4 text-center">{item.country}</td>
                <td className="py-2 px-4 text-center">{item.address}</td>
                <td className="py-2 px-4 text-center">{item.phone}</td>
                <td className="py-2 px-4 text-center">{item.subject}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  </div>
</>

    )
}