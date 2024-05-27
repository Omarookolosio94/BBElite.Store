import Loader from "core/components/Loader";
import { ScrollToTop } from "core/helpers/scrollToTop";
import useProductStore from "core/services/stores/useProductStore";
import Public from "modules/public/Public";
import { Suspense } from "react";
import { ReactNotifications } from "react-notifications-component";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";

const App = () => {
  const isProductStoreLoading = useProductStore((store) => store.isLoading);

  // TODO: Lazy load component
  return (
    <>
      {isProductStoreLoading && <Loader />}
      <Router>
        <ScrollToTop />
        <ReactNotifications />

        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path="/*" element={<Public />} />
            <Route path="/" element={<Navigate to="/home" replace />} />
          </Routes>
        </Suspense>
      </Router>
    </>
  );
};

export default App;
