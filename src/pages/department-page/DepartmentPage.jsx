import { Link } from "react-router-dom";
import { DepartmentCard } from "../../components";
import { useInventory } from "../../context/inventory-context";
import { useEffect } from "react";
import { Container } from "../../components/container/container";

const DepartmentPage = () => {
  const { setFilter } = useInventory();
  const departments = ["Kitchen", "Clothing", "Toys"];

  const cardClickHandler = (value) => {
    setFilter((pre) => ({ ...pre, department: value.toLowerCase() }));
  };

  useEffect(() => {
    setFilter((pre) => ({ ...pre, department: "all" }));
  }, []);

  return (
    <div>
      <Container>
        <div className="flex flex-row  ">
          {departments.map((ele, idx) => (
            <Link
              to={"/products"}
              key={idx}
              onClick={() => cardClickHandler(ele)}
            >
              <DepartmentCard text={ele} />
            </Link>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default DepartmentPage;
