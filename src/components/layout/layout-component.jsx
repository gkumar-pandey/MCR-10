import "./layout.style.css";

// eslint-disable-next-line react/prop-types
export const LayoutComponent = ({ children }) => {
  return (
    <div className="layout h-screen ">
      <div className="">{children[0]}</div>
      <div className="">{children[1]}</div>
    </div>
  );
};
