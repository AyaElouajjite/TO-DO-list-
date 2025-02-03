import Task from "./Task";
import { useForm } from "react-hook-form";
type Props = {
  name?: string;
  age?: number;
};

const Login = (props: Props) => {
  return (
    <div>
      Login {props.name} {props.age}
      <Task></Task>
    </div>
  );
};
export default Login;
