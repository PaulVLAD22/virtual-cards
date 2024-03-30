import {
  Box,
  Center,
  HStack,
  Icon,
  IconButton,
  Image,
  Link,
  Text,
  VStack,
} from "@chakra-ui/react";
import { FaEnvelope, FaPhone } from "react-icons/fa";
import MapButton from "./MapButton";
import { useLocation } from "react-router-dom";
import AdditionalInfo from "./AdditionalInfo";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const UserProfilePage = () => {
  const query = useQuery();
  const firstName = query.get("firstName");
  const lastName = query.get("lastName");
  const mobilePhone = query.get("mobilePhone");
  const email = query.get("email");
  return (
    <Box bg="yellow.400" w="full" p={4} color="white">
      <VStack spacing={4} align="stretch" marginBottom={10}>
        <Center>
          <Image
            borderRadius="full"
            boxSize="100px"
            src="https://i.imgur.com/4cHMqub.jpeg"
            alt="Profile image"
          />
        </Center>
        <Box textAlign="center">
          <Text fontSize="xl" fontWeight="bold">
            {`${firstName} ${lastName}`}
          </Text>
          <Text fontSize="md">Freight Forwarder</Text>
        </Box>
        <HStack justify="center" spacing={10}>
          <Link href={`tel:+${mobilePhone}`} isExternal>
            <IconButton
              icon={<FaPhone />}
              isRound // This prop will make the button circular
              size={"lg"}
              variant={"outline"}
              aria-label="Call"
            />
          </Link>
          <Link href={`mailto:${email}`} isExternal>
            <IconButton
              icon={<FaEnvelope />}
              isRound
              size="lg"
              aria-label="Email"
              variant="outline"
            />
          </Link>
          <MapButton />
        </HStack>
      </VStack>
      <AdditionalInfo
        contactInfo={{
          phone: mobilePhone || undefined,
          email: email || undefined,
          website: "https://www.crystal-logistics-services.com ",
          location:
            "Cotroceni Business Center, Bulevardul Iuliu Maniu 7, București 061072",
        }}
      />
    </Box>
  );
};

export default UserProfilePage;
