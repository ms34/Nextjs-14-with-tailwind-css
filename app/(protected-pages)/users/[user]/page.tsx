
import { PageProps } from "@/.next/types/app/layout"
import { redirect } from "next/navigation"

const User = ({params, searchParams}: PageProps) => {
    if(params?.user === '2'){
        redirect('/login')
    }
  return (
    <div>{params?.user}</div>
  )
}

export default User