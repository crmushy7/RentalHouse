import { FC } from "react"


const Custominput:FC<Custominputprops> = ({labeled,inputType,placeholder}) => {
  return (
    <>
      <span
        style={{
          marginLeft: "5%",
          marginTop: "5%",
          color: "#AFEEEE",
          fontWeight: "bold",
        }}
      >
        {labeled}
      </span>
      <input
        style={{
          backgroundColor: "whitesmoke",
          width: "90%",
          marginLeft: "5%",
          padding: "2%",
          borderRadius: "20px",
        }}
        placeholder={placeholder}
        type={inputType}
      />
    </>
  );
}

export default Custominput