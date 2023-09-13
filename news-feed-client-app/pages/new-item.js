import Head from 'next/head';
import styles from '../styles/Home.module.css';
import { styled } from '@mui/material/styles';
import { Grid, Paper } from '@mui/material';
import NewsFeed from '../components/news-feed';
import fetch from 'node-fetch';
import { useState, useEffect } from 'react';
import AddItemForm from '../components/add-item-form';


export default function NewItem() {

  return (
    <div className={styles.container}>
      <Head>
        <title>Appfront Add New Item</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <AddItemForm />
      </main>

      <style jsx>{`
        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          background-color: #efefef;
          padding: 30px;
        }
        footer {
          width: 100%;
          height: 50px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          background-color: #d9d9d9;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }
        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  )
}
