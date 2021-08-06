import SignUpForm from "../../components/User/SignUpForm/SignUpForm.jsx";
import LoginForm from "../../components/User/LogInForm/LogInForm.jsx";

const AuthPage = ({setUser}) => {
  return (
    <main>
      <h1>Video Game Lists</h1>
      <SignUpForm setUser={setUser}/>
      <LoginForm setUser={setUser}/>
    </main>
  );
};

export default AuthPage;
