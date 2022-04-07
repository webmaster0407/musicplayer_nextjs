import classes from "./FeaturedBody.module.css";
import { BiHomeAlt, BiSearchAlt2, BiWindows } from "react-icons/bi";

const contents = [
  { text: "GoldFish" },
  { text: "TheUnder" },
  { text: "Robyn The Bank" },
  { text: "Deadly Avenger" },
  { text: "Tommy Will" },
  // {text: "Soul Push"},
  // {text: "Dubkiller"},
];

const works = [
  {
    title: "Browse Sounds",
    text: "Find the music that brings your visuals to life.",
  },
  {
    title: "Mint Your License",
    text: "Get licenses for NFT art and metaverse productions so you are covered for any on-chain visual projects.",
  },
  {
    title: "Download and Go",
    text: "Grab your audio file and start creating!",
  },
];

const FeaturedBody = () => {
  return (
    <div className={classes.featuredBody}>
      <div className={classes.title}>Featured Artists</div>
      <div className={classes.field}>
        {contents.map((content, i) => (
          <div key={i} className={classes.img_field}>
            <div className={classes.text}>{content.text}</div>
          </div>
        ))}
      </div>
      <div className={classes.title}>Featured Songs</div>
      <div className={classes.field}>
        {contents.map((content, i) => (
          <div key={i} className={classes.img_field}>
            <div className={classes.text}>{content.text}</div>
          </div>
        ))}
      </div>
      <div className={classes.title}>Featured Genres</div>
      <div className={classes.field}>
        {contents.map((content, i) => (
          <div key={i} className={classes.img_field}>
            <div className={classes.text}>{content.text}</div>
          </div>
        ))}
      </div>

      <div className={classes.title}>How It Works</div>
      <div className={classes.work}>
        {works.map((work, i) => (
          <div className={classes.work_field} key={i}>
            <div className={classes.icon_field}>
              <BiSearchAlt2 className={classes.icon} />
            </div>
            <div className={classes.work_title}>{work.title}</div>
            <div className={classes.work_text}>{work.text}</div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default FeaturedBody;
