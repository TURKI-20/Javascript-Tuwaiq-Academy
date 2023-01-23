function likePost(postNum) {
    const post = document.getElementById(`like${postNum}`)
    post.classList.toggle("fa-solid")
}

count1 = 1
count2 = 1
count3 = 1
count4 = 1

function addComment(commentNum) {
    const comment = document.getElementById(`input${commentNum}`)
    if (comment.value === '') {
        alert("Please enter a comment before click add comment")
        return;
    }
    const div = document.getElementById(`div${commentNum}`)
    let h6 = document.createElement("h6")
    h6.setAttribute("id", `h6${commentNum}`)
    if (commentNum === 1) {
        h6.textContent = `Comment ${count1}`
        count1++
    } else if (commentNum === 2) {
        h6.textContent = `Comment ${count2}`
        count2++
    } else if (commentNum === 3) {
        h6.textContent = `Comment ${count3}`
        count3++
    } else {
        h6.textContent = `Comment ${count4}`
        count4++
    }
    let button = document.createElement("button")
    button.classList.add("btn", "btn-danger", "delete-btn")
    button.innerHTML = "Delete"
    button.setAttribute("onclick", `deleteComment(${commentNum})`)
    let p = document.createElement("p")
    p.setAttribute("id", `p${commentNum}`)
    let hr = document.createElement("hr")
    p.textContent = comment.value
    div.appendChild(h6)
    div.appendChild(p)
    p.appendChild(button)
    p.appendChild(hr)
    comment.value = ''
}

function deleteComment(commentNum) {
    const comment = document.getElementById(`p${commentNum}`)
    comment.remove()
    const h6 = document.getElementById(`h6${commentNum}`)
    h6.remove()
    if (commentNum === 1) {
        h6.textContent = `Comment ${count1}`
        count1 = 1
    } else if (commentNum === 2) {
        h6.textContent = `Comment ${count2}`
        count2 = 1
    } else if (commentNum === 3) {
        h6.textContent = `Comment ${count3}`
        count3 = 1
    } else {
        h6.textContent = `Comment ${count4}`
        count4 = 1
    }
}