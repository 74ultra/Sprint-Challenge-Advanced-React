import React from 'react';
import { Menu, Button } from 'semantic-ui-react';
import '../../styles.scss';
import useBackgroundShift from '../../hooks/useBackgroundShift.js';

const NavBar = () => {

    const [background, setBackground] = useBackgroundShift(false);
    
    const toggleBackground = (e) => {
        e.preventDefault();
        setBackground(!background)
    }
    
    return(
        <Menu className='navbar' inverted>
            <Button inverted onClick={toggleBackground}>Shift Background</Button>
        </Menu>
    )
}

export default NavBar;