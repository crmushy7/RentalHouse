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
import AllHouses from "../mainscreens/AllHouses";
import Myfavorites from "../mainscreens/Myfavorites";
import Myhouses from "./Myhouses";
import MyAccount from "../mainscreens/MyAccount";
import RightBar from "../mainscreens/RightBar";
import Searchbar from "../mainscreens/Searchbar";

export default function Homepage() {
  const theme = useMantineTheme();
  const [activeTab, setActiveTab] = useState<string | null>("first");
  const [opened, setOpened] = useState(false);

  const setNav = (e: string) => {
    setActiveTab(e);
  };
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
          width={{ sm: 180, lg: 180 }}
          className="flex  w-auto items-start  text-left"
        >
          {/* left navbar */}
          <Tabs
            value={activeTab}
            onTabChange={setActiveTab}
            className=" items-start flex border justify-start text-start"
          >
            <Tabs.List className="flex flex-col items-start">
              <Tabs.Tab value="first">
                <span className="flex justify-center ">
                  <i className="text-blue-700 pi pi-microsoft mr-2" />
                  Dashboard
                </span>
              </Tabs.Tab>
              <Tabs.Tab value="second">
                {" "}
                <span className="flex justify-center">
                  <i className="pi pi-user mr-2" />
                  My account
                </span>
              </Tabs.Tab>
              <Tabs.Tab value="third">
                <span className="flex justify-center">
                  <i className="pi pi-home mr-2" />
                  Add house
                </span>
              </Tabs.Tab>
              {/* <Tabs.Tab value="four">ALL HOUSES</Tabs.Tab> */}
              <Tabs.Tab value="six">
                <span className="flex justify-center">
                  <i className="  pi pi-heart-fill mr-2" />
                  Favourite houses
                </span>
              </Tabs.Tab>
              <Tabs.Tab value="seven">
                <span className="flex justify-center">
                  <i className="pi pi-money-bill mr-2" />
                  Paid houses
                </span>
              </Tabs.Tab>
              <Tabs.Tab value="five">
                <span className="flex justify-center">
                  <i className="pi pi-info-circle mr-2" />
                  About us
                </span>{" "}
              </Tabs.Tab>
            </Tabs.List>
          </Tabs>
        </Navbar>
      }
      aside={
        <MediaQuery smallerThan="sm" styles={{ display: "none" }}>
          <Aside p="md" hiddenBreakpoint="sm" width={{ sm: 200, lg: 250 }}>
            {/* rightbar */}
            <RightBar />
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
            style={{
              display: "flex",
              height: "100%",
              justifyContent: "center",
            }}
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
            {/* TOPBAR */}
            <Tabs value={activeTab} onTabChange={setActiveTab}>
              <Tabs.Panel value="second"> MY ACCOUNT</Tabs.Panel>
              <Tabs.Panel value="first">
                <Tabs value={activeTab} onTabChange={setActiveTab}>
                  <Tabs.List className="flex flex-row">
                    <Searchbar />
                    <Tabs.Tab value="first"> MY HOUSES</Tabs.Tab>
                    <Tabs.Tab value="four">ALL HOUSES</Tabs.Tab>
                  </Tabs.List>
                </Tabs>
              </Tabs.Panel>
              <Tabs.Panel value="third">ADD HOUSES</Tabs.Panel>
              <Tabs.Panel value="four">
                {" "}
                <Tabs value={activeTab} onTabChange={setActiveTab}>
                  <Tabs.List className="flex flex-row">
                    <Searchbar />
                    <Tabs.Tab value="first">MY HOUSES</Tabs.Tab>
                    <Tabs.Tab value="four">ALL HOUSES</Tabs.Tab>
                  </Tabs.List>
                </Tabs>
              </Tabs.Panel>
              <Tabs.Panel value="six">FAVORITE HOUSES</Tabs.Panel>
              <Tabs.Panel value="seven">PAID HOUSES</Tabs.Panel>
              <Tabs.Panel value="five">About us</Tabs.Panel>
            </Tabs>
          </div>
        </Header>
      }
    >
      {/* main div-centered */}
      <Tabs value={activeTab} onTabChange={setActiveTab}>
        <Tabs.Panel value="second">
          <MyAccount />
        </Tabs.Panel>
        <Tabs.Panel value="first">
          <Myhouses />
        </Tabs.Panel>
        <Tabs.Panel value="third">
          <AddHouse />
        </Tabs.Panel>
        <Tabs.Panel value="four">
          <AllHouses />
        </Tabs.Panel>
        <Tabs.Panel value="six">
          <Myfavorites />
        </Tabs.Panel>
        <Tabs.Panel value="seven">Paid houses</Tabs.Panel>
        <Tabs.Panel value="five">
          <Aboutus />
        </Tabs.Panel>
      </Tabs>
    </AppShell>
  );
}
