import { useTheme } from "next-themes";
import { FaGlobe, FaMoon, FaSun } from "react-icons/fa6";
import { useRouter } from "next/router";
import { useLocale } from "next-intl";
import { Dropdown, MenuProps, Space, Switch } from "antd";

const ThemeAndLanguageToggler = () => {
  const { theme, setTheme } = useTheme();
  const locale = useLocale();
  const router = useRouter();
  const { pathname, asPath, query } = router;

  const changeTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  const handleLanguageSwitch = (target: "en" | "np" | "jp") => {
    const nextLocale = locale === target ? "en" : target;
    router.push({ pathname, query }, asPath, { locale: nextLocale });
  };

  const changeLocaletoEn = () => handleLanguageSwitch("en");
  const changeLocaletoJp = () => handleLanguageSwitch("jp");
  const changeLocaletoNp = () => handleLanguageSwitch("np");

  const items: MenuProps["items"] = [
    {
      key: "1",
      onClick: changeLocaletoNp,
      label: "नेपाली",
    },
    {
      key: "2",
      onClick: changeLocaletoEn,
      label: "English",
    },
    {
      key: "3",
      onClick: changeLocaletoJp,
      label: "日本語",
    },
  ];

  return (
    <div className="flex items-center">
      <Space className="px-2 my-1 rounded-r-md rotate-0">
        <Switch
          checkedChildren={<FaSun className="mt-1" />}
          unCheckedChildren={<FaMoon />}
          onClick={changeTheme}
        />
      </Space>
      <Dropdown
        menu={{
          items,
          className: "glass-card backdrop-blur-md",
          style: {
            backdropFilter: "blur(20px)",
            WebkitBackdropFilter: "blur(20px)",
            backgroundColor: "transparent",
            border:"1px var(--foreground)",
            color:"var(--muted-foreground)",
            boxShadow: "0 8px 32px rgba(0, 0, 0, 0.2)"
          },
        }}
        placement="bottomLeft"
      >
        <Space className="w-8 h-6 p-0 ring-0 border-0">
          <FaGlobe className="w-5 h-5 text-foreground rounded-2xl shadow-2xl ring-foreground p-0.5" />
        </Space>
      </Dropdown>
    </div>
  );
};

export default ThemeAndLanguageToggler;
