import React, { useState, useEffect, useRef } from "react";
import styles from "../../styles/mainContent.module.scss";
import bg1 from "../../assets/images/bg2.jpg";
import bg2 from "../../assets/images/bg1.jpg";
import bg3 from "../../assets/images/bg3.jpg";
import bg4 from "../../assets/images/bg1.jpg";
import man1 from "../../assets/images/man1.jpg";

import { IoIosArrowDown, IoMdSearch } from "react-icons/io";
import { AiOutlinePlayCircle } from "react-icons/ai";

const MainContent = () => {
  const [isNum, setIsNum] = useState(0);
  let count = useRef(1);
  const picArray = [bg1, bg2, bg3, bg4];
  useEffect(() => {
    const IS = Number(localStorage.getItem("image"));
    if (IS >= 2) {
      localStorage.setItem("image", 0);
      return;
    }
    count.current = count.current + IS;
    setIsNum(count.current);
    localStorage.setItem("image", count.current);
  }, []);

  const myStyle = {
    backgroundImage: `url(${picArray[isNum]})`,
    height: "95vh",
    backgroundSize: "cover",
  };
  return (
    <div className={styles.mainContainer}>
      <div className={styles.mainBody} style={myStyle}>
        <div className={styles.firstDiv}>
          <div className={styles.mainFirstDiv}>
            <h1 className={styles.mainHeading}>
              Look First <br />
              Then leap.
            </h1>
            <div className={styles.group}>
              <IoMdSearch className={styles.search} />
              <input
                className={styles.mainInput}
                placeholder="Search markets here"
              />
            </div>
            <div className={styles.marketBody}>
              <div className={styles.marketGroup}>
                <div className={styles.marketContainer}>
                  <img
                    src="https://img.icons8.com/color/2x/bitcoin.png"
                    alt="bitcoin"
                    width="30px"
                    height="30px"
                  />
                  <div className={styles.marketDetails}>
                    <h5>BTCUSD</h5>
                    <p>+2.05%</p>
                  </div>
                </div>
              </div>
              <div className={styles.marketGroup}>
                <div className={styles.marketContainer}>
                  <img
                    src="https://img.icons8.com/color/2x/bitcoin.png"
                    alt="tesla"
                    width="30px"
                    height="30px"
                  />
                  <div className={styles.marketDetails}>
                    <h5>TSLA</h5>
                    <p>+2.05%</p>
                  </div>
                </div>
              </div>
              <div className={styles.marketGroup}>
                <div className={styles.marketContainer}>
                  <img
                    src="https://img.icons8.com/color/2x/bitcoin.png"
                    alt="apple"
                    width="30px"
                    height="30px"
                  />
                  <div className={styles.marketDetails}>
                    <h5>AAPL</h5>
                    <p>+2.05%</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.secondDiv}>
            <div className={styles.secondDivBody}>
              <div className={styles.partOne}>
                <img src={man1} alt="aleks" />
                <div className={styles.subOne}>
                  <h4>
                    Lorem ipsum dolor sit amet con.
                  </h4>
                  <div className={styles.desc}>
                    <p className={styles.name}>Aleks Dowie, Top Seller</p>

                    <IoIosArrowDown className={styles.arrow} />
                  </div>
                </div>
              </div>
              <button className={styles.btn}>
                <AiOutlinePlayCircle className={styles.play} />
                <p>Play Epic Explainer</p>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainContent;
