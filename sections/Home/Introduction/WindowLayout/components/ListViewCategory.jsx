import React from "react";
import { CategoriesContainer, CategoryBox } from "../window.styled";

const ListViewCategory = ({ file }) => {
  return (
    <CategoriesContainer>
      {file.category
        ? file.category.map((category, idx) => (
            <CategoryBox key={idx}>{category}</CategoryBox>
          ))
        : null}
    </CategoriesContainer>
  );
};

export default ListViewCategory;
