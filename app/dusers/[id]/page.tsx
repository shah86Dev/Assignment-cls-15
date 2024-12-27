import Link from "next/link";

const DynamicUsers = async ({ params }: { params: { id: string } }) => {
  const url = await fetch(
    `https://jsonplaceholder.typicode.com/users/${params.id}`
  );
  const response = await url.json();
  console.log(response);
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br  from-gray-100 via-gray-300 to-gray-500">
        <div className="p-8 bg-white rounded-lg shadow-lg">
      <h1 className="text-3xl font-bold text-center text-violet-500">Users Details</h1>
      <div className="space-y-4 text-lg">
        <div>
            <span className="font-semibold">User ID:</span> {response.id}
            </div>
      
            <div>
                <span className="font-semibold">Name:</span> {response.name}
                <br />
                <span className="font-semibold">UserName:</span> {response.username}
                <br />
                <span className="font-semibold">Email:</span> {response.email}
                <br />
                <span className="font-semibold">Phone:</span> {response.phone}
                <br />
                <span className="font-semibold">Website:</span> {response.website}
                <br />
                <span className="font-semibold">Company:</span> {response.company.name}
                <br />
                <span className="font-semibold">Catch Phrase:</span> {response.company.catchPhrase}
                <br />
                <span className="font-semibold">BS:</span> {response.company.bs}
                <br />
                <span className="font-semibold">Address:</span> {response.address.street}
                <br />
                <span className="font-semibold">Suite:</span> {response.address.suite}
                <br />
                <span className="font-semibold">City:</span> {response.address.city}
                

                </div>
     
      <Link href="/users" className="text-blue-500">Back to Users</Link>
        </div> 
    </div>  
    </div>
  );
};
export default DynamicUsers;