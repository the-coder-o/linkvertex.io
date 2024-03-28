"use client";

import * as z from "zod";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { FileUpload } from "@/app/(root)/dashboard/edit/components/file-upload";

import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";

const formSchema = z.object({
  imageUrl: z.string().min(1, {
    message: "Profile image is required.",
  }),
});

export const UploadAvatarModal = () => {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      imageUrl: "",
    },
  });

  const isLoading = form.formState.isSubmitting;

  return (
    <Dialog>
      <div className={"fixed bottom-0 left-0 right-0 top-0 z-[600] bg-black/10 backdrop-blur-lg transition-all delay-150"} />
      <DialogContent className="z-[700] overflow-hidden bg-white p-0 text-black">
        <DialogHeader className="px-6 pt-8">
          <DialogTitle className="text-center text-2xl font-bold">Customize your avatar</DialogTitle>
          <DialogDescription className="text-center text-zinc-500">Give your server a personality with a name and an image. You can always change it later.</DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form className="space-y-8">
            <div className="space-y-8 px-6">
              <div className="flex items-center justify-center text-center">
                <FormField
                  control={form.control}
                  name="imageUrl"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <FileUpload endpoint="profileImage" value={field.value} onChange={field.onChange} />
                      </FormControl>
                    </FormItem>
                  )}
                />
              </div>
            </div>
            <DialogFooter className="bg-gray-100 px-6 py-4">
              <Button disabled={isLoading} className={"save-bg flex w-full items-center justify-center gap-2 rounded-[18px] bg-[#9AE6B4] px-[16px] py-5 text-[16px] !font-bold text-black hover:bg-[#9AE6B4]/90"}>
                Create
              </Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};
