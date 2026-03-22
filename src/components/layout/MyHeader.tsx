import Head from "next/head";

interface HeaderProps {
  title?: string;
  subtitle?: string;
  content?:string
}

export default function MyHeader({ title, subtitle }: HeaderProps) {
  return (
    <Head>
      <title>
        {title ?? "Suzeet Twanabasu"} | {subtitle ?? "Full Stack Developer"}
      </title>
      <link rel="icon" href="assets/images/my_logo.png" type="image/png"></link>
      <meta
        name="description"
        content= {title ?? "Full Stack Web Developer hunting for job"}
      />
    </Head>
  );
}
