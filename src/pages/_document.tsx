import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
} from "next/document";

class MyDocument extends Document<{ locale?: string }> {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);

    return {
      ...initialProps,
      locale: ctx.locale || "en",
    };
  }

  render() {
    return (
      <Html lang={this.props.locale || "en"}>
        <Head>
          <meta
            name="description"
            content="Full Stack Web Developer looking for job"
          />

          <meta
            name="keywords"
            content="react, node, python, rails, kotlin, freelancer, Full Stack developer"
          />
        </Head>

        <body className="custom-card-bg">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
