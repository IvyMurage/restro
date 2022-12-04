import { Route, Routes } from "react-router-dom";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import HeroSection from "./Components/HeroSection/HeroSection";
import LoginForm from "./Components/Login/LoginForm";
import RestaurantContainer from "./Components/RestaurantContainer/RestaurantContainer";
import { RestaurantProvider } from "./Components/RestaurantContext";
import RestaurantPage from "./Components/RestaurantPage/RestaurantPage";
import SignUp from "./Components/Signup/Signup";
import "./index.css";

function App() {

  // const [user, setUser] = useState(null);

  // useEffect(() => {
  //   // auto-login
  //   fetch("/me").then((r) => {
  //     if (r.ok) {
  //       r.json().then((user) => setUser(user));
  //     }
  //   });
  // }, []);

  // if (!user) return <Login onLogin={setUser} />;
  return (
    <div className="App">
      <RestaurantProvider>
        <Header />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <HeroSection />
                <h3 id="bookList-heading"> Popular Restaurants</h3>{" "}
                <RestaurantContainer />
              </>
            }
          />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/restaurants/:id" element={<RestaurantPage />} />
        </Routes>
      </RestaurantProvider>
      <Footer />
    </div>
  );
}

export default App;
