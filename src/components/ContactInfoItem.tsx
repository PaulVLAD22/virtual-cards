import React from "react";
import {
  HStack,
  Icon,
  Link,
  Text,
  VStack,
  IconProps,
} from "@chakra-ui/react";
import { As } from "@chakra-ui/react";

// Define a TypeScript interface for the component's props
interface ContactInfoItemProps {
    icon: React.ElementType; // Use the 'React.ElementType' type for the icon, which represents a component or tag name
    label: string;
    value: string;
    href: string;
}

const ContactInfoItem: React.FC<ContactInfoItemProps> = ({ icon, label, value, href }) => {
  return (
    <HStack spacing={4} align="center">
      <Icon as={icon} color="gray.500" boxSize={5} />
      <VStack align="start" spacing={0}>
        <Text fontSize="sm" color="gray.500">
          {label}
        </Text>
        <Link href={href} isExternal color="gray.800" fontWeight="semibold">
          {value}
        </Link>
      </VStack>
    </HStack>
  );
};

export default ContactInfoItem;
