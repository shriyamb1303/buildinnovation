import React, { useState } from 'react';
import { TextInput } from '@mantine/core';
import { IconSearch } from '@tabler/icons-react';
import styles from './home.module.css'

const Searchbar = ({ setSearchQuery, setOnSearch }) => {
    const [query, setQuery] = useState('');

    const handleQueryChange = (event) => {
        const value = event.target.value;
        setQuery(value);
        setSearchQuery(value);
    };

    return (
        <div className={styles.search} style={{ display: 'flex', alignItems: 'center', width: '450px', height: '50px' }}>
            <TextInput
                placeholder="Search..."
                value={query}
                onChange={handleQueryChange}
                radius="xl"
            />
            <IconSearch onClick={() => setOnSearch(true)} style={{ marginLeft: 10 }} />
        </div>
    );
};

export default Searchbar;
