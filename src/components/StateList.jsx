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

// import React from 'react';
// import StateItem from "./StateItem";
// import {TransitionGroup, CSSTransition} from "react-transition-group";

// const StateList = ({posts}) => {

//     if (!posts.length) {
//         return (
//             <h1 style={{textAlign: 'center'}}>
//                 Посты не найдены!
//             </h1>
//         )
//     }

//     return (
//         <div>
//              {posts.map((post) =>
// <StateItem post={post} key={post.id}/>
             
//     //
//       )}
//             <TransitionGroup>
//                 {posts.map((post, index) =>
//                     <CSSTransition
//                         key={post.id}
//                         timeout={500}
//                         classNames="post"
//                     >
//                         <StateItem remove={remove} number={index + 1} post={post} />
//                     </CSSTransition>
//                 )}
//             </TransitionGroup>
//         </div>
//     );
// };

// export default StateList;