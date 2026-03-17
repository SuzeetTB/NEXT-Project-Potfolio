import { useTheme } from "next-themes";
import {
  FaLanguage,
  FaMoon,
  FaSun,
} from "react-icons/fa6";
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
      <Dropdown menu={{ items }} placement="bottomLeft">
        <Space className="w-8 h-6 p-0 ring-0 border-0">
          <FaLanguage className="w-8 h-8 text-white" />
        </Space>
      </Dropdown>
    </div>
  );
};

export default ThemeAndLanguageToggler;
