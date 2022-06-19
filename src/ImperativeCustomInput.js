import { forwardRef, useImperativeHandle, useState } from "react";

export default forwardRef(function CustomInput(props, ref) {
  const [value, setValue] = useState("");

  useImperativeHandle(ref, () => {
    return {
      reset: () => setValue(""),
    };
  });

  return (
    <input
      {...props}
      value={value}
      onChange={(event) => setValue(event.target.value)}
      style={{ color: "red" }}
    />
  );
});
