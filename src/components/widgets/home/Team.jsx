import { Facebook, Twitter, YouTube, Instagram } from "@mui/icons-material";
import { useEffect } from "react";
import { FaFacebookF } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";
export default function Team() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      easing: "ease-in-out", // Animation easing
      offset: 100, // Offset from the top before animation starts
      delay: 0, // Delay in milliseconds
    });
  }, []);
  const team = [
    { name: "John Doe", role: "CEO", image: "/images/team/team_01.jpg" },
    {
      name: "Jane Smith",
      role: "Manager",
      image: "/images/team/image_01.jpg",
    },
    {
      name: "Alice Johnson",
      role: "Designer",
      image: "/images/team/team_03.jpg",
    },
    {
      name: "Alice Johnson",
      role: "Enginner",
      image: "/images/team/images.jpg",
    },
  ];
  const icon = [
    {
      link: "https;//www.facebook.com",
      icon: <FaFacebookF />,
    },
    {
      link: "https;//www.twitter.com",
      icon: <Twitter />,
    },
    {
      link: "https;//www.youtube.com",
      icon: <YouTube />,
    },
    {
      link: "https;//www.instagram.com",
      icon: <Instagram />,
    },
  ];
  return (
    <div className="flex flex-col items-center font-semibold  font-sans my-8">
      <p>Lorem Ipsum is simply dummy text</p>
      <h2 className="text-3xl font-bold mb-4">
        Our <span className=" text-red-500 font-sans ">Team</span>
      </h2>
      <section className="py-6 flex flex-row items-center justify-center gap-4 w-[80%] mx-auto">
        {team.map((item, i) => (
          <div
            data-aos="zoom-in"
            key={i}
            className="w-[60%] text-center relative bg-white group  rounded-lg shadow-lg  overflow-hidden  transition-transform duration-500 ease-in-out transform hover:scale-105"
          >
            <Image
              src={item.image}
              alt={item.name}
              width={300}
              height={200}
              className="w-full h-[250px] mx-auto "
            />

            {/* Social Media Icons */}
            <div className="flex justify-center gap-4 -bottom-10 absolute left-0 group-hover:bottom-1 duration-500 transition-transform ease-in-out  w-full rounded-md ">
              {icon.map((item, i) => (
                <a
                  key={i}
                  href={item.link}
                  className="text-red-500 hover:text-red-700 bg-red-700 rounded-md py-1 px-[10px] flex items-center justify-center transition-transform duration-500"
                  aria-label="Facebook"
                >
                  {item.icon}
                  <FaFacebookF
                    className=" text-black text-[18px] bg-white p-1 rounded-md"
                    style={{ transition: "transform 0.5s 1 ease-in-out" }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.transform = "rotateY(360deg)")
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.transform = "rotateY(0deg)")
                    }
                  />
                </a>
              ))}
              <a
                href="#"
                className="text-red-500 hover:text-red-700 bg-red-700 rounded-md py-1 px-[10px] flex items-center justify-center transition-transform duration-500"
                aria-label="Facebook"
              >
                <Twitter className=" text-white text-sm" />
              </a>{" "}
              <a
                href="#"
                className="text-red-500 hover:text-red-700 bg-red-700 rounded-md py-1 px-[10px] flex items-center justify-center transition-transform duration-500"
                aria-label="Facebook"
              >
                <YouTube className=" text-white text-sm" />
              </a>{" "}
              <a
                href="#"
                className="text-red-500 hover:text-red-700 bg-red-700 rounded-md py-2 px-[10px] flex items-center justify-center transition-transform duration-500"
                aria-label="Facebook"
              >
                <Instagram className=" text-white text-sm" />
              </a>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}
