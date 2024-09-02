import React from "react";
import { CategoriesContainer, CategoryBox } from "../window.styled";

const ListViewCategory = ({ file }) => {
  const getCategoryColor = (category) => {
    console.log("category", category);

    switch (category) {
      case "Css":
        return "#b8339545";
      //" #7a79ff45"
      case "Js":
        return "#ffe92778";
      case "Html":
        return "#df655e78";

      default:
        return "gray";
    }
  };

  return (
    <CategoriesContainer>
      {file.category
        ? file.category.map((category, idx) => (
            <CategoryBox backgColor={getCategoryColor(category)} key={idx}>
              {category}
            </CategoryBox>
          ))
        : null}
    </CategoriesContainer>
  );
};

export default ListViewCategory;
