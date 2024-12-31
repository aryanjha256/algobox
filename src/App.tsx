import { Toaster } from "sonner";
import Footer from "./components/Footer";
import Slider from "./components/Slider";
import SnippetList from "./components/SnippetList";
import MainLayout from "./layout/MainLayout";

const App = () => {
  return (
    <main>
      <MainLayout />
      <Slider />
      <SnippetList />
      <Footer />
      <Toaster
        position="top-center"
        theme="dark"
        richColors
        toastOptions={{}}
      />
    </main>
  );
};

export default App;
