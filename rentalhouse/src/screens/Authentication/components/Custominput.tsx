import { FC } from "react"


const Custominput:FC<Custominputprops> = ({labeled,inputType,placeholder}) => {
  return (
    <>
      <span
        style={{
          marginLeft: "5%",
          marginTop:"5%",
          color:"blue",
          fontWeight:"bold"
        }}
      >
        {labeled}
      </span>
      <input
        style={{
          backgroundColor: "whitesmoke",
          width: "90%",
          marginLeft: "5%",
        }}
        placeholder={placeholder}
        type={inputType}
      />
    </>
  );
}

export default Custominput