import InputForm from "../Elements/Input";
import Button from "../Elements/Button";
const FormRegister = () =>{
    return (
        <form action="">
        <InputForm label="FullName" type="text" placeholder="Insert your name.." name="fullname" />
        <InputForm label="Email" type="email" placeholder="example@gmail.com" name="email" />
        <InputForm label="Password" type="password" placeholder="********" name="password" />
        <InputForm label="ConfirmPassword" type="password" placeholder="********" name="confirmpassword" />
        <Button clasname="bg-blue-600 w-full">Register</Button>
        
          
        </form>

    );
}

export default FormRegister ;