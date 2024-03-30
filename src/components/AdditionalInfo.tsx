import { Box, Button, Text, VStack } from "@chakra-ui/react";
import React from "react";
import {
    FaEnvelope,
    FaFacebook,
    FaGlobe,
    FaInstagram,
    FaLinkedin,
    FaMapMarkerAlt,
    FaPhone,
} from "react-icons/fa";
import ContactInfoItem from "./ContactInfoItem";
import SocialMediaLink from "./SocialMediaLink";

interface ContactInfo {
  phone?: string;
  email?: string;
  website?: string;
  location?: string;
  fb?: string;
  linkedin?: string;
  insta?: string;
}

interface AdditionalInfoProps {
  contactInfo: ContactInfo;
}

const AdditionalInfo: React.FC<AdditionalInfoProps> = ({
  contactInfo: {
    phone = "Not provided",
    email = "Not provided",
    website = "Not provided",
    location = "Not provided",
    fb = "https://www.facebook.com/crystallogisticsservices",
    linkedin = "https://ro.linkedin.com/company/crystal-logistics-services",
    insta = "https://www.instagram.com/crystallogisticsservices/",
  },
}) => {
  const addressEncoded = encodeURIComponent(location);

  return (
    <Box p={5} bg="white" boxShadow="md" borderRadius="lg">
      <VStack spacing={4} align="stretch">
        <ContactInfoItem
          icon={FaPhone}
          label="Phone"
          value={phone}
          href={`tel:${phone}`}
        />
        <ContactInfoItem
          icon={FaEnvelope}
          label="Email"
          value={email}
          href={`mailto:${email}`}
        />
        <ContactInfoItem
          icon={FaGlobe}
          label="Website"
          value={website}
          href={website.startsWith("http") ? website : `http://${website}`}
        />
        <ContactInfoItem
          icon={FaMapMarkerAlt}
          label="Location"
          value={location}
          href={`https://www.google.com/maps/search/?api=1&query=${addressEncoded}`}
        />
        {location !== "Not provided" && (
          <Button
            leftIcon={<FaMapMarkerAlt />}
            colorScheme="blue"
            variant="link"
            onClick={() =>
              window.open(
                `https://www.google.com/maps/search/?api=1&query=${addressEncoded}`,
                "_blank"
              )
            }
          >
            Show on Map
          </Button>
        )}
        <VStack spacing={4} align="stretch">
          <Text fontSize="x-large" fontWeight="semibold" my={2} color="black">
            Find me on
          </Text>
          <SocialMediaLink
            icon={FaFacebook}
            platform="Facebook"
            href="https://www.facebook.com/crystallogisticsservices"
          />
          <SocialMediaLink
            icon={FaLinkedin}
            platform="LinkedIn"
            href="https://ro.linkedin.com/company/crystal-logistics-services"
          />
          <SocialMediaLink
            icon={FaInstagram}
            platform="Instagram"
            href="https://www.instagram.com/crystallogisticsservices/"
          />
        </VStack>
      </VStack>
    </Box>
  );
};

export default AdditionalInfo;
