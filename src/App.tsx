import { Route, Routes } from "react-router-dom";
import { AppLayout } from "./components/layout/AppLayout";
import { HomePage } from "./pages/HomePage/HomePage";
import NotFound from "./pages/NotFound";
import { Providers } from "./providers";

const App = () => (
  <Providers>
    <Routes>
      <Route path="/" element={<AppLayout />}>
        <Route index element={<HomePage />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  </Providers>
);

export default App;
