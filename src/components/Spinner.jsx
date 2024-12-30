import GridLoader from "react-spinners/GridLoader";

const override = {
  display: "block",
  margin: "0 auto",
  borderColor: "#4333ac",
};

const Spinner = () => {
  return (
    <div className="sweet-loading text-center">
    <GridLoader
    color="#4333ac"
    loading={true}
    cssOverride={override}
    size={30}
    aria-label="Loading Spinner"
    data-testid="loader"
  />
  </div>
  )
}

export default Spinner