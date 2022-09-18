import type {AppProps} from 'next/app'
import {CssBaseline, ThemeProvider} from "@mui/material";
import DefaultTheme from "../modules/_app/theme/DefaultTheme";
import "../modules/_app/assets/stylesheet/fonts.css";
import LocaleDirectionSetter from "../modules/l10n/components/LocaleDirectionSetter";
import {useRouter} from "next/router";
import {NextIntlProvider} from 'next-intl';


function MyApp({Component, pageProps}: AppProps) {
    const router = useRouter();

    return (
        <>
            <LocaleDirectionSetter>
                <NextIntlProvider messages={pageProps.messages}>
                    <ThemeProvider theme={DefaultTheme(router.locale ?? "en")}>
                        <CssBaseline/>
                        <Component {...pageProps} />
                    </ThemeProvider>
                </NextIntlProvider>
            </LocaleDirectionSetter>
        </>
    );
}


export default MyApp
