import React from 'react';
import { List, ListItem, withStyles, ListItemText, Typography } from '@material-ui/core/'

const StyledListItem = withStyles({
    root: {
      backgroundColor: "white",
    },
  })(ListItem);

const Repository = ( {data, onClick} ) => {
    return (
        <List>
            <StyledListItem button onClick={() => onClick(data.url)}>
                <ListItemText
                    primary={data.name}
                    secondary={
                        <React.Fragment>
                            <Typography component="span" color="textPrimary">
                                {data.description}
                            </Typography>
                        </React.Fragment>
                    }
                />
            </StyledListItem>
        </List>
    );
}

export default Repository;