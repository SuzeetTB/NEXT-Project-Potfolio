import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  //   static async getInitialProps(ctx: DocumentContext) {
  //     const initialProps = await Document.getInitialProps(ctx)

  //     return initialProps
  //   }
  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Inspiration&family=Monoton&display=swap"
            rel="stylesheet"
          />
          <meta
            name="description"
            content="Full Stack Web Developer looking for job "
          />
          <meta
            name="keywords"
            content="react, node, python , rails, kotlin, freelancer, Full Stack developer "
          />
        </Head>
        <body className="bg-gradient-to-r from-light-500 to-light-900 dark:from-zeit-950 dark:to-zeit">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
