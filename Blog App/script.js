const form = document.getElementById('blog-form');
const postId = document.getElementById('post-id');
const title = document.getElementById('title');
const category = document.getElementById('category');
const tags = document.getElementById('tags');
const content = document.getElementById('content');
const blogList = document.getElementById('posts-list');

let blogs = JSON.parse(localStorage.getItem('blogs')) || [];

form.addEventListener('submit', (e) => {
    e.preventDefault();
    blogSubmission();
});


// Handle form submission
function blogSubmission() {
    const newObj = {
        id: postId.value ? parseInt(postId.value) : Date.now(),
        title: title.value,
        category: category.value,
        tags: tags.value.split(',').map(tag => tag.trim()),
        content: content.value
    };

    if (postId.value) {
        const index = blogs.findIndex(blog => blog.id === newObj.id);
        if (index !== -1) {
            blogs[index] = newObj;
        }
    } else {
        blogs.push(newObj);
    }

    saveToLocalStorage();
    displayBlogs();
    form.reset();
    postId.value = ''; // Clear the postId field after submission
}


// Display blog posts
function displayBlogs() {
    blogList.innerHTML = '';

    blogs.forEach((post) => {
        let div = document.createElement('div');
        div.classList.add('post');

        div.innerHTML = `
            <h3>${post.title}</h3>
            <p><strong>Category:</strong> ${post.category}</p>
            <p><strong>Tags:</strong> ${post.tags.join(', ')}</p>
            <p>${post.content}</p>
            <div class="actions">
                <button onclick="editPost(${post.id})">Edit</button>
                <button onclick="deletePost(${post.id})">Delete</button>
            </div>
        `;

        blogList.appendChild(div);
    });
}


// Edit a blog post
window.editPost = function(id) {
    const post = blogs.find(post => post.id === id);

    if (post) {
        title.value = post.title;
        category.value = post.category;
        tags.value = post.tags.join(', ');
        content.value = post.content;
        postId.value = post.id; // Set the ID for editing
    }
}


// Delete a blog post
window.deletePost = function(id) {
    blogs = blogs.filter(post => post.id !== id);
    saveToLocalStorage();
    displayBlogs();
}

// Save blogs to localStorage
function saveToLocalStorage() {
    localStorage.setItem('blogs', JSON.stringify(blogs));
}

// Initial display of all posts
displayBlogs();
