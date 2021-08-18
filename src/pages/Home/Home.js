import { faUser } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import Window from '../../containers/Window/Window';

const Home = () => {
    const contacts = useSelector(state => state.contacts.data);

    return (
        <Window>
            <p className="title">Chat</p>
            <List component="nav" >
                {contacts.map(v => <Link to={`/chat/${v.id}`}>
                    <ListItem button>
                        <ListItemIcon>
                            <FontAwesomeIcon icon={faUser} />
                        </ListItemIcon>
                        <ListItemText primary={v.name} />
                    </ListItem>
                </Link>)}
            </List>
        </Window>
    )
}

export default Home;
