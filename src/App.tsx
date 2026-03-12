import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Auth from "./pages/Auth";
import Profile from "./pages/Profile";
import Onboarding from "./pages/Onboarding";
import Accounts from "./pages/Accounts";
import Navbar from "./componants/layout/Navbar";
import { NeonAuthUIProvider } from '@neondatabase/auth/react/ui';
import { authClient } from './lib/auth';
const App = () => {
  return (
    <NeonAuthUIProvider authClient={authClient}>
    <BrowserRouter>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/onboarding" element={<Onboarding />} />
            <Route path="/auth/:pathName" element={<Auth />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/accounts/:pathName" element={<Accounts />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
    </NeonAuthUIProvider>
  );
};

export default App;
