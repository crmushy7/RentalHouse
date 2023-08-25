import { useState } from "react";
import { Tabs } from "@mantine/core";

export function Tabcreator() {
  const [activeTab, setActiveTab] = useState<string | null>("first");

  return (
    <Tabs value={activeTab} onTabChange={setActiveTab}>
      <Tabs.List className="flex flex-col">
        <Tabs.Tab value="first">First tab</Tabs.Tab>
        <Tabs.Tab value="second">Second tab</Tabs.Tab>
      </Tabs.List>

      <Tabs.Panel value="first">First panel</Tabs.Panel>
      <Tabs.Panel value="second">Second panel</Tabs.Panel>
    </Tabs>
  );
}
