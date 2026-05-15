import { getI18nProps, Locale, messagesMap } from "@lib/i18n";
import { ThemeProvider } from "next-themes";
import { QueryClient, QueryClientProvider } from "react-query";
import { AnimatePresence } from "framer-motion";
import { NextIntlClientProvider } from "next-intl";
import { AppProps } from "next/app";
import { Shader, Aurora } from 'shaders/react'

import MyFooter from "@components/layout/MyFooter";
import MyNavbar from "@components/layout/MyNavBar";
import { GetStaticProps } from "next";
import { kyokasho } from "@/lib/fonts";
import "@styles/globals.css";

const queryClient = new QueryClient();

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  const normalizedLocale = locale || "en";

  return {
    props: {
      ...(await getI18nProps(normalizedLocale)),
    },
  };
};

function MyApp({ Component, pageProps, router }: AppProps) {
  return (
    <NextIntlClientProvider
      locale={router.locale || "en"}
      messages={pageProps.messages || messagesMap[router.locale as Locale]}
      // timeZone="Asia/Kathmandu"
      onError={(error) => {
        if (error.code === "MISSING_MESSAGE") {
          console.warn("Missing message:", error.name);
        }
      }}
    >
      <ThemeProvider attribute="class" defaultTheme="system">
      <div className="absolute inset-0 -z-10">
        <Shader className="w-full h-full">
          <Aurora intensity={80} balance={0.7} seed={0.8} />
        </Shader>
      </div>
        <div
          className={`overflow-hidden max-w-7xl mx-auto + ${kyokasho.variable}`}
        >
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
