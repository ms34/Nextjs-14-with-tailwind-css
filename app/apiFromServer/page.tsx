import { headers } from "next/headers";

export default async function page() {
  const res = await fetch("http://localhost:3000/api/whoAmI", 
  {
    method: 'GET', 
    headers: headers()
  }).then((res) => res.json());
  return (
    <div>
      <div>
        API Route From <b>Server</b>
      </div>
      <div>Name: {res?.name}</div>
    </div>
  );
}
