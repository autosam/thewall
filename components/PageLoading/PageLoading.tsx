import { faCircleNotch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const PageLoading = () => {
  return (
    <div className="fixed w-screen h-screen bg-transparent top-0 left-0 inline-flex justify-center items-center">
      <FontAwesomeIcon
        icon={faCircleNotch}
        style={{ width: "2em" }}
        className="fa-spin fa-2xl"
      ></FontAwesomeIcon>
    </div>
  );
};
