import React, { Component } from 'react';
import { fade, withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';
import Badge from '@material-ui/core/Badge';
import MailIcon from '@material-ui/icons/Mail';
import NotificationsIcon from '@material-ui/icons/Notifications';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

class AppBarComponent extends Component {
	constructor(props) {
		super(props);
		this.state = {
			setAnchorEl: null,
			isMenuOpen: false
		};
		this.handleProfileMenuOpen = this.handleProfileMenuOpen.bind(this);
		this.handleMenuClose = this.handleMenuClose.bind(this);
	}

	handleProfileMenuOpen(event) {
		this.setState({ isMenuOpen: true });
	}

	handleMobileMenuClose() {
		setMobileMoreAnchorEl(null);
	}

	handleMenuClose() {
		this.setState({ isMenuOpen: false });
	}

	handleMobileMenuOpen(event) {
		setMobileMoreAnchorEl(event.currentTarget);
	}

	render() {
		const { classes } = this.props;
		const menuId = 'primary-search-account-menu';
		const mobileMenuId = 'primary-search-account-menu-mobile';
		const { anchorEl, isMenuOpen } = this.state;
		return (
			<div className={classes.root}>
				<AppBar position="fixed">
					<Toolbar>
						<Typography className={classes.title} variant="h6" noWrap>
							YASIN-TECH
						</Typography>
						<div className={classes.search}>
							<div className={classes.searchIcon}>
								<SearchIcon />
							</div>
							<InputBase
								placeholder="Search…"
								classes={{
									root: classes.inputRoot,
									input: classes.inputInput
								}}
								inputProps={{ 'aria-label': 'Search' }}
							/>
						</div>
						<div className={classes.grow} />
						<div className={classes.sectionDesktop}>
							<IconButton aria-label="Show 4 new mails" color="inherit">
								<Badge badgeContent={4} color="secondary">
									<MailIcon />
								</Badge>
							</IconButton>
							<IconButton aria-label="Show 17 new notifications" color="inherit">
								<Badge badgeContent={17} color="secondary">
									<NotificationsIcon />
								</Badge>
							</IconButton>
							<IconButton
								edge="end"
								aria-label="Account of current user"
								aria-controls={menuId}
								aria-haspopup="true"
								onClick={this.handleProfileMenuOpen}
								color="inherit"
							>
								<AccountCircle />
							</IconButton>
						</div>
						<div className={classes.sectionMobile}>
							<IconButton
								aria-label="Show more"
								aria-controls={mobileMenuId}
								aria-haspopup="true"
								onClick={this.handleMobileMenuOpen}
								color="inherit"
							>
								<MenuIcon />
							</IconButton>
						</div>
					</Toolbar>
				</AppBar>
				<Menu
					anchorEl={anchorEl}
					anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
					id={menuId}
					keepMounted
					transformOrigin={{ vertical: 'top', horizontal: 'right' }}
					open={isMenuOpen}
					onClose={this.handleMenuClose}
				>
					<MenuItem onClick={this.handleMenuClose}>Profile</MenuItem>
					<MenuItem onClick={this.handleMenuClose}>My account</MenuItem>
				</Menu>
			</div>
		);
	}
}
const styles = (theme) => ({
	root: {
		flexGrow: 1,
		margin: 0
	},
	appBar: {
		margin: 0
	},
	grow: {
		flexGrow: 1
	},
	title: {
		display: 'none',
		[theme.breakpoints.up('sm')]: {
			display: 'block'
		}
	},
	sectionDesktop: {
		display: 'none',
		[theme.breakpoints.up('md')]: {
			display: 'flex'
		}
	},
	sectionMobile: {
		display: 'flex',
		[theme.breakpoints.up('md')]: {
			display: 'none'
		}
	},
	search: {
		position: 'relative',
		borderRadius: theme.shape.borderRadius,
		backgroundColor: fade(theme.palette.common.white, 0.15),
		'&:hover': {
			backgroundColor: fade(theme.palette.common.white, 0.25)
		},
		marginLeft: 0,
		width: '100%',
		[theme.breakpoints.up('sm')]: {
			marginLeft: theme.spacing(1),
			width: 'auto'
		}
	},
	searchIcon: {
		width: theme.spacing(7),
		height: '100%',
		position: 'absolute',
		pointerEvents: 'none',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center'
	},
	inputRoot: {
		color: 'inherit'
	},
	inputInput: {
		padding: theme.spacing(1, 1, 1, 7),
		transition: theme.transitions.create('width'),
		width: '100%',
		[theme.breakpoints.up('sm')]: {
			width: 120,
			'&:focus': {
				width: 200
			}
		}
	}
});

export default withStyles(styles)(AppBarComponent);
