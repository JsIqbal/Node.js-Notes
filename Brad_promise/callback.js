// ----Phase 1
/*
const posts = [
    {
        title: 'post one',
        body: 'this is post one'
    },
    {
        title: 'post two',
        body: 'this is post two'
    }   
]

function getPosts() {
    setTimeout(() => {
        let output = '';
        posts.forEach((post, index) => {
            output += `<li>${post.title}</li>`;
        });
        document.body.innerHTML = output;
    }, 1000);
}

// function getPosts() {
//     setTimeout(() => {
//         const output = '';
//         posts.forEach((post, index) => {
//             output += `<li>${post.title}</li>`;
//         });
//         document.body.innerHTML = output;
//     }, 1000);
// }

function createPost(post) {
    setTimeout(() => {
        posts.push(post);
    }, 1000);
}

getPosts();

createPost({ title: 'post three', body: 'this is post three' });
*/

// -------------------

// ----Phase 2
const posts = [
    {
        title: 'post one',
        body: 'this is post one'
    },
    {
        title: 'post two',
        body: 'this is post two'
    }   
]

function getPosts() {
    setTimeout(() => {
        let output = '';
        posts.forEach((post, index) => {
            output += `<li>${post.title}</li>`;
        });
        document.body.innerHTML = output;
    }, 1000);
}

function createPost(post) {
    setTimeout(() => {
        posts.push(post);
        getPosts();
    }, 2000);
}


createPost({ title: 'post three', body: 'this is post three' }, getPosts);