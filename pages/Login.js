import Image from "next/image";
import { signIn } from "next-auth/react";

const Login = () => {
  return (
    <div className="grid place-items-center ">
      <Image
        height={300}
        width={300}
        objectFit={"contain"}
        alt={"profile-pic"}
        src={"https://links.papareact.com/t4i"}
      />
      <h3 className="tex-center mt-5 bg-blue-400 rounded-full text-white cursor-pointer p-3" onClick={()=>signIn()}>
        Login with facebook
      </h3>
    </div>
  );
};

export default Login;
