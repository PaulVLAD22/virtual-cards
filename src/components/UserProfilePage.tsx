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
  const userId = searchParams.get("id");

  const expectedDetails = [
    {
      id: "1",
      firstName: "Bogdan",
      lastName: "Ciobanoiu",
      mobilePhone: "0755333185",
      email: "Bogdan.c@crystal-logistics-services.com",
      position: "Manager of Freight Forwarding Department",
      image: "https://i.imgur.com/yQy7h5a.jpeg",
    },
    {
      id: "3",
      firstName: "Alin",
      lastName: "Liță",
      mobilePhone: "0752110056",
      email: "Alin.l@crystal-logistics-services.com",
      position: "Manager of Freight forwarding Department",
      image: "https://i.imgur.com/x76OyYi.jpeg",
    },
    {
      id: "4",
      firstName: "Rafael Emre",
      lastName: "Onișoară",
      mobilePhone: "0771542171",
      email: "rafael.o@crystal-logistics-services.com",
      position: "CEO",
      image: "https://i.imgur.com/VIuQ6n2.png",
    },
    {
      id: "5",
      firstName: "Tiberiu",
      lastName: "Hulea",
      mobilePhone: "0747233715",
      email: "transporturi@crystalservices.ro",
      position: "Freight forwarder",
      image: null,
    },
    {
      id: "7",
      firstName: "Dragos",
      lastName: "Morosanu",
      mobilePhone: "0752110078",
      email: "transport@crystalservices.ro",
      position: "Freight forwarder",
      image: null,
    },
    {
      id: "8",
      firstName: "Andrei",
      lastName: "Strat",
      mobilePhone: "0749115427",
      email: "andrei.strat@crystalservices.ro",
      position: "Freight forwarder",
      image: null,
    },
    {
      id: "9",
      firstName: "Robert",
      lastName: "Florea",
      mobilePhone: "0784874772",
      email: "Robert.f@crystal-logistics-services.com",
      position: "Senior Freight Forwarder",
      image: null,
    },
    {
      id: "10",
      firstName: "Mario",
      lastName: "Barleanu",
      mobilePhone: "0747235449",
      email: "Mario.b@crystal-logistics-services.com",
      position: "Freight forwarder",
      image: null,
    },
    {
      id: "13",
      firstName: "Catalin",
      lastName: "Ermalae",
      mobilePhone: "0760249346",
      email: "Catalin.e@crystal-logistics-services.com",
      position: "Freight Forwarder",
      image: null,
    },
    {
      id: "14",
      firstName: "Bogdan",
      lastName: "Serafim",
      mobilePhone: "0749144049",
      email: "Bogdan.s@crystal-logistics-services.com",
      position: "Manager of Freight forwarding Department",
      image: null,
    },
    {
      id: "15",
      firstName: "Bianca",
      lastName: "Onisoara",
      mobilePhone: "0760780291",
      email: "hr@crystal-logistics-services.com",
      position: "Human Resources Manager",
      image: null,
    },
    {
      id: "16",
      firstName: "Roberto",
      lastName: "Coică",
      mobilePhone: "0742124262",
      email: "Roberto.c@crystal-logistics-services.com",
      position: "Freight Forwarder",
      image: null,
    },
    {
      id: "17",
      firstName: "Ionut",
      lastName: "Dumitru",
      mobilePhone: "0736936629",
      email: "Ionut.d@crystal-logistics-services.com",
      position: "Freight Forwarder",
      image: null,
    },
  ];

  const userDetails = expectedDetails.find((detail) => detail.id === userId);

  if (!userDetails) {
    return <div>Wrong details!</div>;
  }

  const { firstName, lastName, mobilePhone, email, position, image } =
    userDetails;

  return (
    <Box bg="#EAC31F" w="full" p={4} color="white">
      <VStack spacing={4} align="stretch" marginBottom={10}>
        <Center>
          <Image
            borderRadius="full"
            boxSize="150px"
            src={image === null ? "https://i.imgur.com/YHnWS6n.png" : image}
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
          <Text fontSize="md">{position}</Text>
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
          firstName: firstName || undefined,
          lastName: lastName || undefined,
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
