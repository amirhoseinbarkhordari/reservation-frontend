import type {FunctionComponent, ReactNode} from "react";
import rtlPlugin from 'stylis-plugin-rtl';
import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';
import { prefixer } from 'stylis';
import {useRouter} from "next/router";
import {useEffect, useState} from "react";
import getLanguageDir from "../services/getLanguageDir/getLanguageDir";

const LocaleDirectionSetter: FunctionComponent<{children: ReactNode}> = (props) => {
    const router = useRouter();
    const [locale, setLocale] = useState<string | undefined>(undefined);
    console.log("locale", locale)

    useEffect(() => {
        setLocale(router.locale);
        document.dir = getLanguageDir(router.locale);
    }, [router.locale])

    if(getLanguageDir(locale) === "rtl") {
        const cacheRtl = createCache({
            key: 'muirtl',
            stylisPlugins: [prefixer, rtlPlugin],
        });
        return <CacheProvider value={cacheRtl}>{props.children}</CacheProvider>;
    }
    else return (<>{props.children}</>);
}

export default LocaleDirectionSetter;