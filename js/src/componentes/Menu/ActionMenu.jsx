import React,{useState} from 'react';
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import ButtonIcon from '../Buttons/ButtonIcon';

const ITEM_HEIGHT = 48;

const ActionMenu = ({options=[]}) => {
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div>
            <IconButton
                aria-label="more"
                aria-controls="long-menu"
                aria-haspopup="true"
                onClick={handleClick}
            >
                <MoreVertIcon />
            </IconButton>
            <Menu
                id="long-menu"
                anchorEl={anchorEl}
                keepMounted
                open={open}
                onClose={handleClose}
            >
                {options.map((option) => (
                    <li key={option.title} onClick={handleClose}>
                            <ButtonIcon
                                onClick={option.action}
                                textAlign="left"
                                startIcon={option.icon}
                                children={option.element ? option.element :null}
                                width="100%"
                                label={option.title}
                            />
                    </li>
                ))}
            </Menu>
        </div>
    );
}

export default ActionMenu