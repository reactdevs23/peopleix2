import React from "react";
import classes from "./MainComponent.module.css";

const MainComponent = ({ logo, arrow, initialPage, data }) => {
  return (
    <>
      <div
        className={[classes.mainWrapper, classes.initialPageWrapper].join(" ")}
      >
        {" "}
        <div className={[classes.wrapper, classes.initialPage].join(" ")}>
          <div className={classes.textContainer}>
            <div className={classes.header}>
              <img src={logo} alt="#" className={classes.logo} />{" "}
              {/* <img src={pattern} alt="#" className={classes.pattern} /> */}
            </div>

            <div className={classes.infoContainer}>
              <h2 className={classes.heading}>{initialPage.heading}</h2>

              <div className={classes.arrow}>{arrow}</div>
            </div>
          </div>

          <img src={initialPage.img} alt="#" className={classes.img} />
        </div>{" "}
      </div>
      {data.map((el, i) => (
        <React.Fragment key={i}>
          <div
            className={[
              classes.mainWrapper,
              (i + 1) % 2 !== 0 && classes.oddPageWrapper,
            ].join(" ")}
          >
            <div
              className={[
                classes.wrapper,
                classes.otherPages,
                classes[`wrapper${i + 1}`],
                (i + 1) % 2 === 0 && classes.even,
              ].join(" ")}
            >
              <div className={classes.textContainer}>
                <div className={classes.header}>
                  <img src={logo} alt="#" className={classes.logo} />{" "}
                  {/* <img src={pattern} alt="#" className={classes.pattern} /> */}
                </div>

                <h2 className={classes.heading}>{el.heading}</h2>

                <p className={classes.info}>{el.info}</p>
              </div>

              <img src={el.img} alt="#" className={classes.img} />
            </div>
          </div>
        </React.Fragment>
      ))}
    </>
  );
};

export default MainComponent;
