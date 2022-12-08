import { ArrowBackOutlined } from "@material-ui/icons";
import { Link } from "react-router-dom";
// import { useSelector } from "react-redux";
import YouTube from "react-youtube"
import "./watch.css";

export default function Watch() {
    // const { trailerUrl } = useSelector((state) => state.url);
    const trailer = "d9MyW72ELq0"
    // {trailerUrl && console.log(trailerUrl)}

    const opts = {
        height: "100vh",
        width: "100%",
        playerVars: {
            autoplay: 1,
            controls: 0,
            rel: 0,
            showinfo: 0,
            mute: 1,
            loop: 1
        }
      }

      
  return (
    <div className="watch">
      <Link to="/">
        <div className="back">
          <ArrowBackOutlined />
          Home
        </div>
      </Link>
      {trailer && <YouTube  className="video" videoId={trailer} opts={opts} />}
      {/* <video className="video" autoPlay progress controls src={movie.video} /> */}
    </div>
  );
}