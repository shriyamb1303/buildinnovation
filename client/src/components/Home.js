import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Navbarp from './Navbarp';
import styles from './home.module.css';
import Searchbar from './Searchbar';
import { Sort } from './Sort';
import { Button } from '@mantine/core';
import { IconShoppingCart } from '@tabler/icons-react';
import axios from 'axios';
import { Carouselelement } from './Carouselelement';

const Home = () => {
    const [user, setUser] = useState(null);
    const [token, setToken] = useState(localStorage.getItem('token'));
    const [totalp, setTotalp] = useState(0);
    const [searchQuery, setSearchQuery] = useState('');
    const [onSearch, setOnSearch] = useState(false);
    const [sortOption, setSortOption] = useState(null);


    const navigate = useNavigate();

    const higherprice = (p) => {
        setTotalp(p + totalp);
    }

    const lowerprice = (p) => {
        if (totalp > 0) {
            setTotalp(totalp - p);
        }
    }

    useEffect(() => {
        if (!token) {
            navigate('/login');
        }
        fetch('https://dummyjson.com/auth/me', {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${token}`,
            },
        })
            .then(res => res.json())
            .then(data => {
                setUser(data);
            })
            .catch(err => console.log(err));
    },
        [token, navigate]
    )

    return (
        <div>
            <Navbarp user={user} />
            <div className={styles.parent}>

                <div className={styles.topthree}>
                    <Searchbar setSearchQuery={setSearchQuery} setOnSearch={setOnSearch} />
                    <Sort setSortOption={setSortOption} />
                    <Button variant="outline" style={{ marginLeft: '100px', marginRight: '50px' }}>
                        <IconShoppingCart size={30} style={{ marginRight: '10px' }} />
                        Total - {totalp}
                    </Button>
                </div>

                <Carouselelement
                    higherprice={higherprice} lowerprice={lowerprice} searchQuery={searchQuery}
                    onSearch={onSearch} setOnSearch={setOnSearch} sortOption={sortOption}
                />

            </div>
        </div>
    )
}

export default Home
