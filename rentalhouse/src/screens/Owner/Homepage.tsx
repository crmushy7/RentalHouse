import { useState } from "react";
import {
  AppShell,
  Navbar,
  Header,
  Footer,
  Aside,
  Text,
  MediaQuery,
  Burger,
  useMantineTheme,
  Tabs,
} from "@mantine/core";
import AddHouse from "./AddHouse";
import Aboutus from "../../Aboutus";

export default function Homepage() {
  const theme = useMantineTheme();
  const [activeTab, setActiveTab] = useState<string | null>("first");
  const [opened, setOpened] = useState(false);
  return (
    <AppShell
      styles={{
        main: {
          background:
            theme.colorScheme === "dark"
              ? theme.colors.dark[8]
              : theme.colors.gray[0],
        },
      }}
      navbarOffsetBreakpoint="sm"
      asideOffsetBreakpoint="sm"
      navbar={
        <Navbar
          p="md"
          hiddenBreakpoint="sm"
          hidden={!opened}
          width={{ sm: 200, lg: 300 }}
        >
          {/* left navbar */}
          <Tabs value={activeTab} onTabChange={setActiveTab}>
            <Tabs.List className="flex flex-col">
              <Tabs.Tab value="first">MY ACCOUNT</Tabs.Tab>
              <Tabs.Tab value="second">MY HOUSES</Tabs.Tab>
              <Tabs.Tab value="third">ADD HOUSES</Tabs.Tab>
              <Tabs.Tab value="four">ALL HOUSES</Tabs.Tab>
              {/* <Tabs.Tab value="second">Second tab</Tabs.Tab> */}
              <Tabs.Tab value="five"> ABOUT US</Tabs.Tab>
            </Tabs.List>
          </Tabs>
        </Navbar>
      }
      aside={
        <MediaQuery smallerThan="sm" styles={{ display: "none" }}>
          <Aside p="md" hiddenBreakpoint="sm" width={{ sm: 200, lg: 300 }}>
            {/* rightbar */}
            <Text>Application sidebar</Text>
          </Aside>
        </MediaQuery>
      }
      footer={
        <Footer height={60} p="md">
          Application footer
        </Footer>
      }
      header={
        <Header height={{ base: 50, md: 70 }} p="md">
          <div
            style={{ display: "flex", alignItems: "center", height: "100%" }}
          >
            <MediaQuery largerThan="sm" styles={{ display: "none" }}>
              <Burger
                opened={opened}
                onClick={() => setOpened((o) => !o)}
                size="sm"
                color={theme.colors.gray[6]}
                mr="xl"
              />
            </MediaQuery>

            <Text>Application header</Text>
          </div>
        </Header>
      }
    >
      {/* main div-centered */}
      <Tabs value={activeTab} onTabChange={setActiveTab}>
        <Tabs.Panel value="first">First panel</Tabs.Panel>
        <Tabs.Panel value="second">Second panel</Tabs.Panel>
        <Tabs.Panel value="third"><AddHouse/></Tabs.Panel>
        <Tabs.Panel value="four">four panel</Tabs.Panel>
        <Tabs.Panel value="five"><Aboutus/></Tabs.Panel>
      </Tabs>
    </AppShell>
  );
}
