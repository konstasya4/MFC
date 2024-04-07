import React, { useState, useEffect } from 'react';
import StatementList from "../../API/StatementList";
import StateList from "../../components/StateList";

function Statements() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetchPosts();
    }, []);

    const fetchPosts = async () => {
        try {
            const responce = await StatementList.getAll();
            // Предполагается, что response.data - это массив постов
            // setPosts(response.data);
            setPosts([...responce])
        } catch (error) {
            console.error('Error fetching posts:', error);
        }
    };

    const removePost = (post) => {
        setPosts(posts.filter(p => p.id !== post.id));
    };
   

    return (
        <div className="App">

            {/* Передаем posts в StateList */}
            <StateList remove={removePost} posts={posts} />
        </div>
    );
}

export default Statements;
