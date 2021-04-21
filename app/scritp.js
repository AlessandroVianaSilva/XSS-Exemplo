const getAllComments = async () => {
    const response = await axios.get('http://localhost:3000/api/comment');
    console.log(response.data)
}

const insertComment = async (comment) => {
    await axios.post('http://localhost:3000/api/comment', { comment })
}

const clearInputs = () => {
    document.getElementById('name').value = '';
    document.getElementById('comment').value = '';
}

document.getElementById('comment-btn').addEventListener('click', async () => {
    const name = document.getElementById('name').value;
    const comment = document.getElementById('comment').value;
    await insertComment({ name, comment });
    clearInputs();
    alert('Comentário inserido com sucesso.')
})

window.onload = async () => {
    clearInputs();
    await getAllComments()
}


