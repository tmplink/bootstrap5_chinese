class bs5App{
    active(page_path){
        fetch(page_path).then(response => response.text()).then(html => {
            document.querySelector('#app').innerHTML = html;
        });
    }
}