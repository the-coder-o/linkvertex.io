import { useTranslation } from "react-i18next";

import { DataContextProps, LinkItem } from "@/interfaces/dashboard/edit.interface";
import { createContext, ReactNode, useContext, useEffect, useState } from "react";

const DataContext = createContext<DataContextProps | undefined>(undefined);

export const useDataContext = () => useContext(DataContext)!;

export const DataProvider = ({ children }: { children: ReactNode }) => {
  const { t } = useTranslation("edit_link_page");
  const [links, setLinks] = useState<LinkItem[]>([]);
  const [title, setTitle] = useState("My Page Title");
  const description1 = t("description_label");
  const [description, setDescription] = useState(description1 as string);

  useEffect(() => {
    setDescription(description1);
  }, [description1]);

  return <DataContext.Provider value={{ links, setLinks, title, setTitle, description, setDescription }}>{children}</DataContext.Provider>;
};
