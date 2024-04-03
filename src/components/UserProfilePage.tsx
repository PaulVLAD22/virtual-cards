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
  const position = searchParams.get("position");
  const image = searchParams.get("image");

  const verifyDetails = () => {
    // Obținerea valorilor din URL
    const firstName = searchParams.get("firstName");
    const lastName = searchParams.get("lastName");
    const mobilePhone = searchParams.get("mobilePhone");
    const email = searchParams.get("email");
    const position = searchParams.get("position");
    const image = searchParams.get("image");

    const expectedDetails = [
      {
        firstName: "Bogdan",
        lastName: "Ciobanoiu",
        mobilePhone: "0755333185",
        email: "sales@crystalservices.ro",
        position: "Road Transport Consultant",
        image: null,
      },
      {
        firstName: "Ramona",
        lastName: "Atanasiu",
        mobilePhone: "0749115477",
        email: "ramona.atanasiu@crystalservices.ro",
        position: "Road Transport Consultant",
        image: null,
      },
      {
        firstName: "Alin",
        lastName: "Liță",
        mobilePhone: "0752110056",
        email: "vanzari@crystalservices.ro",
        position: "Head of Road Transport pricing department",
        image: null,
      },
      {
        firstName: "Rafael Emre",
        lastName: "Onișoară",
        mobilePhone: "0771542171",
        email: "office@crystalservices.ro",
        position: "Director General",
        image: "https://i.imgur.com/VIuQ6n2.png",
      },
      {
        firstName: "Tiberiu",
        lastName: "Hulea",
        mobilePhone: "0747233715",
        email: "transporturi@crystalservices.ro",
        position: "Freight forwarder",
        image: null,
      },
      {
        firstName: "Cosmin",
        lastName: "Solonariu",
        mobilePhone: "0784253238",
        email: "cosmin.solonariu@crystalservices.ro",
        position: "Freight forwarder",
        image: null,
      },
      {
        firstName: "Dragos",
        lastName: "Morosanu",
        mobilePhone: "0752110078",
        email: "transport@crystalservices.ro",
        position: "Freight forwarder",
        image: null,
      },
      {
        firstName: "Andrei",
        lastName: "Strat",
        mobilePhone: "0749115427",
        email: "andrei.strat@crystalservices.ro",
        position: "Freight forwarder",
        image: null,
      },
      {
        firstName: "Robert",
        lastName: "Florea",
        mobilePhone: "0784874772",
        email: "robert.florea@crystalservices.ro",
        position: "Freight forwarder",
        image: null,
      },
      {
        firstName: "Mario",
        lastName: "Barleanu",
        mobilePhone: "0747235449",
        email: "mario.barleanu@crystalservices.ro",
        position: "Freight forwarder",
        image: null,
      },
      {
        firstName: "Bogdan",
        lastName: "Idita",
        mobilePhone: "0760248087",
        email: "bogdan.idita@crystalservices.ro",
        position: "Road Transport Consultant",
        image: null,
      },
    ];

    // Verifică dacă detaliile din URL corespund cu oricare din detaliile așteptate
    return expectedDetails.some(
      (detail) =>
        detail.firstName === firstName &&
        detail.lastName === lastName &&
        detail.mobilePhone === mobilePhone &&
        detail.email === email &&
        detail.position === position &&
        (detail.image === image || detail.image === null) // Pentru imagine, acceptăm și cazul în care nu există imaginea în detaliile așteptate
    );
  };

  if (verifyDetails() === false) {
    return <div>Wrong details!</div>;
  }
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
