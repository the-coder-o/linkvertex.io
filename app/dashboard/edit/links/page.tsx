"use client";

import { ChangeEvent, useCallback, useState } from "react";

import Image from "next/image";
import dynamic from "next/dynamic";

import { cn } from "@/lib/utils";

import { useTranslation } from "react-i18next";

import EmojiPicker from "emoji-picker-react";
import { Link2, ShieldAlert, Tags, Trash } from "lucide-react";

import { DropResult } from "react-beautiful-dnd";
import { LinkItem } from "@/interfaces/dashboard/edit.interface";
import { useDataContext } from "@/app/dashboard/edit/edit-context";

import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

import EmojiIcon from "@/assets/dashboard/smile.png";

const Droppable = dynamic(() => import("react-beautiful-dnd").then((mod) => mod.Droppable), { ssr: false });
const Draggable = dynamic(() => import("react-beautiful-dnd").then((mod) => mod.Draggable), { ssr: false });
const DragDropContext = dynamic(() => import("react-beautiful-dnd").then((mod) => mod.DragDropContext), { ssr: false });

const Page = () => {
  const [error, setError] = useState("");
  const [error2, setError2] = useState("");
  const [isValid, setIsValid] = useState(true);
  const [inputValue, setInputValue] = useState("your-page-url");
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);

  const { links, setLinks, setTitle, setDescription, title, description } = useDataContext();

  const { t } = useTranslation("edit_link_page");
  const regexForPageTitle = /^[A-Za-z-]+$/;

  const handleInputChange = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setInputValue(value);
    setIsValid(regexForPageTitle.test(value));
  }, []);

  const handleInputChangeValidation = (e: any) => {
    const { value } = e.target;
    if (value.length <= 50) {
      setTitle(value);
      setError("");
    } else setError("Title cannot exceed 50 characters.");
  };

  const handleInputChangeDescription = (e: any) => {
    const { value } = e.target;
    if (value.length <= 500) {
      setDescription(value);
      setError2("");
    } else setError2("Description cannot exceed 150 characters.");
  };

  const addLink = useCallback(() => {
    const newLink: LinkItem = { id: Date.now().toString(), title: "", url: "", enabled: true };
    setLinks((prevLinks) => [...prevLinks, newLink]);
  }, []);

  const toggleLinkEnabled = useCallback((id: string) => {
    setLinks((prevLinks) => prevLinks.map((link) => (link.id === id ? { ...link, enabled: !link.enabled } : link)));
  }, []);

  const deleteLink = useCallback((id: string) => {
    setLinks((prevLinks) => prevLinks.filter((link) => link.id !== id));
  }, []);

  const handleLinkEdit = useCallback((id: string, title: string, url: string) => {
    setLinks((prevLinks) => prevLinks.map((link) => (link.id === id ? { ...link, title, url } : link)));
  }, []);

  const onDragEnd = useCallback(
    (result: DropResult) => {
      if (!result.destination) return;

      const items = Array.from(links);
      const [reorderedItem] = items.splice(result.source.index, 1);
      items.splice(result.destination.index, 0, reorderedItem);

      setLinks(items);
    },
    [links],
  );

  const onEmojiClick = (e: any) => {
    const sym = e.unified.split("_");
    const codeArray: any[] = [];
    sym.forEach((el: any) => codeArray.push("0x" + el));
    let emoji = String.fromCodePoint(...codeArray);
    setTitle(title + emoji);
  };

  return (
    <>
      <div className={cn("grid grid-cols-1 gap-y-12")}>
        <div className={"grid grid-cols-1 gap-y-6"}>
          <div className={"relative"}>
            <label className={"text-md text-start font-medium text-white"}> {t("label")}</label>
            <Input value={title} onChange={handleInputChangeValidation} type={"text"} className={"mt-[0.5rem] rounded-[20px] border-2 border-[#] !bg-transparent px-[16px] pt-[5px] text-[1rem] text-white placeholder:font-medium placeholder:text-[#454646] focus:!border-2 focus:!border-[#63b3ed] focus:!transition"} />
            <span onClick={() => setShowEmojiPicker((val) => !val)} className={"absolute right-3 top-[42.8px] cursor-pointer"}>
              <Image src={EmojiIcon} alt={"Emoji"} width={18} height={18} />
            </span>
            {showEmojiPicker && (
              <div className="absolute right-0 z-10">
                {/*// @ts-ignore*/}
                <EmojiPicker theme={"dark"} searchDisabled={false} width={300} height={250} autoFocusSearch={false} onEmojiClick={onEmojiClick} />
              </div>
            )}
            {error && <div className="mt-2 text-sm text-red-500">{error}</div>}
          </div>
          <div>
            <label className={"text-md text-start font-medium text-white"}>{t("profile_title")}</label>
            <div className="relative">
              <Input value={inputValue} onChange={handleInputChange} type="text" className={"mt-[0.5rem] rounded-[20px] border-2 border-[#] !bg-transparent px-[16px] !pl-[195px] pt-[5px] text-[1rem] text-white placeholder:font-medium placeholder:text-[#454646] focus:!border-2 focus:!border-[#63b3ed] focus:!transition"} id="hs-inline-add-on" name="hs-inline-add-on" />
              <div className="pointer-events-none absolute inset-y-0 start-0 flex items-center ps-4">
                <span className="main-text-animation text-start text-sm font-bold">https://linkvertex-a-bd.me/</span>
              </div>
            </div>
            {!isValid && <p className="text-sm text-red-500">Please write a correct your page url title.</p>}
          </div>
          <div>
            <label className={"text-md text-start font-medium text-white"}>{t("description")}</label>
            <Textarea value={description} onChange={handleInputChangeDescription} className={"mt-[0.5rem] h-[150px] rounded-[20px] border-2 border-[#] !bg-transparent px-[16px] !pt-[16px] text-[1rem] text-white !outline-none placeholder:font-medium placeholder:text-[#454646] focus:!border-2 focus:!border-[#63b3ed] focus:!transition"} />
            {error2 && <div className="mt-2 text-sm text-red-500">{error2}</div>}
          </div>
        </div>
        <Alert className="rounded-[24px] border-transparent !bg-[#1E2B32]">
          <ShieldAlert className="flex items-center justify-center rounded-full bg-[#90CDF4] p-[4px]" />
          <AlertTitle className="ml-2 text-white">{t("alert_title")}</AlertTitle>
          <AlertDescription className="ml-2 w-full text-[16px] font-medium text-white">{t("alert_text")}</AlertDescription>
        </Alert>
        <DragDropContext onDragEnd={onDragEnd}>
          <Droppable droppableId="droppable-links">
            {(provided) => (
              <div {...provided.droppableProps} ref={provided.innerRef} className="grid grid-cols-1 items-center rounded-[24px] border-2 border-[#ffffff29] p-[0.5rem]">
                {links.map((link, index) => (
                  <Draggable key={link.id} draggableId={link.id} index={index}>
                    {(provided) => (
                      <div ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps} className={"mb-[15px] grid grid-cols-1 rounded-[24px] border-2 border-[#ffffff29] bg-[#1a202c99] p-[1.2rem]"}>
                        <h2 className="text-md font-bold uppercase text-white">URL {index + 1}</h2>
                        <div className="relative">
                          <Input placeholder="Label" required={true} value={link.title} onChange={(e) => handleLinkEdit(link.id, e.target.value, link.url)} type="text" className="mt-[0.5rem] rounded-[20px] border-transparent !bg-[#1C2129] bg-transparent px-[40px] pt-[5px] text-[1rem] text-white placeholder:font-medium placeholder:text-[#454646] focus:!border-2 focus:!border-[#63b3ed] focus:!bg-transparent focus:!transition" />
                          <Tags className="absolute left-3 top-[18px] h-5 w-5 text-white" />
                        </div>
                        <div className="relative">
                          <Input placeholder="Link URL" required={true} value={link.url} onChange={(e) => handleLinkEdit(link.id, link.title, e.target.value)} type="text" className="mt-[0.5rem] rounded-[20px] border-transparent !bg-[#1C2129] bg-transparent px-[40px] pt-[5px] text-[1rem] text-white placeholder:font-medium placeholder:text-[#454646] focus:!border-2 focus:!border-[#63b3ed] focus:!bg-transparent focus:!transition" />
                          <Link2 className="absolute left-3 top-[18px] h-5 w-5 text-white" />
                        </div>
                        <div className="mt-[15px] flex items-center justify-between">
                          <Switch id={`switch-${link.id}`} checked={link.enabled} onClick={() => toggleLinkEnabled(link.id)} />
                          <Trash onClick={() => deleteLink(link.id)} className="h-5 w-5 cursor-pointer text-red-500" />
                        </div>
                      </div>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
                <Button onClick={addLink} className="flex w-full items-center justify-center rounded-[20px] bg-[#90CDF4] px-[16px] text-[16px] !font-bold text-black hover:bg-[#90CDF4]/90">
                  {t("add_link_btn")}
                </Button>
              </div>
            )}
          </Droppable>
        </DragDropContext>
        <Button className="flex w-full items-center justify-center gap-2 rounded-[18px] bg-[#9AE6B4] px-[16px] py-6 text-[16px] !font-bold text-black hover:bg-[#9AE6B4]/90"> {t("save_btn")}</Button>
      </div>
    </>
  );
};

export default Page;
