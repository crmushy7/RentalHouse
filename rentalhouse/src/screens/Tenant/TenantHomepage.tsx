import { useEffect, useState } from "react";
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
import Aboutus from "../../Aboutus";
import Myfavorites from "../mainscreens/Myfavorites";
import AllHouses from "../mainscreens/AllHouses";
import MyAccount from "../mainscreens/MyAccount";
import RightBar from "../mainscreens/RightBar";
import { useNavigate } from "react-router";
import { LoginUserInputMutation } from "../../generated/graphql";
import { getUserData } from "../../utils/localStorageUtils";

export default function TenantHomepage() {
  const theme = useMantineTheme();
  const [activeTab, setActiveTab] = useState<string | null>("first");
  const [opened, setOpened] = useState(false); const [user, setUser] = useState<LoginUserInputMutation | null>(
    getUserData() ?? null
  );
  const navigate = useNavigate();

  useEffect(() => {
    const userData = getUserData();
    if (userData !== null) {
      setUser(userData);
    }
  }, []);
   const logout = () => {
     setTimeout(() => {
       // Redirect to the login page or another route after logout
       // You can replace '/login' with your desired route
       navigate("/");

       // Reset the logging out state
     }, 1000);
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
          width={{ sm: 200, lg: 300 }}
          className="flex justify-between flex-col"
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
              <Tabs.Tab value="four">
                {" "}
                <span className="flex justify-center">
                  <i className="pi pi-user mr-2" />
                  My account
                </span>
              </Tabs.Tab>
              <Tabs.Tab value="third">
                <span className="flex justify-center">
                  <i className="  pi pi-heart-fill mr-2" />
                  Favourite houses
                </span>
              </Tabs.Tab>
              <Tabs.Tab value="second">
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
              {/* <Tabs.Tab value="six">Second tab</Tabs.Tab> */}
            </Tabs.List>
          </Tabs>
          <div className="flex flex-col">
            <span className="hover:cursor-pointer">
              {" "}
              <i className="text-blue-700  pi pi-user mr-2" />
              <span>{user?.login.user.firstName}</span>
            </span>
            <span className="hover:cursor-pointer" onClick={logout}>
              <span>
                <i className="pi pi-sign-out mr-2" />
              </span>
              <span>Log Out</span>
            </span>
          </div>
        </Navbar>
      }
      aside={
        <MediaQuery smallerThan="sm" styles={{ display: "none" }}>
          <Aside p="md" hiddenBreakpoint="sm" width={{ sm: 200, lg: 300 }}>
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
              alignItems: "center",
              justifyContent: "center",
              height: "100%",
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
              <Tabs.Panel value="four">MY ACCOUNT</Tabs.Panel>
              <Tabs.Panel value="second">PAID APARTMENTS</Tabs.Panel>
              <Tabs.Panel value="third">MY FAVORITES</Tabs.Panel>
              <Tabs.Panel value="first">ALL HOUSES</Tabs.Panel>
              <Tabs.Panel value="six">FAVORITE HOUSES</Tabs.Panel>
              <Tabs.Panel value="five">About us</Tabs.Panel>
            </Tabs>
          </div>
        </Header>
      }
    >
      {/* main div-centered */}
      <Tabs value={activeTab} onTabChange={setActiveTab}>
        <Tabs.Panel value="four">
          <MyAccount />
        </Tabs.Panel>
        <Tabs.Panel value="second">All Apartments I Paid</Tabs.Panel>
        <Tabs.Panel value="third">
          <Myfavorites />
        </Tabs.Panel>
        <Tabs.Panel value="first">
          <AllHouses />
        </Tabs.Panel>
        <Tabs.Panel value="five">
          <Aboutus />
        </Tabs.Panel>
      </Tabs>
    </AppShell>
  );
}
