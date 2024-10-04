function generateToc(includeH1 = true) {
    const toc = document.getElementById('toc');

    const content = document.querySelector('.intoro');
    if (!content) return;

    const headers = includeH1
        ? content.querySelectorAll('h1, h2')
        : content.querySelectorAll('h2');

    headers.forEach((header, index) => {
        const li = document.createElement('li');
        const a = document.createElement('a');

        const id = `header-${index}`;
        header.id = id;

        a.href = `#${id}`;
        a.textContent = header.textContent;

        li.appendChild(a);
        toc.appendChild(li);
    });
};