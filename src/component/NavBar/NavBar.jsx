import {Navbar, NavbarBrand, NavbarMenuToggle, NavbarMenuItem, NavbarMenu, NavbarContent, NavbarItem, Link, Button, Input} from "@nextui-org/react";
import { FaLinkedin, FaXTwitter } from "react-icons/fa6";
import { FaRegCopyright } from "react-icons/fa6";
import React from "react";

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems = [
    {text: "Home", icon:"homeIcon.svg"},
    {text: "Contact Us", icon:"phoneIcon.svg"},
    {text:  "FAQs", icon:"questionIcon.svg"}
  ];
  return (
    <Navbar
      isBordered
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
      className="w-[100%]"
    >

      <NavbarContent className="sm:hidden pr-3">
        <NavbarBrand>
          <Link color="foreground" href="/">
            <img src="logo.png" alt="gartekcloud" />
          </Link>
        </NavbarBrand>
      </NavbarContent>


      <NavbarContent className="hidden sm:flex">
        <NavbarBrand>
          <Link color="foreground" href="/">
              <img src="logo.png" alt="gartekcloud" />
          </Link>
        </NavbarBrand>
        <NavbarContent>
          <Input type="email" placeholder="Search" />
        </NavbarContent>
        <NavbarItem>
          <Link color="foreground" href="#">
            About
          </Link>
        </NavbarItem>
        <NavbarItem >
          <Link href="#" color="foreground">
            FAQs
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="/contact">
            Contact Us
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Button as={Link} className="bg-[#FFA500] text-white rounded" href="/waitlist" variant="flat">
            Join Waitlist
          </Button>
        </NavbarItem>
      </NavbarContent>

      <NavbarMenu>
        {menuItems.map((item, index) => (
          <div className="flex flex-row" key={`${item}-${index}`}>
            <NavbarMenuItem>
              <Link
                className="w-full"
                
                color={
                  index === 2 ? "warning" : index === menuItems.length - 1 ? "danger" : "foreground"
                }
                href={
                  index === 1 && "/waitlist"
                }
                size="lg"
              >
                <div className="flex flex-row gap-5">
                  <span className="text-[#FFA500]">
                    <img src={item.icon} alt={item.icon} />
                  </span>
                  <span>
                    {item.text}
                  </span>
                </div>
              </Link>
            </NavbarMenuItem>
          </div>
        ))}
        <Link href="/waitlist">
          <div className="bg-[#5E48DB] flex flex-col items-center h-32 w-32 justify-center shadow-2xl shadow-black rounded-[100%] p-1 mx-auto text-white">
            <p>join</p>
            <p>Waitlist</p>
            <div>
              <img src="arrow-up.png" alt="arrow" />
            </div>
          </div>
        </Link>
        <div className="gap-5 mt-20 flex items-center justify-center">
          <span className="bg-[#FFA500] bg-opacity-40 p-2 rounded-full shadow-xl shadow-slate-500">
            <FaXTwitter />
          </span>
          <span className="bg-[#FFA500] bg-opacity-40 p-2 rounded-full shadow-xl shadow-slate-500">
            <FaLinkedin />
          </span>
        </div>
        <div className="flex mt-20 items-center gap-1 mx-auto ">
            <div>
              <FaRegCopyright className="text-[#FFA500] font-extrabold text-2xl" />
            </div>
            <div>
              <p className="text-orange-500 text-2xl font-extrabold">2024 Gartekcloude</p>
            </div>
        </div>
      </NavbarMenu>

      <NavbarContent className="sm:hidden" justify="end">
        <NavbarMenuToggle aria-label={isMenuOpen ? "Close menu" : "Open menu"} />
      </NavbarContent>
    </Navbar>
  );
}
