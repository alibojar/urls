import React, { useEffect, useState } from 'react';
import axios from "axios";
import './App.css';
import { url } from 'inspector';
import { stringify } from 'querystring';

function App() {
    
    const [data, setData] = useState({
        urls: [
            {
                originalURL:'',
                path:''
            }
        ]
    });
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    useEffect(() => {
        (async function getUrls() {
            const gqlQuery = {
                query: `query urls{
                    urls{
                      originalURL
                      path
                    }
                  }`,
                variables: {},
                operationName: 'urls'
            }

            const url = 'http://localhost:3000/graphql'
            const headers = {
                'content-type': 'application/json'
            }
            const { data } = await axios({
                url,
                method: 'post',
                headers: headers,
                data: gqlQuery
            })
            console.log(data)
            setData(data)
        })()
    }, [])


    return (
        <div className="App">
            <ul>
                {data.urls.map(url => (
                    <li key={url.path}>
                        <a href={url.path}>{url.originalURL}</a>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default App;
