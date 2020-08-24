import { fade, makeStyles } from '@material-ui/core/styles';

export const headerStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },

}));

export const gridStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginTop: 20,
    padding: '0 10px',
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

export const cardStyles = makeStyles({
  root: {
    minWidth: 275,
    textAlign: 'center',
    borderBottom: '3px solid'
  },
  title: {
    fontSize: 20,
  },
  pos: {
    fontSize: 50,

    marginBottom: 12,
  },
  cases: {
    backgroundColor: 'red',
    borderBottomColor: 'red'
  },
  death: {
    backgroundColor: 'blue',
  },
});
export const countryStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  cover: {
    height: 160,
  },
  content: {
    flex: '1 0 auto',
  },
}));