import React from "react";
import PropTypes from "prop-types";

import { Grid } from "@material-ui/core";

import useStyles from "./style";

export default function FilterTableGrid(props) {
  const { filtersHidden, children } = props;

  const classes = useStyles();

  return (
    <Grid container spacing={4} className={classes.gridContainer}>
      {!filtersHidden ? (
        <Grid item className={classes.leftGridChild}
              xs={12}
              md={4}
              lg={4}
              xl={2}
        >
          {children[0]}
        </Grid>
      ) : null}
      {children.length <= 1 ? null : (
        <Grid
          item
          xs={filtersHidden ? 12 : 12}
          md={filtersHidden ? 12 : 8}
          lg={filtersHidden ? 12 : 8}
          xl={filtersHidden ? 12 : 10}
          className={classes.rightGridChild}
        >
          {children[1]}
        </Grid>
      )}
    </Grid>
  );
}

FilterTableGrid.propTypes = {
  filtersHidden: PropTypes.bool.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};

FilterTableGrid.defaultProps = {
  children: [],
};
