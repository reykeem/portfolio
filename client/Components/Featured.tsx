import React from "react";
import "../styles/featured.css";
import jpeg from "../assets/jpegmarketplace.png";
import val from "../assets/valex.png";
import latchql from "../assets/latchql.png";
import GitHubIcon from "@mui/icons-material/GitHub";
import github from "../assets/icons8-github-48.png";
import tasksai1 from "../assets/tasksdb.png";
import tasksai2 from "../assets/recs.png";
import tasksai3 from "../assets/proTask.png";
import tasksai4 from "../assets/proTask2.png";
import appstore from "../assets/icons8-app-store-60.png";
import website from "../assets/icons8-internet-60.png";
import npm from "../assets/icons8-npm-64.png";
import medium from "../assets/icons8-medium-60.png";

type FeaturedPropsType = {
  featuredRef: any;
  featured1Ref: any;
  featured2Ref: any;
  featured3Ref: any;
  featured4Ref: any;
};

function Featured({
  featuredRef,
  featured1Ref,
  featured2Ref,
  featured3Ref,
  featured4Ref,
}: FeaturedPropsType) {
  return (
    <div className="featured" ref={featuredRef}>
      <div className="heading">
        <h1>Featured Projects</h1>
        <hr className="hr" />
      </div>
      <div className="latch" ref={featured4Ref}>
        <div className="tasksai-container">
          <img src={tasksai1} alt="tasksai-ss1" />
          <img src={tasksai2} alt="tasksai-ss2" />
          <img src={tasksai3} alt="tasksai-ss3" />
          <img src={tasksai4} alt="tasksai-ss4" />
        </div>
        <div className="desc">
          <div className="title-gh">
            <div className="tasksai-links">
              <a href="https://github.com/ASAPDevs/tasksAI">
                <img src={github} alt="github" />
              </a>
              <a href="https://apps.apple.com/app/id1663560874">
                <img src={appstore} alt="appstore" />
              </a>
              <a href="https://taskai.io/">
                <img src={website} alt="website" />
              </a>
            </div>
            <span className="title">tasksAI</span>
          </div>
          <span className="proj-main">
            A mobile task-organization app that uses machine learning to give
            personalized task recommendations and metrics based on users' daily
            interactions.
          </span>
          <ul className="techs-used">
            <li>React Native</li>
            <li>GraphQL</li>
            <li>Python</li>
            <li>Flask</li>
            <li>Xcode</li>
            <li>ExpoGo</li>
            <li>Redux TK</li>
            <li>Jest</li>
          </ul>
        </div>
      </div>
      <div className="latch" ref={featured1Ref}>
        <img src={latchql} alt="latchql" />
        <div className="desc">
          <div className="title-gh">
            <div className="tasksai-links">
              <a href="https://github.com/oslabs-beta/LatchQL">
                <img src={github} alt="github" />
              </a>
              <a href="https://medium.com/@mcphail.alex/latchql-c88ce527ec50">
                <img src={medium} alt="medium" />
              </a>
              <a href="https://www.npmjs.com/package/latchql">
                <img src={npm} alt="npm" />
              </a>
            </div>
            <span className="title">LatchQL</span>
          </div>
          <span className="proj-main">
            A playground application for LatchQL, an open-source middleware
            package intended to add layers of security for GraphQL API
            developers.
          </span>
          <ul className="techs-used">
            <li>GraphQL</li>
            <li>React</li>
            <li>TypeScript</li>
            <li>Node</li>
            <li>Express</li>
            <li>Redis</li>
            <li>JWT</li>
          </ul>
        </div>
      </div>
      <div className="latch" ref={featured2Ref}>
        <img src={jpeg} alt="jpeg-marketplace" />
        <div className="desc">
          <div className="title-gh">
            <a href="https://github.com/Non-Fungibles/JPEG-Marketplace">
              <img src={github} alt="github" />
            </a>
            <span className="title">JPEG Marketplace</span>
          </div>
          <span className="proj-main">
            A marketplace-simulation designed for users to buy, sell and trade
            digital assets in the form of pesudo-NFT's with 'fake' ethereum.
          </span>
          <ul className="techs-used">
            <li>React Router</li>
            <li>Context API</li>
            <li>Node</li>
            <li>Express</li>
            <li>PostgreSQL</li>
            <li>JWT</li>
          </ul>
        </div>
      </div>
      <div className="latch" ref={featured3Ref}>
        <img src={val} alt="val-exchange" />
        <div className="desc">
          <div className="title-gh">
            <a href="https://github.com/reykeem/Valo-Exchange">
              <img src={github} alt="github" />
            </a>
            <span className="title">Val Exchange</span>
          </div>
          <span className="proj-main">
            An ecommerce site that simulates the buying and selling of Valorant
            Game weapon skin assets
          </span>
          <ul className="techs-used">
            <li>React</li>
            <li>Redux</li>
            <li>Node</li>
            <li>Express</li>
            <li>MongoDB</li>
            <li>Webkit</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Featured;
