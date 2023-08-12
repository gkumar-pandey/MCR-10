import { Link } from "react-router-dom";

export const SideBar = () => {
  const navLinks = [
    { name: "Dashboard", link: "/" },
    { name: "Departments", link: "/department" },
    { name: "Products", link: "/products" }
  ];

  return (
    <div className=" bg-gray-900 p-2 text-white h-screen ">
      <div>
        {navLinks.map(({ name, link }, idx) => (
          <div className=" p-4 " key={idx}>
            <Link to={link}>{name}</Link>
          </div>
        ))}
      </div>
    </div>
  );
};
