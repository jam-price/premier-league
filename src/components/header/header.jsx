import styles from "./header.module.scss";
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'

const Header = () => {
  return (
    <div><div>
    <AppBar position="static">
        <Toolbar>
            <Typography variant="title" color="inherit">
            React & Material-UI Sample Application
            </Typography>
        </Toolbar>
    </AppBar>
    </div></div>
  );
};

export default Header;
