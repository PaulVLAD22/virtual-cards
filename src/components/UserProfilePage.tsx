import {
  Box,
  Center,
  HStack,
  IconButton,
  Image,
  Link,
  Text,
  VStack,
} from "@chakra-ui/react";
import { FaEnvelope, FaPhone } from "react-icons/fa";
import { useSearchParams } from "react-router-dom";
import AdditionalInfo from "./AdditionalInfo";
import MapButton from "./MapButton";

const UserProfilePage = () => {
  const [searchParams] = useSearchParams();
  console.log(searchParams);
  const firstName = searchParams.get("firstName");
  const lastName = searchParams.get("lastName");
  const mobilePhone = searchParams.get("mobilePhone");
  const email = searchParams.get("email");
  return (
    <Box bg="#EAC31F" w="full" p={4} color="white">
      <VStack spacing={4} align="stretch" marginBottom={10}>
        <Center>
          <Image
            borderRadius="full"
            boxSize="150px"
            src="https://i.imgur.com/YHnWS6n.png"
            alt="Profile image"
            objectFit="contain"
            backgroundColor={"white"}
            p={2}
            mb={3}
          />
        </Center>
        <Box textAlign="center">
          <Text fontSize="xl" fontWeight="bold" mb={1}>
            {`${firstName} ${lastName}`}
          </Text>
          <Text fontSize="md">Crystal Logistics Services</Text>
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
