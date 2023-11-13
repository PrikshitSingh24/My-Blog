
import { useSession } from "next-auth/react";
import { RouteMatcher } from "next/dist/server/future/route-matchers/route-matcher";
import { useRouter } from "next/router";
import LoginCard from "../components/loginComponents/loginCard";


export default function LoginPage(){
    const router=useRouter();
    const {data:session}=useSession();
    if(session && session.user){
        router.push("/Home");
    }
    return(
        <div className="relative flex justify-center item-center bg-Beige h-screen overflow-hidden overflow-x-hidden">   
       <LoginCard></LoginCard>
        </div>
    );
}


