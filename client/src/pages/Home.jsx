//rafce

import MapHome from "@/components/map/MapHome";
import { 
  SignedIn, 
  SignedOut, 
  SignInButton, 
  SignOutButton, 
  SignUpButton, 
  UserButton 
} from "@clerk/clerk-react";

const Home = () => {
  return (
    <div>
      <MapHome />
  </div>
  )
}
export default Home