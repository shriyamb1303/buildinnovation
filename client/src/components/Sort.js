import { useState } from 'react';
import { Input, InputBase, Combobox, useCombobox } from '@mantine/core';
import styles from './home.module.css'

const groceries = ['$0 - $100', '$100 - $500', '>$500', 'ALL'];

export const Sort = ({ setSortOption }) => {
    const combobox = useCombobox({
        onDropdownClose: () => combobox.resetSelectedOption(),
    });

    const [value, setValue] = useState(null);

    const options = groceries.map((item) => (
        <Combobox.Option value={item} key={item}>
            {item}
        </Combobox.Option>
    ));

    return (
        <div className={styles.sort}
            styles={{ width: '350px' }}
        >
            <Combobox
                store={combobox}
                onOptionSubmit={(val) => {
                    setValue(val);
                    setSortOption(val);
                    combobox.closeDropdown();
                }}
            >
                <Combobox.Target>
                    <InputBase
                        component="button"
                        type="button"
                        pointer
                        rightSection={<Combobox.Chevron />}
                        rightSectionPointerEvents="none"
                        onClick={() => combobox.toggleDropdown()}
                    >
                        {value || <Input.Placeholder>Price</Input.Placeholder>}
                    </InputBase>
                </Combobox.Target>

                <Combobox.Dropdown
                // style={{ width: '350px' }}
                >
                    <Combobox.Options>{options}</Combobox.Options>
                </Combobox.Dropdown>
            </Combobox>
        </div>
    );
}