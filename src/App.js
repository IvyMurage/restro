import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import HeroSection from "./Components/HeroSection/HeroSection";
import LoginForm from "./Components/Login/LoginForm";
import RestaurantContainer from "./Components/RestaurantContainer/RestaurantContainer";
import { RestaurantProvider } from "./Components/RestaurantContext";
import SignUp from "./Components/Signup/Signup";
import "./index.css";

function App() {
  return (
    <RestaurantProvider>
      <div className="App">
        <Header />

        <HeroSection />
        {/* <SignUp />
      <LoginForm /> */}
        <RestaurantContainer />
        <Footer />
      </div>
    </RestaurantProvider>
  );
}

export default App;
