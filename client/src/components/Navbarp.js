import React from 'react';
import { IconSearch } from '@tabler/icons-react';
import { IconUser } from '@tabler/icons-react';
import { IconLogout } from '@tabler/icons-react';
import { useNavigate } from 'react-router-dom';
// import { IconLogin } from '@tabler/icons-react';

const Navbarp = ({ user }) => {

    const navigate = useNavigate();

    const handleclick = () => {
        localStorage.removeItem('token');
        alert("USER LOGGED OUT!!");
        navigate('/login');
    }

    return (
        <nav style={styles.navbar}>
            <div style={styles.left}>
                <button style={styles.searchButton}><IconSearch size={20} /></button>
            </div>
            <div style={styles.center}>
                Company
            </div>
            <div style={styles.right}>
                {user ? (
                    <div style={styles.userInfo}>
                        <IconUser size={20} style={{ marginRight: 7 }} />
                        {user.firstName}
                        <button style={styles.logoutButton} onClick={handleclick}><IconLogout size={20} /></button>
                    </div>
                ) : (
                    <button style={styles.loginButton}>Login</button>
                )}
            </div>
        </nav>
    );
};

const styles = {
    navbar: {
        display: 'flex',
        height: '60px',
        justifyContent: 'space-between',
        alignItems: 'center',
        // backgroundColor: '#333',
        backgroundColor: '#111',
        color: '#fff',
        padding: '10px 30px',
    },
    left: {
        display: 'flex',
        alignItems: 'center',
    },
    searchButton: {
        // backgroundColor: 'transparent',
        backgroundColor: '#111',
        color: '#111',
        border: 'none',
        cursor: 'pointer',
        marginRight: 10,
    },
    center: {
        flex: 1,
        textAlign: 'center',
        paddingLeft: 60,
    },
    right: {
        display: 'flex',
        alignItems: 'center',
    },
    userInfo: {
        display: 'flex',
        alignItems: 'center',
        marginRight: 10,
    },
    logoutButton: {
        backgroundColor: '#111',
        color: '#fff',
        border: 'none',
        cursor: 'pointer',
        marginLeft: 25,
        // justifyContent: 'center',
        display: 'flex',
    },
    loginButton: {
        backgroundColor: '#111',
        border: 'none',
        color: '#fff',
        cursor: 'pointer',
    },
};

export default Navbarp;
