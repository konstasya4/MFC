import React from 'react';
import PostItem from "./PostItem";
import {TransitionGroup, CSSTransition} from "react-transition-group";

const StateList = ({posts}) => {

    // if (!posts.length) {
    //     return (
    //         <h1 style={{textAlign: 'center'}}>
    //             Посты не найдены!
    //         </h1>
    //     )
    // }

    return (
        <div>
             {posts.map((post) =>
<PostItem post={post} key={post.id}/>
             
    
      )}
            {/* <TransitionGroup>
                {posts.map((post, index) =>
                    <CSSTransition
                        key={post.id}
                        timeout={500}
                        classNames="post"
                    >
                        <PostItem remove={remove} number={index + 1} post={post} />
                    </CSSTransition>
                )}
            </TransitionGroup> */}
        </div>
    );
};

export default StateList;