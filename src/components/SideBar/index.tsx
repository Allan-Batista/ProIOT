import { List, ListItem, VStack } from "@chakra-ui/react";
import { navItems } from "./nav-data";
import { NavItem } from "./nav-item";
import { Logo } from "../Logo";

export const SideBar = () => {
  return (
    <VStack
      alignItems="flex-start"
      width="full"
      height="full"
      MaxW={{ base: 56, "2x1": 72 }}
      borderRigthColor={2}
      flexShrink={0}
    >
      <Logo />

      <List width="full" overflowY="auto">
        {navItems.map((item, index) => (
          <ListItem key={item.label}>
            <NavItem item={item} isActive={index === 0} />
          </ListItem>
        ))}
      </List>
    </VStack>
  );
};
