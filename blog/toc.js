//　目次のJava
document.addEventListener("DOMContentLoaded", function() {
    const toc = document.querySelector('#toc');
    const headings = document.querySelectorAll('h2');

    headings.forEach((heading, index) => {
        const id = `heading-${index}`;
        heading.setAttribute('id', id);

        const listItem = document.createElement('li');
        const link = document.createElement('a');
        link.textContent = heading.textContent;
        link.setAttribute('href', `#${id}`);

        listItem.appendChild(link);
        toc.appendChild(listItem);
    });
})