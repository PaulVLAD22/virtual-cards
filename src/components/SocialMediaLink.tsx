import React, { ReactElement } from "react";
import {
  Box,
  Button,
  HStack,
  Icon,
  Link,
  Text,
  VStack,
  IconProps,
} from "@chakra-ui/react";
import { FaChevronRight } from "react-icons/fa";

// Define a TypeScript interface for the component's props
interface SocialMediaLinkProps {
  icon: React.ElementType;
  platform: string;
  href: string;
}

const SocialMediaLink: React.FC<SocialMediaLinkProps> = ({ icon, platform, href }) => {
  return (
    <Button
      as={Link}
      href={href}
      isExternal
      variant="ghost"
      justifyContent="start"
      w="full"
    >
      <HStack spacing={4}>
        <Icon as={icon} boxSize="6" />
        <VStack align="start" spacing="0">
          <Text fontWeight="semibold">{platform}</Text>
          <Text fontSize="sm" color="gray.600">
            Follow us!
          </Text>
        </VStack>
        <Box flex="1" textAlign="right">
          <Icon as={FaChevronRight} />
        </Box>
      </HStack>
    </Button>
  );
};

export default SocialMediaLink;
