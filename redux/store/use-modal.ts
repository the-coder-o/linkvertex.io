// store/useModalStore.ts
import create from 'zustand';
import {BeforeInstallPromptEvent} from "@/types/install-app.type";

type ModalState = {
  isModalOpen: boolean;
  deferredPrompt: BeforeInstallPromptEvent | null;
  openModal: (event: BeforeInstallPromptEvent) => void;
  closeModal: () => void;
  setDeferredPrompt: (event: BeforeInstallPromptEvent | null) => void;
};

export const useModalStore = create<ModalState>((set) => ({
  isModalOpen: false,
  deferredPrompt: null,
  openModal: (event) => set({ isModalOpen: true, deferredPrompt: event }),
  closeModal: () => set({ isModalOpen: false }),
  setDeferredPrompt: (event) => set({ deferredPrompt: event }),
}));
