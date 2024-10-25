import InputForm from "../Elements/Input";
import Button from "../Elements/Button";
const FormLogin = () =>{
    return (
        <form action="">
        <InputForm label="Email" type="email" placeholder="example@gmail.com" nama="email" />
        <InputForm label="Password" type="password" placeholder="********" nama="password" />
        <Button clasname="bg-blue-600 w-full">Login</Button>
        
          
        </form>

    );
}

export default FormLogin ;