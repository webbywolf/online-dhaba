import useBreakpoint from "antd/lib/grid/hooks/useBreakpoint";
import React, { useEffect, useState } from "react";
import { createUseStyles } from "react-jss";
import { useRouteMatch } from "react-router-dom";
import Footer from "../components/Footer";
import HomeHeader from "../components/HomeHeader";
import Loader from "../components/Loader";
import ProductsSection from "../components/ProductsSection";

function Category() {
  const {
    params: { categoryName },
  } = useRouteMatch() || {};
  const classes = useStyles();
  const screens = useBreakpoint();
  const [loading, setLoading] = useState(true);
  const isMd = screens.md;

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 4000);
  }, []);

  return (
    <div className={classes.categoryPage}>
      <HomeHeader />
      <div className={classes.pageContent}>
        {!loading ? (
          <ProductsSection
            title={
              <>
                {isMd && "Showing Products In This"} Category :{" "}
                <b className={classes.categoryName}>
                  {categoryName.split("-").join(" ")}
                </b>
              </>
            }
          />
        ) : (
          <Loader height="60vh" />
        )}
      </div>
      <Footer />
    </div>
  );
}

const useStyles = createUseStyles(() => ({
  pageContent: {
    minHeight: "60vh",
    paddingBottom: "4rem",
  },
  categoryName: {
    textTransform: "capitalize",
    fontWeight: 700,
    color: "#ff5546",
  },
}));

export default Category;
