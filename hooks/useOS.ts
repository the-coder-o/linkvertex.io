'use client'

import {useEffect, useState} from "react";

export const useOS = () => {
    const [os, setOs] = useState<'windows' | 'macos' | 'android' | 'unknown'>('unknown');

    useEffect(() => {
        const getOS = (): 'windows' | 'macos' | 'android' | 'unknown' => {
            if (typeof window !== 'undefined') {
                const platform = navigator.platform.toLowerCase();
                const userAgent = navigator.userAgent.toLowerCase();

                if (platform.includes('win')) return 'windows';
                if (platform.includes('mac')) return 'macos';
                if (userAgent.includes('android')) return 'android';
            }
            return 'unknown';
        };

        setOs(getOS());
    }, []);

    return os;
};
