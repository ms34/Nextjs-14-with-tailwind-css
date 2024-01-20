import { getServerSession } from "next-auth";
import WhoAmIButton from "./WhoAmIButton";

export default function Page() {
    const whoAmI = async () => {
        'use server'
        const session = await getServerSession()
        return session?.user?.name || 'Not Logged In'
    }
    return (
        <div>
            <WhoAmIButton whoAmIAction={whoAmI} />
            
        </div>
    );
}
