import React, { useEffect } from 'react';
import styles from './redditList.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { fetchReddit } from '../api/redditSlice';

const RedditList = () => {
    const dispatch = useDispatch();
    const { data, loading, error } = useSelector((state) => state.reddit);

    useEffect(() => {
        dispatch(fetchReddit()); // Replace 'javascript' with any subreddit
    }, [dispatch]);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

    return (
        <ul>
            {data.map((item) => (
                <li key={item.data.id}>{item.data.title}</li>
            ))}
        </ul>
    );
};

export default RedditList;
