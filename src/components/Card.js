import React from "react";
import Typography from "@material-ui/core/Typography";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import { grey } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import { useTranslation } from "react-i18next";

const CardComp = ({ user }) => {
  const { t } = useTranslation();
  return (
    <div>
      <Card
        sx={{
          minWidth: 320,
          maxWidth: 320,
          maxHeight: 500,
          margin: "20px",
          boxShadow: "0 8px 40px -12px rgba(0,0,0,0.3)",
        }}
      >
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: grey[900] }} aria-label="recipe">
              {user.avatar}
            </Avatar>
          }
          title={user.name}
          subheader={t(user.time)}
        />
        <CardMedia
          component="img"
          height="194"
          image={user.image}
          alt={user.name}
        />
        <CardContent>
          <Typography variant="body2">{t(user.comment)}</Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            <FavoriteIcon />
          </IconButton>
          <IconButton aria-label="share">
            <ShareIcon />
          </IconButton>
        </CardActions>
      </Card>
    </div>
  );
};

export default CardComp;
