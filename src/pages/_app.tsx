import { ThemeProvider } from "next-themes";
import { QueryClient, QueryClientProvider } from "react-query";
import MyNavbar from "@/components/layout/MyNavBar";
import "@/styles/globals.css";
import { AnimatePresence } from "framer-motion";
import ThemeAndLanguageToggler from "@/components/ui/ThemeAndLanguageToggler";
import { NextIntlClientProvider } from "next-intl";
import Sidebar from "@/components/Profile/MobileProfile";
import { AppProps } from "next/app";
import MyFooter from "@/components/layout/MyFooter";
import useDeviceType from "@/hooks/useDeviceType";
import Profile from "@/components/Profile/Profile";

const queryClient = new QueryClient();

function MyApp({ Component, pageProps, router }: AppProps) {
  return (
    <NextIntlClientProvider
      messages={pageProps.messages}
      locale={router.locale || "en"}
      timeZone="Asia/Kathmandu"
    >
      <ThemeProvider attribute="class" defaultTheme="system">
        <div className="overflow-hidden max-w-7xl mx-auto">
          <MyNavbar />
          <QueryClientProvider client={queryClient} contextSharing={true}>
            <AnimatePresence>
              <Component {...pageProps} key={router.route} />
            </AnimatePresence>
          </QueryClientProvider>
          <MyFooter />
        </div>
      </ThemeProvider>
    </NextIntlClientProvider>
  );
}

export default MyApp;
