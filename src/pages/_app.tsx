import { getI18nProps, Locale, messagesMap } from "@lib/i18n";
import { ThemeProvider } from "next-themes";
import { QueryClient, QueryClientProvider } from "react-query";
import { AnimatePresence } from "framer-motion";
import { NextIntlClientProvider } from "next-intl";
import { AppProps } from "next/app";

import MyFooter from "@components/layout/MyFooter";
import MyNavbar from "@components/layout/MyNavBar";
import "@styles/globals.css";
import { GetStaticProps } from "next";

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
