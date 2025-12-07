import Link from "next/link";
import { FaInstagram, FaTiktok, FaTwitter, FaWhatsapp } from "react-icons/fa";

const socials = [
  {
    Icon: <FaTiktok />,
    path: "https://www.tiktok.com/@cheta268?_r=1&_t=ZS-91ztjFjAsFx",
  },
  {
    Icon: <FaInstagram />,
    path: "https://www.instagram.com/praisedonatus22?igsh=bmxhNWFpcG14aGhs",
  },
  { Icon: <FaTwitter />, path: "" },
  {
    Icon: <FaWhatsapp />,
    path: "https://chat.whatsapp.com/IpS88KJiJsJC9GySjenJcl?mode=ems_share_t",
  },
];

const Social = ({
  containerStyles,
  iconStyles,
}: {
  containerStyles: string;
  iconStyles: string;
}) => {
  return (
    <div className={containerStyles}>
      {socials.map((item, index) => {
        return (
          <Link
            key={index}
            href={item.path}
            className={iconStyles}
            target="_blank"
          >
            {item.Icon}
          </Link>
        );
      })}
    </div>
  );
};

export default Social;
