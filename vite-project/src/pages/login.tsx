import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { data, useNavigate } from "react-router-dom";
import Textbox from "../components/Textbox";

const Login = () => {
  const user = "";
  /*
  useForm()
   C’est un hook qui initialise la gestion du formulaire. Il fournit des méthodes pour :
   Enregistrer les champs (register),
   Gérer la soumission (handleSubmit),
   Suivre l’état du formulaire (formState).
  */
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();
  const submitHandler = async (data: any) => {
    console.log(data);
  };
  useEffect(() => {
    user && navigate("/dashboard");
  }, [user]);

  return (
    <div className="w-full min-h-screen flex items-center justify-center flex-col lg:flex-row bg-[#f3f4f6]">
      <div className="w-full md:w-auto flex gap-0 md:gap-40 flex-col md:flex-row items-center justify-center">
        {/*leftside*/}
        <div className="h-full w-full lg:w-2/3 flex flex-col items-center justify-center">
          <span className="flex gap-1 py-3 px-3 border rounded-full text-sm md:text-base bordergray-300 text-gray-600">
            Reactjs Task Manager
          </span>
          <p className="flex flex-col gap-0 md:gap-4 text-3xl md:text-4xl 2xl:text-5xl font-black text-center text-blue-700">
            <span>Cloud-Based</span>
            <span>Task Manager</span>
          </p>
          <div className="cell">
            <div className="circle rotate-in-up-left"></div>
          </div>
        </div>
        {/*rightside*/}
        <div className="w-full md:w-1/3 p-4 md:p-1 flex flex-col justify-center items-center">
          <form
            onSubmit={handleSubmit(submitHandler)}
            className="form-container w-full md:w-[400px] flex flex-col gap-y-8 bg-white px-10 pt-14  pb-14"
          >
            <div className="">
              <p className="text-blue-600 font-bold text-center text-3xl">
                Welcome back
              </p>
              <p className="text-center text-base text-gray-700">
                Keep all your credential safe
              </p>
            </div>

            <div className="flex flex-col gap-y-5">
              <Textbox></Textbox>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
export default Login;
