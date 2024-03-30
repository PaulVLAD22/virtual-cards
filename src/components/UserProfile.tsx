import { Box } from "@chakra-ui/react";
import { useState } from "react";
import LoadingAnimation from "./LoadingAnimation";
import UserProfilePage from "./UserProfilePage";

const UserProfile = () => {
  const [loading, setLoading] = useState(true);

  const handleAnimationFinished = () => {
    setLoading(false);
  };

  return (
    <Box>
      {loading ? (
        <LoadingAnimation onFinished={handleAnimationFinished} />
      ) : (
        <UserProfilePage />
      )}
    </Box>
  );
};

export default UserProfile;
