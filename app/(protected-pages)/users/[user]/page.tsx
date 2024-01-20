import { redirect } from "next/navigation";

const User = ({ params, searchParams }: any) => {
  if (params?.user === "2") {
    redirect("/login");
  }
  return <div>{params?.user}</div>;
};

export default User;
