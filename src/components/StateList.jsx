import React from 'react';
import StateItem from "./StateItem";

const StateList = ({posts}) => {
    if (!posts || !posts.length) {
        return (
            <h1 style={{textAlign: 'center'}}>
                Посты не найдены!
            </h1>
        )
    }

    return (
        <div>
            {posts.map((post) =>
                <StateItem post={post} key={post.id}/>
            )}
        </div>
    );
};

export default StateList;
