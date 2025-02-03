import LoginForm from "../components/LoginForm";
import Footer from "../components/Footer";

function LoginPage() {
  return (
    <div className="page-container">
      <main className="main-content-login">
        <LoginForm />
      </main>
      <Footer />
    </div>
  );
}

export default LoginPage;
