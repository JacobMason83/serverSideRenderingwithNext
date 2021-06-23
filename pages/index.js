import React from 'react'
import Link from 'next/link'
import styles from './index.module.css'
import Card from './Card'
import data from './api/data.json'
// import { initStore, initalCards, addItem } from '../store'



export default class Index extends React.Component {
    // static async getInitialProps ({ store }) {
    //     return store.dispatch(initalCards());
    // }
        static async getInitialProps () {
            return {cards: data }
        }
    render(){
    return (
        <div className={styles.app}>
            <header className={styles.header}>
            <Link href='/page3'>
                <img 
                src="/logo.png" 
                alt="logo"
                className={styles.logo} />
                </Link>
            </header>
            <div className={styles.grid}>
            {
               this.props.cards.map((card) => (
                   <Card key={card.id} />
               ))
            }
            </div>
            {/* //this would allow you to add an item to the store thru the addItem function created at the store.js file 
            <button onClick={() => dispatch(addItem())}></button> */}
        </div>
    )
}
}

// export default initStore.withRedux(Index)