import React from "react";
import "../styles/featured.css";
import jpeg from "../assets/jpegmarketplace.png";
import val from "../assets/valex.png";
import latchql from "../assets/latchql.png";
import GitHubIcon from "@mui/icons-material/GitHub";
import github from "../assets/icons8-github-48.png";

type FeaturedPropsType = {
  featuredRef: any;
  featured1Ref: any;
  featured2Ref: any;
  featured3Ref: any;
};

function Featured({
  featuredRef,
  featured1Ref,
  featured2Ref,
  featured3Ref,
}: FeaturedPropsType) {
  return (
    <div className="featured" ref={featuredRef}>
      <h1>Featured Projects</h1>
      <div className="latch" ref={featured1Ref}>
        <img src={latchql} alt="latchql" />
        <div className="desc">
          <div className="title-gh">
            <a href="https://github.com/oslabs-beta/LatchQL">
              <img src={github} alt="github" />
            </a>
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
