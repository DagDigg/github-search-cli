import React from 'react'
import { List, ListItem, withStyles, ListItemText, ListItemAvatar, Avatar, Typography } from '@material-ui/core/'
import * as myCostants from '../Constants'
const StyledListItem = withStyles({
    root: {
      backgroundColor: "white",
    },
  })(ListItem);

const Commit = ({data}) => {
    const imgUrl = data.author ? data.author.avatar_url : myCostants.FALLBACK_IMAGE_URL
    const formattedDate = data.commit.committer.date.replace(/T|Z/g,' ')
    return(
        <List>
            <StyledListItem align-items='flex-start'>
                <ListItemAvatar>
                    <Avatar src={imgUrl} />
                </ListItemAvatar>
                
                <ListItemText
                    primary={
                        <Typography component='a' href={data.html_url}> {data.commit.message} </Typography>
                    }
                    secondary={
                        <React.Fragment>
                            <Typography component='span' color='textSecondary'>
                                {data.commit.committer.name} on {formattedDate}
                            </Typography>
                        </React.Fragment>
                    }
                />
                
            </StyledListItem>
        </List>
    )
}

export default Commit;
