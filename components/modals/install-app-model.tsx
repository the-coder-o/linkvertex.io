import React from 'react';
import {useModalStore} from "../../redux/store/use-modal";

const InstallModal: React.FC = () => {
    const { closeModal, deferredPrompt } = useModalStore();


    const onInstall = async () => {
        // Show the prompt that was deferred earlier
        if (deferredPrompt) {
            deferredPrompt.prompt();
            const choiceResult = await deferredPrompt.userChoice;
            if (choiceResult.outcome === 'accepted') {
                console.log('User accepted the install prompt');
            } else {
                console.log('User dismissed the install prompt');
            }

            // After the prompt, nullify the deferredPrompt and close the modal
            useModalStore.getState().setDeferredPrompt(null);
            closeModal();
        }
    };

    return (
        <div className={''}>
            <div className={'!text-white'}>
                <h1>Install app?</h1>
                <p>yourdomain.com</p>
                <div className={''}>
                    <button className={'!text-white'} onClick={onInstall}>Install</button>
                    <button className={'!text-white'} onClick={closeModal}>Cancel</button>
                </div>
            </div>
        </div>
    );
};

export default InstallModal;
