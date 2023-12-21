import {Route, Routes} from 'react-router-dom';
import './globals.css';
import SignInFrom from './_auth/Forms/SignInFrom';
import {Home} from './_root/pages';
import SignUpForm from './_auth/Forms/SignUpForm';
import AuthLayout from './_auth/AuthLayout';
import RootLayout from './_root/RootLayout';

function App() {
  return (
    <main className=" flex h-screen">
      <Routes>
        {/* rutas publicas */}
        <Route element={<AuthLayout />}>
          <Route path="/sign-in" element={<SignInFrom />} />
          <Route path="/sign-up" element={<SignUpForm />} />
        </Route>

        {/* rutas privadas */}
        <Route element={<RootLayout />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </main>
  );
}

export default App;
