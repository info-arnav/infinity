import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import axios from "axios";

export default function Footer() {
  const handleMessage = (e) => {
    e.preventDefault();
    axios
      .post("/api/contact", { email: email, message: message })
      .then(setMessage(""))
      .then(setEmail(""));
  };
  const [message, setMessage] = useState("");
  const [email, setEmail] = useState("");
  return (
    <footer id="footer" class="footer-1">
      <div class="main-footer widgets-dark typo-light">
        <div class="" style={{ marginRight: "20px", marginLeft: "20px" }}>
          <div class="row">
            <div class="col-xs-12 col-sm-6 col-md-3">
              <div class="widget subscribe no-box">
                <h5 class="widget-title">
                  Infinity<span></span>
                </h5>
                <p>
                  Infinity offers an opportunity to every blogger out there to
                  display their thoughts in front of everyone. ‘Better to write
                  for yourself and have no public, than to write for the public
                  and have no self’. Passionate bloggers is a website where you
                  can write your thoughts and let people live in a thousand
                  worlds before they die.
                </p>
              </div>
            </div>

            <div class="col-xs-12 col-sm-6 col-md-3">
              <div class="widget no-box">
                <h5 class="widget-title">
                  Quick Links<span></span>
                </h5>
                <ul class="thumbnail-widget">
                  <li>
                    <a href="#.">&nbsp;Top Leaders</a>
                  </li>
                  <li>
                    <a href="#.">&nbsp;Top Leaders</a>
                  </li>
                </ul>
              </div>
            </div>

            <div class="col-xs-12 col-sm-6 col-md-3">
              <div class="widget no-box">
                <h5 class="widget-title">
                  Follow up<span></span>
                </h5>
                <a
                  className="fa"
                  href="https://www.facebook.com/infinity.newTechnology"
                  style={{ marginRight: "4px" }}
                >
                  {" "}
                  <Image src="/facebook.svg" height="11" width="11px"></Image>
                </a>
                <a
                  className="fa"
                  href="https://www.instagram.com/infinity.newtech/"
                  style={{ marginRight: "4px" }}
                >
                  {" "}
                  <Image src="/instagram.svg" height="11" width="11px"></Image>
                </a>
                <a
                  className="fa"
                  href="
                https://twitter.com/infinityNewTech"
                  style={{ marginRight: "4px" }}
                >
                  {" "}
                  <Image src="/twitter.svg" height="11" width="11px"></Image>
                </a>
                <a
                  className="fa"
                  href="https://www.linkedin.com/in/arnav-gupta-0922341a9/"
                  style={{ marginRight: "4px" }}
                >
                  {" "}
                  <Image src="/linkedin.svg" height="11" width="11px"></Image>
                </a>
                <a
                  className="fa"
                  href="https://www.youtube.com/channel/UCzzfqCy-j9XZA5KNosqzh6w"
                  style={{ marginRight: "4px" }}
                >
                  {" "}
                  <Image
                    src="/youtubeStudio.svg"
                    height="11"
                    width="11px"
                  ></Image>
                </a>
              </div>
            </div>
            <br />
            <br />

            <div class="col-xs-12 col-sm-6 col-md-3">
              <div class="widget no-box">
                <h5 class="widget-title">
                  Contact Us<span></span>
                </h5>
                <p>Wanna ask something? Send a message here.</p>
                <br></br>
                <form class="emailfield" onSubmit={handleMessage}>
                  <input
                    type="text"
                    name="message"
                    required
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <input
                    type="text"
                    name="message"
                    required
                    placeholder="Message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                  />
                  <input
                    class="submitbutton ripplelink"
                    type="submit"
                    value="Send Message"
                  />
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="footer-copyright">
        <div class="container">
          <div class="row">
            <div class="col-md-12 text-center">
              <p>Copyright Infinity @ 2021. All rights reserved.</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
