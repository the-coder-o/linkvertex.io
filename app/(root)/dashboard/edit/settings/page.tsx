"use client";

import React from "react";

import { Archive, ArrowDownUp, CircleMinus, HandHeart, Lock, Mailbox, ScanSearch, ShieldAlert } from "lucide-react";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

const Page = () => {
  return (
    <>
      <head>
        <title>Settings | linkvretex.io</title>
      </head>
      <div>
        <Alert className="mb-3 w-full rounded-[24px] border-transparent !bg-[#90CDF4]">
          <ShieldAlert className="flex items-center justify-center rounded-full bg-[#000] p-[4px] !text-white" />
          <AlertTitle className="ml-2 text-black">Coming Soon, will be open in v:2.0.0</AlertTitle>
          <AlertDescription className="ml-2 text-[16px] font-medium text-black">Streamlined link management with engagement and privacy tools.🥰</AlertDescription>
        </Alert>
        <div className={"flex flex-col gap-10"}>
          <div className={"flex flex-col gap-2"}>
            <RadioGroup defaultValue="comfortable">
              <h2 className={"flex items-center gap-1 text-[20px] font-[900] text-white"}>
                <ArrowDownUp className={"h-5 w-5 !text-white"} />
                Position to display socials
              </h2>
              <div className={"flex items-center justify-between"}>
                <div className={"flex flex-col items-center gap-2"}>
                  <svg data-v-3979d77a="" width="158" height="98" viewBox="0 0 158 98" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect data-v-3979d77a="" x="0.5" y="1.37988" width="157" height="96" rx="3.5" fill="#101010" stroke="#101010"></rect> <rect data-v-3979d77a="" x="4.5" y="5.37988" width="149" height="87.6667" rx="3.5" fill="#000" stroke="#000"></rect> <rect data-v-3979d77a="" x="32.5" y="41.6201" width="92.3333" height="15" rx="7.5" fill="#131313" stroke="#131313"></rect> <rect data-v-3979d77a="" x="32.5" y="61.6201" width="92.3333" height="15" rx="7.5" fill="#131313" stroke="#131313"></rect>{" "}
                    <path
                      data-v-3979d77a=""
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M55.0918 25.3918C55.0918 23.6005 56.5439 22.1484 58.3352 22.1484H62.7832C64.5745 22.1484 66.0266 23.6005 66.0266 25.3918V29.8399C66.0266 31.6311 64.5745 33.0832 62.7832 33.0832H58.3352C56.5439 33.0832 55.0918 31.6311 55.0918 29.8399V25.3918ZM58.3352 22.7044C56.851 22.7044 55.6478 23.9076 55.6478 25.3918V29.8399C55.6478 31.324 56.851 32.5272 58.3352 32.5272H62.7832C64.2674 32.5272 65.4706 31.324 65.4706 29.8399V25.3918C65.4706 23.9076 64.2674 22.7044 62.7832 22.7044H58.3352ZM63.8952 24.9285H63.1539V24.3725H63.8952V24.9285ZM58.0572 27.6158C58.0572 26.234 59.1774 25.1138 60.5592 25.1138C61.941 25.1138 63.0612 26.234 63.0612 27.6158C63.0612 28.9977 61.941 30.1179 60.5592 30.1179C59.1774 30.1179 58.0572 28.9977 58.0572 27.6158ZM60.5592 25.6698C59.4844 25.6698 58.6132 26.5411 58.6132 27.6158C58.6132 28.6906 59.4844 29.5618 60.5592 29.5618C61.6339 29.5618 62.5052 28.6906 62.5052 27.6158C62.5052 26.5411 61.6339 25.6698 60.5592 25.6698Z"
                      fill="#fff"
                    ></path>{" "}
                    <path
                      data-v-3979d77a=""
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M73.6289 27.5602C73.6289 24.5406 76.0767 22.0928 79.0963 22.0928C82.1159 22.0928 84.5637 24.5406 84.5637 27.5602C84.5637 30.5797 82.1159 33.0276 79.0963 33.0276C76.0767 33.0276 73.6289 30.5797 73.6289 27.5602ZM79.0963 22.6488C76.3838 22.6488 74.1849 24.8477 74.1849 27.5602C74.1849 30.1793 76.2351 32.3197 78.8183 32.4638V28.5795H77.2429V28.0235H78.8183V26.8188C78.8183 25.8464 79.6066 25.0581 80.579 25.0581H80.9496V25.6141H80.579C79.9137 25.6141 79.3743 26.1535 79.3743 26.8188V28.0235H80.9496V28.5795H79.3743V32.4638C81.9574 32.3197 84.0077 30.1793 84.0077 27.5602C84.0077 24.8477 81.8088 22.6488 79.0963 22.6488Z"
                      fill="#fff"
                    ></path>{" "}
                    <path
                      data-v-3979d77a=""
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M98.28 22.3701H98.836V23.0859C98.836 24.7113 100.154 26.0289 101.779 26.0289V26.5849C100.544 26.5849 99.4587 25.9453 98.836 24.9792V30.2437C98.836 31.7808 97.5899 33.0269 96.0528 33.0269C94.5156 33.0269 93.2695 31.7808 93.2695 30.2437C93.2695 28.7065 94.5156 27.4604 96.0528 27.4604V28.0165C94.8227 28.0165 93.8255 29.0136 93.8255 30.2437C93.8255 31.4737 94.8227 32.4709 96.0528 32.4709C97.2828 32.4709 98.28 31.4737 98.28 30.2437V22.3701Z"
                      fill="#fff"
                    ></path>
                  </svg>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem className={"!border-white !text-white"} value="comfortable" id="r2" />
                    <Label htmlFor="r2" className={"!font-bold !text-white"}>
                      Top
                    </Label>
                  </div>
                </div>
                <div className={"flex flex-col items-center gap-2"}>
                  <svg data-v-3979d77a="" width="158" height="98" viewBox="0 0 158 98" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect data-v-3979d77a="" x="0.5" y="1.37988" width="157" height="96" rx="3.5" fill="#101010" stroke="#101010"></rect> <rect data-v-3979d77a="" x="4.5" y="5.37988" width="149" height="87.6667" rx="3.5" fill="#000" stroke="#000"></rect> <rect data-v-3979d77a="" x="32.5" y="22.5" width="92.3333" height="15" rx="7.5" fill="#131313" stroke="#131313"></rect> <rect data-v-3979d77a="" x="32.5" y="42.5" width="92.3333" height="15" rx="7.5" fill="#131313" stroke="#131313"></rect>{" "}
                    <path
                      data-v-3979d77a=""
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M55.0918 69.3918C55.0918 67.6005 56.5439 66.1484 58.3352 66.1484H62.7832C64.5745 66.1484 66.0266 67.6005 66.0266 69.3918V73.8399C66.0266 75.6311 64.5745 77.0832 62.7832 77.0832H58.3352C56.5439 77.0832 55.0918 75.6311 55.0918 73.8399V69.3918ZM58.3352 66.7044C56.851 66.7044 55.6478 67.9076 55.6478 69.3918V73.8399C55.6478 75.324 56.851 76.5272 58.3352 76.5272H62.7832C64.2674 76.5272 65.4706 75.324 65.4706 73.8399V69.3918C65.4706 67.9076 64.2674 66.7044 62.7832 66.7044H58.3352ZM63.8952 68.9285H63.1539V68.3725H63.8952V68.9285ZM58.0572 71.6158C58.0572 70.234 59.1774 69.1138 60.5592 69.1138C61.941 69.1138 63.0612 70.234 63.0612 71.6158C63.0612 72.9977 61.941 74.1179 60.5592 74.1179C59.1774 74.1179 58.0572 72.9977 58.0572 71.6158ZM60.5592 69.6698C59.4844 69.6698 58.6132 70.5411 58.6132 71.6158C58.6132 72.6906 59.4844 73.5618 60.5592 73.5618C61.6339 73.5618 62.5052 72.6906 62.5052 71.6158C62.5052 70.5411 61.6339 69.6698 60.5592 69.6698Z"
                      fill="#fff"
                    ></path>{" "}
                    <path
                      data-v-3979d77a=""
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M73.6289 71.5602C73.6289 68.5406 76.0767 66.0928 79.0963 66.0928C82.1159 66.0928 84.5637 68.5406 84.5637 71.5602C84.5637 74.5797 82.1159 77.0276 79.0963 77.0276C76.0767 77.0276 73.6289 74.5797 73.6289 71.5602ZM79.0963 66.6488C76.3838 66.6488 74.1849 68.8477 74.1849 71.5602C74.1849 74.1793 76.2351 76.3197 78.8183 76.4638V72.5795H77.2429V72.0235H78.8183V70.8188C78.8183 69.8464 79.6066 69.0581 80.579 69.0581H80.9496V69.6141H80.579C79.9137 69.6141 79.3743 70.1535 79.3743 70.8188V72.0235H80.9496V72.5795H79.3743V76.4638C81.9574 76.3197 84.0077 74.1793 84.0077 71.5602C84.0077 68.8477 81.8088 66.6488 79.0963 66.6488Z"
                      fill="#fff"
                    ></path>{" "}
                    <path
                      data-v-3979d77a=""
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M98.28 66.3701H98.836V67.0859C98.836 68.7113 100.154 70.0289 101.779 70.0289V70.5849C100.544 70.5849 99.4587 69.9453 98.836 68.9792V74.2437C98.836 75.7808 97.5899 77.0269 96.0528 77.0269C94.5156 77.0269 93.2695 75.7808 93.2695 74.2437C93.2695 72.7065 94.5156 71.4604 96.0528 71.4604V72.0165C94.8227 72.0165 93.8255 73.0136 93.8255 74.2437C93.8255 75.4737 94.8227 76.4709 96.0528 76.4709C97.2828 76.4709 98.28 75.4737 98.28 74.2437V66.3701Z"
                      fill="#fff"
                    ></path>
                  </svg>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem className={"!border-white !text-white"} value="default" id="r1" />
                    <Label htmlFor="r1" className={"!font-bold !text-white"}>
                      Bottom
                    </Label>
                  </div>
                </div>
              </div>
            </RadioGroup>
          </div>
          <div className={"flex flex-col gap-2"}>
            <h2 className={"flex items-center gap-1 text-[20px] font-[900] text-white"}>
              <ScanSearch className={"h-5 w-5 !text-white"} />
              Seo optimizing
            </h2>
            <div>
              <div className={"flex flex-col gap-5"}>
                <div>
                  <Input disabled={true} type="text" placeholder={"Example: @the_coder_o"} className={"mt-[0.5rem] cursor-not-allowed rounded-[20px] border-2 !bg-transparent px-[16px] pt-[5px] text-[1rem] text-white placeholder:font-medium placeholder:text-[#BDC3DD] focus:!border-2 focus:!border-[#63b3ed] focus:!transition"} id="hs-inline-add-on" name="hs-inline-add-on" />
                </div>
                <div>
                  <Textarea disabled={true} placeholder={"Example: Linktree. Make your link do more. Changes to metadata may take some time to appear on other platforms."} className={" mt-[0.5rem] h-[150px] cursor-not-allowed rounded-[20px] border-2 !bg-transparent px-[16px] !pt-[16px] text-[1rem] text-white !outline-none placeholder:font-medium placeholder:text-[#BDC3DD] focus:!border-2 focus:!border-[#63b3ed] focus:!transition"} />
                </div>
              </div>
            </div>
          </div>
          <div className={"flex flex-col gap-2"}>
            <h2 className={"flex items-center gap-1 text-[20px] font-[900] text-white"}>
              <Mailbox className={"!text-white"} />
              Mailing list integrations
            </h2>
            <div className={"flex flex-col gap-2.5"}>
              <div className={"rounded-[20px] border-[2px] border-white bg-transparent p-5"}>
                <div className={"mb-5 flex items-center justify-between"}>
                  <p className={"flex items-center gap-2 text-xl text-white"}>
                    Email sign-up
                    <Lock size={20} />
                  </p>
                  <Switch disabled={true} id="airplane-mode" />
                </div>
                <p className={"text-white"}>Add an email sign-up to your linkvertex for mailing list subscriptions.</p>
              </div>
              <div className={"rounded-[20px] border-[2px] border-white bg-transparent p-5"}>
                <div className={"mb-5 flex items-center justify-between"}>
                  <p className={"flex items-center gap-2 text-xl text-white"}>
                    SMS sign-up
                    <Lock size={20} />
                  </p>
                  <Switch disabled={true} id="airplane-mode" />
                </div>
                <p className={"text-white"}>Collect SMS subscribers with a sign-up field on your linkvertex.</p>
              </div>
            </div>
          </div>
          <div className={"flex flex-col gap-2"}>
            <h2 className={"flex items-center gap-1 text-[20px] font-[900] text-white"}>
              <HandHeart className={"!text-white"} />
              Support banner
            </h2>
            <div className={"rounded-[20px] border-[2px] border-white bg-transparent p-5"}>
              <div className={"mb-5 flex items-center justify-between"}>
                <p className={"flex items-center gap-2 text-xl text-white"}>
                  Show your support
                  <Lock size={20} />
                </p>
                <Switch disabled={true} id="airplane-mode" />
              </div>
              <p className={"text-white"}>Show your support for important causes with a profile banner. Only one banner can be active at a time.</p>
            </div>
          </div>
          <div className={"flex flex-col gap-2"}>
            <h2 className={"flex items-center gap-1 text-[20px] font-[900] text-white"}>
              <CircleMinus className={"!text-white"} />
              Sensitive material
            </h2>
            <div className={"rounded-[20px] border-[2px] border-white bg-transparent p-5"}>
              <div className={"mb-5 flex justify-between"}>
                <p className={"text-white"}>Display a sensitive content warning before visitors can view your profile.</p>
                <Switch disabled={true} id="airplane-mode" />
              </div>
            </div>
          </div>
          <div className={"flex flex-col gap-2"}>
            <h2 className={"flex items-center gap-1 text-[20px] font-[900] text-white"}>
              <Archive className={"!text-white"} />
              Archive
            </h2>
            <div className={"rounded-[20px] border-[2px] border-white bg-transparent p-5"}>
              <div className={"flex flex-col justify-between gap-3"}>
                <p className={"text-white"}>Move all your inactive links to the archive and keep their analytics data.</p>
                <Button disabled={true} className={"rounded-[21px] !bg-[#90CDF4] text-[16px] font-bold text-black hover:!bg-[#90CDF4]/90"}>
                  Archive all inactive links
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
