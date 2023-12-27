import {Route, Routes} from 'react-router-dom';
import './globals.css';
import SignInFrom from './_auth/Forms/SignInForm';
import {
  AllUsers,
  CreatePost,
  EditPost,
  Explore,
  Home,
  PostDetails,
  Profile,
  Saved,
  UpdateProfile,
} from './_root/pages';
import SignUpForm from './_auth/Forms/SignUpForm';
import AuthLayout from './_auth/AuthLayout';
import RootLayout from './_root/RootLayout';
import {Toaster} from './components/ui/toaster';

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
          <Route path="/explore" element={<Explore />} />
          <Route path="/saved" element={<Saved />} />
          <Route path="/all-users" element={<AllUsers />} />
          <Route path="/create-post" element={<CreatePost />} />
          <Route path="/update-post/:id" element={<EditPost />} />
          <Route path="/posts/:id" element={<PostDetails />} />
          <Route path="/profile/:id/*" element={<Profile />} />
          <Route path="/update-profile/:id" element={<UpdateProfile />} />
        </Route>
      </Routes>
      <Toaster />
    </main>
  );
}

export default App;
