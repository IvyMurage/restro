import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import HeroSection from "./Components/HeroSection/HeroSection";
import LoginForm from "./Components/Login/LoginForm";
import RestaurantContainer from "./Components/RestaurantContainer/RestaurantContainer";
import SignUp from "./Components/Signup/Signup";
import "./index.css";

function App() {
  return (
    <div className="App">
      <Header />
      <HeroSection />
      {/* <SignUp />
      <LoginForm /> */}
      <RestaurantContainer />
      <Footer />
    </div>
  );
}

export default App;
