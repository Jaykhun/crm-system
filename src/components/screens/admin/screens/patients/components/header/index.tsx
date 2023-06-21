import React from 'react'
import { Input } from 'antd'
import { Button } from 'antd'
import styles from '../../styles.module.scss'

const { Search } = Input

const Header = () => {
    return (
        <div className={styles.users__header}>
            <Search
                placeholder='Search'
                allowClear
                enterButton="Search"
                size="large"
            />

            <Button type='primary' size='large'>Add Patients</Button>
        </div>
    )
}

export default Header