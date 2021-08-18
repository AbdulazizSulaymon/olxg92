import { faTelegram } from '@fortawesome/free-brands-svg-icons';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Fab, List, ListItem, ListItemText, TextField } from '@material-ui/core';
import React from 'react'
import { useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom'
import Window from '../../containers/Window/Window';
import { sendMsg, typing } from '../../redux/actions/chatActions';

const Chat = () => {
    const { id } = useParams();
    const chat = useSelector(state => state.chat)[id]?.data || [];
    const value = useSelector(state => state.chat)[id]?.value || "";

    const keyUp = (e) => (e.key === 'Enter') && send();
    const send = () => value.trim() !== "" && sendMsg(value, id);

    return (
        <Window>
            <div className="d-flex align-items-center mb-4">
                <Link to="/">
                    <Fab className="fs-6" size="small">
                        <FontAwesomeIcon icon={faHome} />
                    </Fab>
                </Link>
                <p className="title m-0 ms-3">{id}</p>
            </div>

            <List>
                {chat.length === 0 && <p>Yozishma mavjud emas</p>}
                {chat.map(v => (
                    <ListItem className="bg-white shadow rounded mb-3">
                        <ListItemText
                            primary={v.me ? "I" : id}
                            secondary={v.msg}
                        />
                    </ListItem>
                ))}
            </List>

            <div className="d-flex justify-content-between">
                <TextField label="message" onKeyUp={keyUp}
                    value={value} onChange={(e) => typing(e.target.value, id)} />

                <Fab color="primary" className="fs-1"
                    onClick={send}>
                    <FontAwesomeIcon icon={faTelegram} />
                </Fab>
            </div>
        </Window>
    )
}

export default Chat
