import React from "react";

export const CategorySearchSub = ({ callBack, data, level = 0 }) => {
  if (!Array.isArray(data)) return null;

  return (
    <>
      {data.map((item) => (
        <React.Fragment key={item.id}>
          <option value={item.id}>
            {`${"--".repeat(level)} ${item.name}`}
          </option>

          {Array.isArray(item.children) && item.children.length > 0 && (
            <CategorySearchSub
              callBack={callBack}
              data={item.children}
              level={level + 1}
            />
          )}
        </React.Fragment>
      ))}
    </>
  );
};