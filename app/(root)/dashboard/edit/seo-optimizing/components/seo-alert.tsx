import React from "react";
import { useTranslation } from "react-i18next";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const SeoAlert = () => {
  const { t } = useTranslation("edit_page_faqs");

  return (
    <Accordion type="single" collapsible className="w-full">
      <AccordionItem className={"!border-b-[#fff]/50"} value="item-1">
        <AccordionTrigger className={"text-white"}>{t("q1")}</AccordionTrigger>
        <AccordionContent className={"text-white"}>{t("a1")}</AccordionContent>
      </AccordionItem>
      <AccordionItem className={"!border-b-[#fff]/50"} value="item-2">
        <AccordionTrigger className={"text-white"}>{t("q2")}</AccordionTrigger>
        <AccordionContent className={"text-white"}>{t("a2")}</AccordionContent>
      </AccordionItem>
      <AccordionItem className={"!border-b-[#fff]/50"} value="item-3">
        <AccordionTrigger className={"text-white"}>{t("q3")}</AccordionTrigger>
        <AccordionContent className={"text-white"}>{t("a3")}</AccordionContent>
      </AccordionItem>
      <AccordionItem className={"!border-b-[#fff]/50"} value="item-4">
        <AccordionTrigger className={"text-white"}>{t("q4")}</AccordionTrigger>
        <AccordionContent className={"text-white"}>{t("a4")}</AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

export default SeoAlert;
