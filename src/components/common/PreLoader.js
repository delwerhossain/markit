import { Audio } from "react-loader-spinner";

const PreLoader = () => {
  return (
    <div id="preloader">
      {/* <div className="preloader">
        <span />
        <span />
      </div> */}
      <Audio color="#00BFFF" height={80} width={80} />
    </div>
  );
};

export default PreLoader;
