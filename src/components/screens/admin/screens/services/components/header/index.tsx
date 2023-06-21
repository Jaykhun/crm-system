import styles from '../../styles.module.scss'
import { Input } from 'antd'
import { Button } from 'antd'
import Link from 'next/link'
import { useRouter } from 'next/router'

const { Search } = Input

const Header = () => {
    const route = useRouter()

    return (
        <div className={styles.services__header}>
            <Search
                placeholder='Search'
                allowClear
                enterButton="Search"
                size="large"
            />

            <Link href={`${route.pathname}/add`}>
                <Button type='primary' size='large'>
                    Add Patients
                </Button>
            </Link>
        </div>
    )
}

export default Header