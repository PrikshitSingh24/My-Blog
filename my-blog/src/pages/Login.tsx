import LoginCard from "@/components/login components/loginCard";
import { useSession } from "next-auth/react";
import { RouteMatcher } from "next/dist/server/future/route-matchers/route-matcher";
import { useRouter } from "next/router";


export default function LoginPage(){
    const router=useRouter();
    const {data:session}=useSession();
    if(session){
        router.push("/Home");
        return null;
    }
    return(
        <div className="relative flex justify-center item-center bg-amber-400 h-screen">   
       <LoginCard></LoginCard>
        </div>
    );
}


